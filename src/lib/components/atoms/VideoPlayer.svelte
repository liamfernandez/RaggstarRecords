<!-- VideoPlayer.svelte -->
<script>
	export let youtubeVideoId;
	export let title;
	export let aspectRatio = '16/9'; // Default to 16:9

	// Dynamic loading (only load the iframe when user clicks)
	let loaded = false;

	// Construct YouTube URL with parameters
	const youtubeParams = new URLSearchParams({
		rel: '0', // Don't show related videos
		modestbranding: '1', // Minimal YouTube branding
		playsinline: '1', // Play inline on mobile devices
		enablejsapi: '1', // Enable JavaScript API
		origin: typeof window !== 'undefined' ? window.location.origin : ''
	});

	const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?${youtubeParams}`;

	function loadVideo() {
		loaded = true;
	}
</script>

<div class="mx-auto w-full max-w-4xl py-4">
	<div
		class="relative w-full overflow-hidden rounded-b-lg bg-gray-900 shadow-lg"
		style:aspect-ratio={aspectRatio}
	>
		{#if !loaded}
			<!-- Video Thumbnail with Play Button -->
			<div
				class="absolute inset-0 flex cursor-pointer items-center justify-center bg-black"
				on:click={loadVideo}
				on:keypress={(e) => e.key === 'Enter' && loadVideo()}
				tabindex="0"
				role="button"
				aria-label="Play video"
			>
				<img
					src={`https://i.ytimg.com/vi/${youtubeVideoId}/maxresdefault.jpg`}
					alt={title}
					class="h-full w-full object-cover opacity-80"
					on:error={(e) => {
						// Fallback to medium quality thumbnail if HD isn't available
						e.target.src = `https://i.ytimg.com/vi/${youtubeVideoId}/mqdefault.jpg`;
					}}
				/>

				<!-- Play Button -->
				<div
					class="absolute flex h-16 w-16 items-center justify-center rounded-full bg-primary opacity-90 transition-opacity hover:opacity-100 md:h-20 md:w-20"
				>
					<svg
						class="h-8 w-8 text-white md:h-10 md:w-10"
						fill="currentColor"
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						<path d="M8 5v14l11-7z" />
					</svg>
				</div>
			</div>
		{:else}
			<!-- YouTube Embed -->
			<iframe
				{title}
				class="absolute left-0 top-0 h-full w-full"
				src={youtubeEmbedUrl}
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
		{/if}
	</div>
</div>
