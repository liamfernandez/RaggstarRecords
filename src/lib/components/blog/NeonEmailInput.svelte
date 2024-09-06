<script lang="ts">
	import { onMount } from 'svelte';
	import type { Writable } from 'svelte/store';

	export let form: Writable<{
		email: string;
	}>;
	let inputElement: HTMLInputElement;
	let isHovered = false;

	function handleMouseEnter() {
		isHovered = true;
	}

	function handleMouseLeave() {
		isHovered = false;
	}

	// function handleEnter() {}

	onMount(() => {
		if (inputElement) {
			inputElement.style.setProperty('--gradient-angle', '0deg');
		}
	});
</script>

<div
	class="relative w-full sm:w-64"
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
	aria-roledescription="Input for email sign up to Raggstar records weekly newsletter"
	role="definition"
>
	<input
		bind:this={inputElement}
		type="email"
		bind:value={$form.email}
		placeholder="Enter your email"
		class="w-full px-4 py-2 text-gray-700 bg-gray-50 border border-transparent rounded-lg focus:outline-none transition duration-300 ease-in-out text-base leading-6 placeholder-gray-400 relative z-10"
	/>
	{#if isHovered}
		<div class="absolute inset-0 z-40 neon-outline rounded-lg" />
	{/if}
	<div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none z-20">
		<svg
			class="w-5 h-5 text-gray-400"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
			/>
		</svg>
	</div>
</div>

<style lang="scss">
	@keyframes rotate {
		0% {
			--gradient-angle: 0deg;
		}
		100% {
			--gradient-angle: 360deg;
		}
	}

	.neon-outline {
		background: linear-gradient(var(--gradient-angle), #b012e9, #b012e9, #b012e9, #b012e9, #0eb7cd);
		background-size: 400% 400%;
		animation: rotate 3s linear infinite, glow 1s ease-in-out infinite alternate;
		z-index: 0;
	}

	.neon-outline::before {
		content: '';
		position: absolute;
		inset: -2px;
		background: inherit;
		filter: blur(4px);
		z-index: -1;
	}

	@keyframes glow {
		from {
			filter: brightness(1) blur(4px);
		}
		to {
			filter: brightness(1.3) blur(4px);
		}
	}

	:global(input:focus) {
		box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
	}
</style>
