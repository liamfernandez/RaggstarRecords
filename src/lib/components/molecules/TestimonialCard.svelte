<script lang="ts">
	import AppleMusic from '$lib/icons/AppleMusic.svelte';
	import Spotify from '$lib/icons/Spotify.svelte';
	import Plus from '../atoms/Plus.svelte';
	import RgsServiceTag from '../atoms/RgsServiceTag.svelte';
	import { GetArtistImg, type TestimonialProps } from '$lib/repositories/TestimonialRepository';

	export let testimonial: TestimonialProps;
</script>

<div id="rectangle" class=" relative outline outline-[#0000004D] outline-[1px] w-[780px] h-[394px]">
	<!-- 4 CORNERS -->
	<Plus class="absolute -top-[22.5px] -right-[22.5px]" />
	<Plus class="absolute -bottom-[22.5px] -right-[22.5px]" />
	<Plus class="absolute -top-[22.5px] -left-[22.5px]" />
	<Plus class="absolute -bottom-[22.5px] -left-[22.5px]" />
	<!-- 4 CORNERS -->

	<div class=" flex flex-row gap-8 h-full pt-3 pb-2">
		<!-- Column 1 - Artist Bio -->
		<div id="artist-bio" class="flex flex-col justify-between h-full pl-3">
			<span class="flex flex-col gap-2">
				<p class=" header">Artist</p>
				<p class=" text-3xl font-light text-black">
					{testimonial.first_name}
					{testimonial.last_name}
				</p>
			</span>
			<span id="streaming-buttons" class=" flex flex-row gap-4">
				<AppleMusic url={testimonial.apple_music_url} size={32} />
				<Spotify url={testimonial.spotify_url} size={32} />
			</span>
			<img
				src={GetArtistImg(testimonial)}
				class="h-[65.58%]"
				alt={`Artist headshot of ${testimonial.first_name} ${testimonial.last_name}`}
			/>
		</div>
		<!-- END Column 1 - Artist Bio -->

		<!-- COLUMN 2 - Services & Highlight Quote -->
		<div class="flex flex-col gap-3">
			<p class="header">Services Purchased</p>
			<span class="grid grid-cols-2 gap-4 gap-x-8 max-w-[450px]">
				{#each testimonial.services_purchased as rgs_service}
					<RgsServiceTag service={rgs_service} />
				{/each}
			</span>

			<span class="flex flex-col gap-1 max-w-[480px]">
				<p class="header">In Their Words</p>
				<p class="text-black text-xl font-light">{`"${testimonial.highlight_quote}"`}</p>
			</span>
		</div>
		<!-- END COLUMN 2 - Services & Highlight Quote -->
	</div>
</div>

<style lang="postcss">
	.header {
		@apply text-2xl text-primary font-light;
	}
</style>
