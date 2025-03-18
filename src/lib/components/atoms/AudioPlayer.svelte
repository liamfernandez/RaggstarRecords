<script lang="ts">
	import { onMount } from 'svelte';

	// Props
	export let fileName = '';
	export let fileExtension = 'mp3';

	// State
	export let audioElement: HTMLAudioElement;
	export let handlePlay: (player: HTMLAudioElement) => void;
	let duration = 0;
	let currentTime = 0;
	let isPlaying = false;
	// Format time in MM:SS
	const formatTime = (seconds: number) => {
		const mins = Math.floor(seconds / 60);
		const secs = Math.floor(seconds % 60);
		return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
	};

	onMount(() => {
		audioElement.addEventListener('timeupdate', () => {
			currentTime = audioElement.currentTime;
		});

		audioElement.addEventListener('loadedmetadata', () => {
			duration = audioElement.duration;
		});

		audioElement.addEventListener('ended', () => {
			isPlaying = false;
		});

		audioElement.addEventListener('pause', () => {
			isPlaying = false;
		});
	});

	const togglePlay = () => {
		if (audioElement) {
			handlePlay(audioElement);
		}

		if (isPlaying) {
			audioElement.pause();
		} else {
			audioElement.play();
		}
		isPlaying = !isPlaying;
	};

	const handleSeek = (e: any) => {
		const seekPosition = e.target.value;
		audioElement.currentTime = seekPosition;
		currentTime = seekPosition;
	};
</script>

<div class="flex max-w-xl flex-col rounded-lg bg-black p-6 shadow-lg">
	<audio bind:this={audioElement} src={`${fileName}.${fileExtension}`} preload="metadata"></audio>
	<div class="flex flex-row items-center gap-4">
		<button
			on:click={togglePlay}
			class="flex h-12 w-14 items-center justify-center rounded-full bg-cyan-400 transition-colors hover:bg-cyan-300"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="h-6 w-6 text-black"
			>
				{#if isPlaying}
					<path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
				{:else}
					<path d="M8 5v14l11-7z" />
				{/if}
			</svg>
		</button>
		<div class="relative mb-4 w-full">
			<input
				type="range"
				min="0"
				max={duration || 0}
				bind:value={currentTime}
				on:input={handleSeek}
				class="h-2 w-full cursor-pointer appearance-none rounded-full bg-blue-900"
				style="--range-color: rgb(34 211 238);"
			/>
			<div class="absolute flex w-full justify-between pt-1 text-xs text-gray-400">
				<span>{formatTime(currentTime)}</span>
				<span>{formatTime(duration)}</span>
			</div>
		</div>
	</div>
</div>

<!-- Custom styles for range inputs -->
<style>
	input[type='range'] {
		-webkit-appearance: none;
		height: 8px;
		border-radius: 4px;
	}

	input[type='range']::-webkit-slider-thumb {
		-webkit-appearance: none;
		height: 16px;
		width: 16px;
		border-radius: 50%;
		background: rgb(34 211 238); /* cyan-400 */
		cursor: pointer;
	}

	input[type='range']::-moz-range-thumb {
		height: 16px;
		width: 16px;
		border-radius: 50%;
		background: rgb(34 211 238); /* cyan-400 */
		cursor: pointer;
	}
</style>
