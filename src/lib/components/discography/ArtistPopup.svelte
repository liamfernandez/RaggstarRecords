<script lang="ts">
	import { currentPlayingSong, modal_open } from '$lib/stores/ArtistInFocus';
	import { ResetIndicators } from '$lib/stores/SongPlayer';
	import { songMap } from '$lib/strings';
	import Socials from './Socials.svelte';
	import SongContainer from './SongContainer.svelte';

	export let artistToFocus: string;

	$: songTitles = songMap.get(artistToFocus);
</script>

<dialog id={`modal-toggle`} class={`modal`}>
	<form
		method={`dialog`}
		class={`modal-box bg-gradient-to-bl from-[#1c82e1] to-emerald-400 p-[3px] min-w-[400px] w-6/12 max-w-5xl`}
	>
		<div class={`w-full h-full bg-black rounded-xl pb-10 px-3 md:p-10`}>
			<span class={`md:hidden flex justify-end -mb-9 -mr-2`}>
				<form method={`dialog`}>
					<button
						class={`btn btn-circle bg-white scale-[0.58] text-lg text-black`}
						on:click={() => {
							ResetIndicators($currentPlayingSong);
							$modal_open = false;
							$currentPlayingSong = '';
							const audioPlayer = document.getElementById(`audio-player`);
							if (!!audioPlayer) audioPlayer.pause();
						}}>X</button
					>
				</form>
			</span>
			<span class={`flex flex-col justify-center items-center`}>
				<h1 class={`text-3xl font-Druk text-white`}>{artistToFocus.toUpperCase()}</h1>
			</span>
			{#if !!songTitles}
				<SongContainer {songTitles} />
				<Socials />
			{/if}
		</div>
	</form>
	<form method={`dialog`} class={`modal-backdrop`}>
		<button
			on:click={() => {
				ResetIndicators($currentPlayingSong);
				$modal_open = false;
				$currentPlayingSong = '';
				const audioPlayer = document.getElementById(`audio-player`);
				if (!!audioPlayer) audioPlayer.pause();
			}}
		/>
	</form>
</dialog>
