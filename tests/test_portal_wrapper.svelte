<script>
	import Portal from '$lib/portal.svelte';
</script>

<body>
	<main>
		<div id="portalCtn">
			<Portal target="footer">
				<div id="renderedInFooter" />
			</Portal>
			<Portal target="#target">
				<div id="renderedInTarget" />
			</Portal>
			<Portal target="body > .target">
				<div id="renderedInTargetClass" />
			</Portal>
		</div>
	</main>

	<div id="target" />
	<div class="target" />

	<footer />
</body>
