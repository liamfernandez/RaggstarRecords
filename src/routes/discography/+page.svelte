<script>
	import DiscographyContainer from '$lib/components/discography/DiscographyContainer.svelte';
	import '$lib/styles/discography.css';
</script>

<svelte:head>
	<title>Artists | RAGGSTARRECORDS</title>
</svelte:head>

<div class="bg-[#262626]">
	<span class="flex flex-col items-center">
		<h1 class="font-Druk text-white tracking-wide pt-12 md:pt-16 text-3xl md:text-5xl">
			CLIENT LIST
		</h1>
		<p class="text-gray-400 text-center w-[70%] py-2 text-[11px] md:text-[14px]">
			Click on an artist card to see songs they've released using RaggStar services.
		</p>
	</span>
	<DiscographyContainer />
</div>
