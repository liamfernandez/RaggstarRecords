<script lang="ts">
	import { artist_name, currentPlayingSong } from '$lib/stores/ArtistInFocus';
	import { song_locations, DownloadSong, ResetIndicators } from '$lib/stores/SongPlayer';

	export let songTitles: string[];
	let songIsPlaying = false;
	let audioRef: any;

	async function PlaySong(songName: string) {
		// Switch Play/Pause state
		document.getElementById(`play-pause-${songName}`)?.classList.toggle(`paused`);
		songIsPlaying = !audioRef.paused;

		if ($currentPlayingSong === songName) {
			if (songIsPlaying) {
				audioRef.pause();
			} else {
				audioRef.play();
			}
		} else {
			const oldSong = $currentPlayingSong;
			ResetIndicators(oldSong);

			currentPlayingSong.set(songName);

			//Start loading indicator
			const loadingElm = document.getElementById(`loading-${$currentPlayingSong}`);
			loadingElm?.classList.toggle(`hidden`);
			// Hide play button while loading
			const playPause = document.getElementById(`play-pause-${$currentPlayingSong}`);
			playPause?.classList.toggle(`hidden`);

			//set src
			const songSource = await GetSongSource();
			audioRef.src = songSource;

			// Hide loading indicator
			loadingElm?.classList.toggle(`hidden`);
			// Show Pause button
			playPause?.classList.toggle(`hidden`);

			//pLay song
			audioRef.play();
		}
	}

	async function GetSongSource() {
		if ($song_locations.has($currentPlayingSong)) {
			return $song_locations.get($currentPlayingSong);
		} else {
			let songBlob = await DownloadSong($currentPlayingSong, $artist_name);
			const blobLocation = URL.createObjectURL(songBlob);
			song_locations.update((blobMap) => {
				blobMap.set($currentPlayingSong, blobLocation);
				return blobMap;
			});

			return blobLocation;
		}
	}

	function UpdateSongTracking(elm: any) {
		// Grab HTML Elements to update
		const timeStampElement = document.getElementById(
			`timeStamp-${$currentPlayingSong}`
		) as HTMLElement | null;
		const progressBarElement: HTMLProgressElement | null = document.getElementById(
			`progressBar-${$currentPlayingSong}`
		) as HTMLProgressElement | null;
		// Update progress bar
		const percentageOfSong = (elm.currentTarget.currentTime / elm.currentTarget.duration) * 100;
		if (!!progressBarElement) {
			progressBarElement.value = Number.isNaN(elm.currentTarget.duration)
				? 0
				: Math.floor(percentageOfSong);
		}
		//update timestamp
		const secondsPlayedOfSong = Math.floor(elm.currentTarget.currentTime) + 1;
		const minutesPlayedOfSong = Math.floor(secondsPlayedOfSong / 60);

		let secondsString = `${secondsPlayedOfSong % 60}`;

		if (secondsPlayedOfSong < 10) {
			secondsString = '0' + secondsPlayedOfSong;
		}
		if (!Number.isNaN(elm.currentTarget.duration) && !!timeStampElement) {
			const newTimeStamp: string = `${minutesPlayedOfSong}:${secondsString}`;
			timeStampElement.innerHTML = newTimeStamp;
		} else {
			if (!!timeStampElement) timeStampElement.innerHTML = '';
		}
	}
</script>

{#if !!songTitles && songTitles.length < 1}
	<div>
		<p class={`text-center text-white text-xs`}>
			We don't do snippets. This artist has been recording with RaggStar but hasn't dropped yet.
			Stay tuned.
		</p>
	</div>
{:else}
	<ul class={`flex flex-col gap-2 pb-2 pt-5`}>
		{#each songTitles as songName}
			<li class={`wait-for-hov p-[2px]`}>
				<div class={`items-center p-2 justify-between flex flex-row bg-[#262626]`}>
					<button
						class={`play-pause`}
						id={`play-pause-${songName}`}
						on:click|preventDefault={() => {
							PlaySong(songName);
						}}
					/>
					<p class={`text-white`}>{songName}</p>
					<span class={`flex flex-row gap-2 items-center`}>
						<span id={`timeStamp-${songName}`} class={` text-gray-500 text-xs`}>0:00</span>
						<progress
							id={`progressBar-${songName}`}
							class={`bg-white progress progress-info w-16 md:w-32`}
							value={0}
							max={100}
						/>
					</span>
					<span
						id={`loading-${songName}`}
						class={`hidden loading loading-spinner text-[#3ca5e6]`}
					/>
				</div>
			</li>
		{/each}
	</ul>
	<p class={`text-xs text-left pb-2 text-gray-500`}>Recorded at RaggStar Studios</p>
	<audio id={`audio-player`} bind:this={audioRef} on:timeupdate={UpdateSongTracking}>
		<source src="" type="audio/mpeg" /></audio
	>
{/if}
