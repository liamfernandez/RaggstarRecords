<script>
	import { elasticOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import OnMount from './OnMount.svelte';
	import SendUsAMessage from './SendUsAMessage.svelte';
	import BookACall from './BookACall.svelte';

	const date = new Date();
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
</script>

<div class="relative isolate overflow-hidden bg-transparent pb-32 2xl:pb-48">
	<img src="./new_hero.jpeg" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" />
	<div class="flex items-center flex-col text-center mt-16 md:mt-72">
		<div class=" md:-translate-y-40 flex flex-col items-center">
			<h1
				class=" translucent rounded-xl text-white text-4xl md:leading-[5rem] max-w-[90%] md:text-6xl md:max-w-3xl font-lucida-bold"
			>
				Get out of the 9-5 grind and step into your R&B music career!
			</h1>
			<span class="h-[2px] bg-primary w-[90%] md:w-[308px] mt-10 md:mt-14" />
			<p class="font-openSans text-2xl font-bold text-white max-w-[90%] md:max-w-[40rem] mt-8">
				Increase your streams by 25% across ALL platforms with your own personalized production team
				👋
			</p>
			<div class="	flex flex-col md:flex-row items-center font-openSans gap-8 md:gap-20 mt-10">
				<SendUsAMessage />
				<OnMount>
					<BookACall backgroundIncluded={false} />
				</OnMount>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.translucent {
		background-color: rgb(256, 256, 256, 0.2);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
	}
</style>
