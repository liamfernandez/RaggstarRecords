<script>
	import { fly } from 'svelte/transition';
	import OnMount from './OnMount.svelte';
	import { elasticOut } from 'svelte/easing';
	import { goto } from '$app/navigation';

	export let backgroundIncluded = false;

	const date = new Date();
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
</script>

{#if backgroundIncluded}
	<OnMount>
		<button
			on:click={() => {
				goto(`https://calendly.com/raggstarrecords/30min?back=1&month=${year}-${month}`);
			}}
			in:fly={{ duration: 2000, y: 40, easing: elasticOut }}
			class="transition tracking-tight rounded-lg px-8 py-4 text-[16px] text-white hover:drop-shadow-xl bg-primary shadow-2xl hover:bg-darkGrey"
		>
			Book A Call
		</button>
	</OnMount>
{:else}
	<OnMount>
		<button
			on:click={() => {
				goto(`https://calendly.com/raggstarrecords/30min?back=1&month=${year}-${month}`);
			}}
			in:fly={{ duration: 2000, y: 40, easing: elasticOut }}
			class="transition rounded-xl font-bold px-12 py-4 tracking-widest text-[16px] text-white hover:drop-shadow-xl bg-primary shadow-2xl hover:bg-darkGrey"
		>
			BOOK A CALL
		</button>
	</OnMount>
{/if}
