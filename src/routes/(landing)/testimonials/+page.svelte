<script lang="ts">
	import Plus from '$lib/components/atoms/Plus.svelte';
	import { ASSETS_PATH, Testimonials_Data, GetArtistImg } from '$lib/managers/TestimonialManager';
</script>

<div class="flex flex-col w-full items-center">
	<div class="py-20">
		{#each Testimonials_Data as testimonial}
			<div
				id="rectangle"
				class="relative outline outline-[#0000004D] outline-[1px] w-[780px] h-[394px]"
			>
				<!-- 4 CORNERS -->
				<Plus class="absolute -top-[22.5px] -right-[22.5px]" />
				<Plus class="absolute -bottom-[22.5px] -right-[22.5px]" />
				<Plus class="absolute -top-[22.5px] -left-[22.5px]" />
				<Plus class="absolute -bottom-[22.5px] -left-[22.5px]" />
				<!-- 4 CORNERS -->

				<div id="artist-bio" class="flex flex-col justify-between h-full pl-3 pt-5 pb-2">
					<span class="flex flex-col gap-2">
						<p class=" text-2xl font-light text-primary">Artist</p>
						<p class=" text-4xl font-light text-black">
							{testimonial.first_name}
							{testimonial.last_name}
						</p>
					</span>
					<img
						src={GetArtistImg(testimonial)}
						class="w-[31.3%]"
						alt={`Artist headshot of ${testimonial.first_name} ${testimonial.last_name}`}
					/>
				</div>
			</div>
		{/each}
	</div>
</div>
