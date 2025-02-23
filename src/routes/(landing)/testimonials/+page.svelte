<script lang="ts">
	import TestimonialCard from '$lib/components/molecules/TestimonialCard.svelte';
	import { Testimonials_Data } from '$lib/repositories/TestimonialRepository';
</script>

<svelte:head>
	<title>Testimonials | RAGGSTARRECORDS</title>
</svelte:head>

<div class="flex flex-col w-full items-center">
	<div class="py-20">
		{#each Testimonials_Data as testimonial}
			<TestimonialCard {testimonial} />
		{/each}
	</div>
</div>
