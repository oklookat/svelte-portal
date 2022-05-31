<script lang="ts" context="module">
	import { tick } from 'svelte';

	/** DOM Element or CSS Selector */
	type Target = HTMLElement | string;

	/**
	 * **Usage:**
	 *
	 * CSS selector:
	 * ```js
	 * <div use:portal={'.css-selector'}>
	 * ```
	 *
	 * HTMLElement:
	 * ```js
	 * <div use:portal={document.body}>
	 * ```
	 */
	export function portal(el: HTMLElement, target: Target = 'body') {
		let targetEl: HTMLElement | null;
		async function update(newTarget: Target) {
			target = newTarget;
			// element
			if (target instanceof HTMLElement) {
				targetEl = target;
			} else if (typeof target === 'string') {
				// selector
				targetEl = document.querySelector(target);
				if (targetEl === null) {
					await tick();
					targetEl = document.querySelector(target);
				}
				if (targetEl === null) {
					throw Error(`[svelte-portal]: no element found matching css selector: "${target}"`);
				}
			} else {
				// ???
				throw TypeError(
					`[svelte-portal]: target must be string (CSS selector) or HTMLElement`
				);
			}
			targetEl.appendChild(el);
		}

		function destroy() {
			el?.parentNode?.removeChild(el);
		}

		update(target);
		return {
			update,
			destroy
		};
	}
</script>

<script lang="ts">
	export let target: Target = 'body';
</script>

<div use:portal={target} {...$$restProps}>
	<slot />
</div>
