<script lang="ts">
	import { fly } from 'svelte/transition';
	import OnMount from './OnMount.svelte';
	import { elasticOut } from 'svelte/easing';
	import { onClickOfContact } from '$lib/utils';
</script>

<OnMount>
	<button
		on:click={onClickOfContact}
		in:fly={{ duration: 1700, x: -75, easing: elasticOut }}
		class="z-30 transition md:px-14 md:py-6 md:text-[16px] text-md px-10 py-4 text-white hover:drop-shadow-xl bg-primary shadow-2xl hover:scale-110 rounded-md"
	>
		SEND US A MESSAGE
	</button>
</OnMount>
