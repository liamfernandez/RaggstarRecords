<script lang="ts">
	import { fly } from 'svelte/transition';
	import OnMount from './OnMount.svelte';
	import { elasticOut } from 'svelte/easing';
	import { onBookACall } from '$lib/utils';
	export let backgroundIncluded = false;
</script>

{#if backgroundIncluded}
	<OnMount>
		<button
			on:click={onBookACall}
			in:fly={{ duration: 2000, y: 40, easing: elasticOut }}
			class="transition tracking-tight rounded-lg px-8 py-4 text-[16px] text-white hover:drop-shadow-xl bg-primary shadow-2xl hover:bg-darkGrey"
		>
			Book A Call
		</button>
	</OnMount>
{:else}
	<OnMount>
		<button
			on:click={onBookACall}
			in:fly={{ duration: 2000, y: 40, easing: elasticOut }}
			class="z-30 transition underline underline-offset-4 text-lg md:text-xl text-white font-extrabold decoration-white decoration-2 hover:scale-110"
		>
			{'BOOK A CALL >>'}
		</button>
	</OnMount>
{/if}
