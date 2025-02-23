<script lang="ts">
	import { RGS_Service } from '$lib/repositories/TestimonialRepository';
	import { Drum, FileAudio, AudioWaveform, Disc3 } from 'lucide-svelte';

	export let service: RGS_Service;
</script>

<div
	class="flex flex-row items-center gap-2 outline outline-[2px] text-black hover:outline-none hover:scale-105 hover:text-white hover:bg-black duration-200 outline-black px-2 py-1"
>
	{#if service === RGS_Service.BeatProduction}
		<Drum />
		<p>{RGS_Service.BeatProduction}</p>
	{:else if service === RGS_Service.Mixing}
		<Disc3 />
		<p>{RGS_Service.Mixing}</p>
	{:else if service === RGS_Service.Mastering}
		<AudioWaveform />
		<p>{RGS_Service.Mastering}</p>
	{:else if service === RGS_Service.RevisionsUnlimited}
		<FileAudio />
		<p>{RGS_Service.RevisionsUnlimited}</p>
	{:else}
		<span>Empty Block</span>
	{/if}
</div>
