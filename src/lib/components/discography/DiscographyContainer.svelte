<script lang="ts">
	import { artist_name, modal_open } from '$lib/stores/ArtistInFocus';
	import { artists } from '$lib/strings';
	import ArtistPopup from './ArtistPopup.svelte';

	let artistToFocus: string = '';

	function showModal(nameOfArtist: string): void {
		artistToFocus = nameOfArtist;
		$artist_name = nameOfArtist;
		const modal_toggle = document.getElementById(`modal-toggle`) as HTMLDialogElement | null;
		if (!!modal_toggle) {
			modal_toggle.showModal();
		}
		$modal_open = true;
	}
</script>

<div class={`md:py-10 pb-10 pt-4 flex flex-row justify-center gap-3 md:gap-1 flex-wrap`}>
	{#each artists as name}
		<button
			class={`image-container`}
			on:click={() => {
				showModal(name);
			}}
		>
			<p class={`md:hidden text-left text-xs`}>{name}</p>
			<img
				alt={`${name} profile picture`}
				src={`../artists/${name.split(` `).join('')}.jpeg`}
				class={`object-cover 2xl:h-[450px] 2xl:w-[450px] h-[300px] w-[300px]`}
			/>
			<div class={`hidden md:block overlay`}>
				<p class={'mt-[47%] text-white 2xl:text-2xl'}>{name}</p>
			</div>
		</button>
	{/each}
</div>
<ArtistPopup {artistToFocus} />
