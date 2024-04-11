<script lang="ts">
	import Success from '$lib/icons/Success.svelte';
	import { tweened } from 'svelte/motion';
	import { cubicInOut } from 'svelte/easing';

	export let show: boolean;
	export let message: string;

	const timer = tweened(0, {
		duration: 3000,
		easing: cubicInOut
	});

	$: if (show) {
		timer.set(1);
	}

	$: if ($timer === 1) {
		show = false;
		timer.set(0);
	}
</script>

{#if show}
	<div class="flex flex-col gap-2 fixed bottom-0 pb-2 bg-black">
		<progress class="h-[3px] bg-black progress-white" value={$timer} />
		<span class="flex px-2 flex-row items-center gap-3">
			<Success />
			<p class="text-white md:text-[14px] text-[11px]">{message}</p>
		</span>
	</div>
{/if}
