<script lang="ts">
	import '../../../app.css';
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicInOut } from 'svelte/easing';
	import { goto } from '$app/navigation';
	import { blur } from 'svelte/transition';
	import ClickOutLink from '$lib/icons/ClickOutLink.svelte';

	const progress = tweened(0, {
		duration: 400,
		easing: cubicInOut
	});

	onMount(() => {
		// Set progress bar on top of screen to show how close to done to reading they are.
		function handleScroll() {
			const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
			const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
			progress.set(scrollTop / height);
		}

		const scrollProgress = document.getElementById('scroll-progress');
		if (scrollProgress) {
			setTimeout(() => {
				handleScroll();
			}, 1000);
			window.addEventListener('scroll', handleScroll);
		}
	});
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Akatab" rel="stylesheet" />
</svelte:head>
<progress
	id="scroll-progress"
	value={$progress}
	class="fixed top-0 progress-bg bg-transparent w-full h-[3px] z-50"
/>
<div id="splash_of_color" class="md:h-[15rem] h-[10rem] border-b-2 border-b-PrimaryText">
	<div class="md:opacity-100 absolute opacity-0 left-[45%] pt-4 z-50">
		<span in:blur={{ duration: 2400, delay: 200 }} class="flex flex-col items-center">
			<a
				href="/blog"
				rel="noreferrer noopener"
				class=" w-fit flex hover:animate-pulse flex-row gap-2 items-center rounded-xl font-[Akatab] outline-PrimaryText outline outline-[1px] px-4 text-PrimaryText py-1"
			>
				<ClickOutLink rotate={true} />
				Back to All Posts
			</a>
		</span>
	</div>
</div>
<div class={`md:w-full w-screen pb-20`}>
	<slot />
</div>

<style lang="">
	.progress-bg::-moz-progress-bar {
		background-color: 'white';
	}

	.progress-bg::-webkit-progress-value {
		background-color: 'white';
	}

	.progress-bg::-webkit-progress-bar {
		background-color: transparent;
	}
</style>
