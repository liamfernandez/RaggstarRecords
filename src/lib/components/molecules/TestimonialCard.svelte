<script lang="ts">
	import AppleMusic from '$lib/icons/AppleMusic.svelte';
	import Spotify from '$lib/icons/Spotify.svelte';
	import Plus from '../atoms/Plus.svelte';
	import RgsServiceTag from '../atoms/RgsServiceTag.svelte';
	import { GetArtistImg, type TestimonialProps } from '$lib/repositories/TestimonialRepository';
	import { BookText } from 'lucide-svelte';

	export let testimonial: TestimonialProps;

	const artist_testimonial_page =
		`/testimonials/${testimonial.first_name}-${testimonial.last_name}-${testimonial.id}`.toLowerCase();
</script>

<div id="rectangle" class=" relative h-fit w-[780px] outline outline-[1px] outline-[#0000004D]">
	<!-- LINK: transparent screen to link out to testimonial page -->
	<!-- svelte-ignore a11y-missing-content -->
	<!-- <a
		href={artist_testimonial_page}
		class="absolute inset-0 z-10"
		style="background: transparent;"
	/> -->
	<!-- 4 CORNERS -->
	<Plus class="absolute -right-[22.5px] -top-[22.5px]" />
	<Plus class="absolute -bottom-[22.5px] -right-[22.5px]" />
	<Plus class="absolute -left-[22.5px] -top-[22.5px]" />
	<Plus class="absolute -bottom-[22.5px] -left-[22.5px]" />
	<!-- 4 CORNERS -->
	<div class=" flex h-full flex-row gap-8 pb-2 pt-3">
		<!-- Column 1 - Artist Bio -->
		<div id="artist-bio" class="flex flex-col justify-between pl-3">
			<span class="flex flex-col gap-2">
				<p class=" testimonialHeader">Artist</p>
				<p class=" text-3xl font-light text-black">
					{testimonial.first_name}
					{testimonial.last_name}
				</p>
			</span>
			<div>
				<img
					src={GetArtistImg(testimonial)}
					class=" rounded-t-lg"
					alt={`Artist headshot of ${testimonial.first_name} ${testimonial.last_name}`}
				/>
				<span
					class=" flex w-full flex-row items-center justify-center gap-3 self-center rounded-b-lg bg-[#4b5563] px-2 py-[6px] text-white"
				>
					<p class="text-[1.2rem]">Listen on</p>
					<span class=" flex flex-row items-center gap-2 shadow-2xl">
						<AppleMusic url={testimonial.apple_music_url} size={30} />
						<p class="">&</p>
						<Spotify url={testimonial.spotify_url} size={30} />
					</span>
				</span>
			</div>
		</div>
		<!-- END Column 1 - Artist Bio -->

		<!-- COLUMN 2 - Services & Highlight Quote -->
		<div id="services & highlight quote" class="flex flex-col gap-3">
			<p class="testimonialHeader">Services Purchased</p>
			<div class="ml-1 flex max-w-[550px] flex-row flex-wrap gap-4">
				{#each testimonial.services_purchased as rgs_service}
					<RgsServiceTag service={rgs_service} />
				{/each}
			</div>

			<span class="flex max-w-[490px] flex-col gap-1">
				<p class="testimonialHeader">In Their Words</p>
				<p class="text-[1.13rem] font-light text-black">{`"${testimonial.highlight_quote}"`}</p>
			</span>

			<!-- <a
				href={artist_testimonial_page}
				class="  group z-20 mr-10 flex flex-row gap-1 self-center rounded-sm bg-white px-3 py-1 text-black outline outline-[2px] outline-black duration-100 hover:scale-[1.04] hover:bg-black hover:text-white hover:outline-none"
			>
				<BookText class=" text-primary duration-200 group-hover:text-white" />
				Read the Full Story
			</a> -->
		</div>
		<!-- END COLUMN 2 - Services & Highlight Quote -->
	</div>
</div>

<style lang="postcss">
	.testimonialHeader {
		@apply relative z-0 text-2xl font-light text-primary;
	}
</style>
