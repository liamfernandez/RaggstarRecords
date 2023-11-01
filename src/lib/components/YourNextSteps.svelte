<script>
	import { goto } from '$app/navigation';
	import { OnMount } from 'fractils';
	import { elasticOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import SendUsAMessage from './SendUsAMessage.svelte';

	const date = new Date();
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
</script>

<div class="flex flex-col items-center md:pb-24 py-10">
	<p class="text-primary text-lg mb-4">YOUR NEXT STEPS</p>
	<p class="md:text-5xl text-3xl text-center text-darkGrey font-semibold">Ready To Get Started?</p>
	<p class="text-midGrey text-md md:text-lg max-w-[85%] md:max-w-xl text-center mt-6">
		Reach out to us however you prefer! Either send us a message or book a free 1 on 1 call
	</p>
	<div
		class="flex flex-row flex-wrap justify-center items-center font-openSans gap-8 md:gap-20 mt-10"
	>
		<SendUsAMessage />
		<OnMount>
			<button
				on:click={() => {
					goto(`https://calendly.com/raggstarrecords/30min?back=1&month=${year}-${month}`);
				}}
				in:fly={{ duration: 1700, x: 75, easing: elasticOut }}
				class="z-30 transition underline underline-offset-4 md:text-xl text-primary font-extrabold decoration-primary decoration-2 hover:scale-110"
			>
				{'BOOK A CALL >>'}
			</button>
		</OnMount>
	</div>
</div>
