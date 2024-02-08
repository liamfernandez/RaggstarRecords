<script lang="ts">
	import { fly } from 'svelte/transition';
	import SendUsAMessage from './SendUsAMessage.svelte';
	import { visibility } from 'fractils';
	import { backOut } from 'svelte/easing';

	let visible: boolean,
		options = { threshold: 0.15 };

	function handleChange(e: any) {
		if (visible) return;
		visible = e.detail.isVisible;
	}

	let buttonVisible: boolean;
	function handleButtonChange(e: any) {
		if (buttonVisible) return;
		buttonVisible = e.detail.isVisible;
	}
</script>

<p class="text-center text-lg md:text-2xl text-accent mb-8">Why hire a production team?</p>
<div class=" w-full max-w-[90%] md:max-w-3xl">
	<h2 class="text-center text-white text-3xl md:text-[2.5rem] md:leading-snug mb-8">
		Having a personal production team is the fastest way to grow your fanbase
	</h2>
	<span class="flex flex-col gap-6 md:gap-8 text-white">
		<p>
			Because you know what? This is kind of wild… 99.9% of artists that make a living off of their
			music have a team of producers they work with to craft their sound.
		</p>
		<p>
			Not only does having your own team perfect your sound they also perfect all other areas of
			your career from marketing to business…
		</p>
		<p>
			Imagine having a best friend in the music industry that you can call upon for anything from
			publicity to songwriting to beats to recording to mixing. From capturing your content to
			editing to scheduling releases we have got you covered!
		</p>
		<p>
			This lifts hundreds of hours of learning software off your shoulders and tens of thousands of
			dollars of equipment and subscriptions off your wallet! Do not get caught up in the DIY trend
			of doing everything on your own.
		</p>
		<p>
			One of my favorite quotes encapsulates the power of having a team and the importance of
			teamwork. “If you want to go fast, go alone. If you want to go far, go together.” Sounds a lot
			easier to achieve those dreams when you have a friend to help you out
		</p>
	</span>
	<h2 class=" text-accent text-[2rem] md:text-[2rem] text-center my-12">
		Here's Why Having a Production Team Will Jumpstart Your Career
	</h2>
</div>
<div
	use:visibility={options}
	on:v-change={handleChange}
	class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full mb-20 max-w-[90%] md:max-w-5xl"
>
	{#if visible}
		<span
			in:fly={{ duration: 1800, x: -120 * 1.5, delay: 300, easing: backOut }}
			class="flex flex-col gap-4 text-white text-center"
		>
			<p class=" text-[1.75rem] md:max-w-[19rem]">Music Industry is Growing</p>
			<p>
				The music industry is only growing as Goldman Sachs projects the total market cap will
				double to $131 billion by 2030.
			</p>
		</span>
		<span
			in:fly={{ duration: 1800, y: 140 * 1.5, delay: 300, easing: backOut }}
			class="flex flex-col gap-4 text-white text-center"
		>
			<p class=" text-[1.75rem]">Keep Ownership of Your Art</p>
			<p>
				Instead of the rights to your music being owned by a major label, you get to keep your art
				and decide what you want to do with it. The power is back in your hands
			</p>
		</span>
		<span
			in:fly={{ duration: 1800, x: 120 * 1.5, delay: 300, easing: backOut }}
			class="flex flex-col gap-4 text-white text-center"
		>
			<p class=" text-[1.75rem]">Stay Consistent and Accountable</p>
			<p>
				We know pursuing your artistry gets hard to do when you have to deal with life, that is why
				we are here to keep you on track and make sure you hit your goals
			</p>
		</span>
	{/if}
</div>
<!-- <span use:visibility={options} on:v-change={handleButtonChange} class="flex flex-col items-center">
	{#if buttonVisible}
		<SendUsAMessage />
	{/if}
</span> -->
