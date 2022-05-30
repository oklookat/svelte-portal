# Svelte component for rendering outside the parent component

Fork of: https://github.com/romkor/svelte-portal

Changes:
- Based on SvelteKit
- Typescript support
- Little code refactoring
- https://github.com/romkor/svelte-portal/issues/129

# Installation

```sh
npm i @oklookat/svelte-portal
```


# Usage

`<Portal />` component has only one property: `target`.

Target can be a HTMLElement or a CSS selector that points to an already existing element.

When no target is given it defaults to: `document.body`.

## Example

```html
<script>
  import Portal from "@oklookat/svelte-portal";
  import { portal } from "@oklookat/svelte-portal";
</script>

<main>
  <Portal target="body">
    div in body (component)
  </Portal>

  <div use:portal={".overlay"} hidden>
    div in .overlay (use)
  </div>
</main>

<div class="overlay" />
```

The `hidden` atrribute is only needed when using ssr, when portal has moved the element to it's targetted location it removes the hidden attribute.
