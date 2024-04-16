<script lang="ts">
	import { OnMount } from 'fractils';
	import { onMount } from 'svelte';

	export let rotate: boolean = false;
	export let forceSmall: boolean = false;

	let mobile = false;

	let rotateClass: string = rotate ? 'rotate-[225deg]' : '';

	onMount(() => {
		if (typeof window !== 'undefined') {
			mobile = window.innerWidth < 768 || forceSmall;
		}
	});
</script>

<OnMount>
	<svg
		width={mobile ? 11 : 16}
		height={mobile ? 11 : 16}
		viewBox="0 0 16 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		class={rotateClass}
	>
		<path
			d="M1.72308 16L0 14.2769L11.8154 2.46154H1.23077V0H16V14.7692H13.5385V4.18462L1.72308 16Z"
			style={'fill: black'}
			fill-opacity="1"
			class={'text-black'}
		/>
	</svg>
</OnMount>
