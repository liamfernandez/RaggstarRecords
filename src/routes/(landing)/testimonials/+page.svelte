<script lang="ts">
	import Plus from '$lib/components/atoms/Plus.svelte';
	import AppleMusic from '$lib/icons/AppleMusic.svelte';
	import Spotify from '$lib/icons/Spotify.svelte';
	import {
		ASSETS_PATH,
		Testimonials_Data,
		GetArtistImg
	} from '$lib/repositories/TestimonialRepository';
</script>

<div class="flex flex-col w-full items-center">
	<div class="py-20">
		{#each Testimonials_Data as testimonial}
			<div
				id="rectangle"
				class=" relative outline outline-[#0000004D] outline-[1px] w-[780px] h-[394px]"
			>
				<!-- 4 CORNERS -->
				<Plus class="absolute -top-[22.5px] -right-[22.5px]" />
				<Plus class="absolute -bottom-[22.5px] -right-[22.5px]" />
				<Plus class="absolute -top-[22.5px] -left-[22.5px]" />
				<Plus class="absolute -bottom-[22.5px] -left-[22.5px]" />
				<!-- 4 CORNERS -->

				<div class=" flex flex-row gap-8 h-full pt-5 pb-2">
					<!-- Column 1 - Artist Bio -->
					<div id="artist-bio" class="flex flex-col justify-between h-full pl-3">
						<span class="flex flex-col gap-2">
							<p class=" text-xl font-light text-primary">Artist</p>
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
					<div class="fkex flex-col">
						<p class="text-xl font-light text-primary">Services Purchased</p>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
