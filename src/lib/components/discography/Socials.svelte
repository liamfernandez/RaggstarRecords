<script lang="ts">
	import { onMount } from 'svelte';
	import { instagramMap, youtubeMap, spotifyMap, appleMusicMap } from '$lib/strings';
	import { artist_name } from '$lib/stores/ArtistInFocus';

	onMount(() => {
		const elm = document.getElementById(`chat-bubble`);
		elm?.classList.toggle(`typewriter`);
	});

	const hasInstagram = instagramMap.has($artist_name);
	const hasYoutube = youtubeMap.has($artist_name);
	const hasSpotify = spotifyMap.has($artist_name);
	const hasAppleMusic = appleMusicMap.has($artist_name);
	const chatBubbleString =
		!hasSpotify && !hasAppleMusic ? 'Check out my socials' : 'Check out my music and socials';
</script>

<span class={`flex justify-center mx-10`}>
	<div id={`chat-container`} class={`chat chat-start scale-90 pt-4 md:pt-10`}>
		<div class={`chat-image avatar`}>
			<div class={`rounded-full w-14`}>
				<img
					alt={`${$artist_name} avatar`}
					src={`../artists/${$artist_name.split(` `).join('')}.jpeg`}
					class={``}
				/>
			</div>
		</div>
		<div class={`chat-header pl-2 pb-1 opacity-50 text-xs`}>
			{$artist_name}
		</div>
		<div class={`chat-bubble bg-[#218aff]`}>
			{#if $artist_name !== ''}
				<p id={`chat-bubble`} class={`text-left pr-8`}>{chatBubbleString}</p>
			{/if}
		</div>
	</div>
</span>
<span class={`flex flex-row gap-8 md:gap-12 pt-3 px-10 md:px-0 justify-center`}>
	{#if hasAppleMusic}
		<a
			href={appleMusicMap.get($artist_name)}
			class={`md:border-gray-800 border p-2 rounded-xl md:opacity-75 md:hover:opacity-100 md:hover:border-pink-700 border-pink-700`}
		>
			<img alt="apple music link" src={`/socials/applemusic.png`} class={`w-[50px] rounded-2xl`} />
		</a>
	{/if}
	{#if hasSpotify}
		<a
			href={spotifyMap.get($artist_name)}
			class={`md:border-gray-800 border p-2 rounded-xl md:opacity-75 md:hover:opacity-100 md:hover:border-green-500 border-green-500`}
		>
			<img alt="spotify link" src={`../socials/spotify.svg`} class={`w-[50px]`} />
		</a>
	{/if}
	{#if hasInstagram}
		<a
			href={instagramMap.get($artist_name)}
			class={`md:border-gray-800 border p-2 rounded-xl md:opacity-75 md:hover:opacity-100 md:hover:border-purple-600 border-purple-600`}
		>
			<img alt="instagram link" src={`../socials/color-IG.svg`} class={`w-[50px]`} />
		</a>
	{/if}
	{#if hasYoutube}
		<a
			href={youtubeMap.get($artist_name)}
			class={`md:border-gray-800 border p-2 rounded-xl md:opacity-75 md:hover:opacity-100 md:hover:border-red-600 border-red-600`}
		>
			<img alt="youtube link" src={`../socials/color-YT.svg`} class={` pt-1 w-[55px]`} />
		</a>
	{/if}
</span>
