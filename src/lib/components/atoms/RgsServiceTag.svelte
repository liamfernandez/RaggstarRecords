<script lang="ts">
	import { RGS_Service } from '$lib/repositories/TestimonialRepository';
	import { Drum, FileAudio, AudioWaveform, Disc3, Palette } from 'lucide-svelte';

	export let service: RGS_Service;
	let size = 20;
</script>

<div
	class="z-20 flex h-fit w-fit flex-row items-center gap-2 rounded-full py-1 pl-2 pr-3 text-sm text-black outline outline-[2px] outline-black duration-200 hover:scale-110 hover:bg-black hover:text-white hover:outline-none"
>
	{#if service === RGS_Service.BeatProduction}
		<Drum {size} />
		<p>{RGS_Service.BeatProduction}</p>
	{:else if service === RGS_Service.Mixing}
		<Disc3 {size} />
		<p>{RGS_Service.Mixing}</p>
	{:else if service === RGS_Service.Mastering}
		<AudioWaveform {size} />
		<p>{RGS_Service.Mastering}</p>
	{:else if service === RGS_Service.RevisionsUnlimited}
		<FileAudio {size} />
		<p>{RGS_Service.RevisionsUnlimited}</p>
	{:else if service === RGS_Service.GraphicDesign}
		<Palette {size} />
		<p>{RGS_Service.GraphicDesign}</p>
	{:else}
		<span>Empty Block</span>
	{/if}
</div>
