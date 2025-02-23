<script>
	export let size = 44;
	export let color = 'black';
</script>

<svg
	class={$$props.class}
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<line x1="12" y1="4" x2="12" y2="20" stroke={color} stroke-width="0.5" />
	<line x1="4" y1="12" x2="20" y2="12" stroke={color} stroke-width="0.5" />
</svg>

<style>
	svg {
		display: block;
	}
</style>
