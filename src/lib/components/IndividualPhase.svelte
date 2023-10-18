<script lang="ts">
	import { fly } from 'svelte/transition';
	import Strings from '../../strings';
	import { visibility } from 'fractils';

	export let phaseNumber: 1 | 2 | 3;

	let visible: boolean,
		options = { threshold: 1 };

	function handleChange(e: any) {
		if (visible) return;
		visible = e.detail.isVisible;
	}

	const multiplier = phaseNumber % 2 == 0 ? 1 : -1;

	const distance = 100 * multiplier;
</script>

<div
	use:visibility={options}
	on:v-change={handleChange}
	class=" grid grid-cols-1 md:pt-0 md:grid-cols-2 gap-20"
>
	{#if visible}
		<div class="flex flex-col justify-center md:-mt-10 gap-4 text-center">
			<h3
				in:fly={{ duration: 1000, x: distance, delay: 0 }}
				class=" text-5xl md:text-6xl font-openSans font-extrabold text-primary"
			>
				Phase {phaseNumber}
			</h3>
			<p
				in:fly={{ duration: 1000, x: distance, delay: 0 }}
				class=" text-3xl md:text-4xl text-accent"
			>
				{Strings.phase_titles.get(phaseNumber)}
			</p>
			<p
				in:fly={{ duration: 1000, x: distance, delay: 300 }}
				class=" md:mt-4 text-darkGrey text-lg md:text-2xl"
			>
				{Strings.phase_descriptors.get(phaseNumber)}
			</p>
		</div>
		<div in:fly={{ duration: 1000, x: distance, delay: 300 }} class=" -mt-8 md:mt-2">
			<ul>
				<p class=" text-midGrey font-semibold">Your Responsibilities</p>
				<li class="flex flex-row items-center text-lightGrey">
					{Strings.phase_your_responsibilities.get(phaseNumber)}
				</li>
			</ul>
			<ul class="pt-6">
				<p class=" text-midGrey font-semibold">Our Responsibilities</p>
				<li class="flex flex-row items-center text-lightGrey">Literally everything else</li>
			</ul>
			<ul class="pt-6 justify-start flex flex-col gap-2">
				<p class=" text-midGrey font-semibold mb-2">What you get</p>
				<slot />
			</ul>
		</div>
	{/if}
</div>

<style>
	ul li::before {
		@apply pr-8;
		content: '•'; /* Unicode character for a bullet point */
		display: inline-block;
		width: 1em; /* Width to ensure spacing is consistent */
		margin-left: 0.3em; /* Pull the bullet point into position */
		margin-right: -0em; /* Spacing after the bullet point */
		font-size: 1.8em;
		padding-bottom: 4px;

		color: black;
	}
</style>
