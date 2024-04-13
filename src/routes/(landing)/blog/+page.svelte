<script>
	import BlogCard from '$lib/components/blog/BlogCard.svelte';
	import { DefaultBlogPosts } from '$lib/managers/BlogManager';
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>
<div class="container mx-auto px-4">
	<section id="Marquee scrolling headline">
		<div
			class="bg-gradient-to-r from-slate-50 to-slate-100 bg-opacity-75 py-5 px-6 overflow-hidden relative mb-8 rounded-2xl"
		>
			<div class="whitespace-nowrap">
				<div class="scrolling-wrapper">
					<p class="inline-block text-sky-400 font-semibold text-3xl animate-marquee">
						Check Out Our Latest Blog: No Label? No Problem: How to Build a Fanbase as an
						Independent Artist
					</p>
				</div>
			</div>
			<div class="mask mask-left" />
			<div class="mask mask-right" />
		</div>
	</section>
	<!-- Insert Card Grid Component -->
	<!-- Feed it BlogCard Components -->
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
		{#each DefaultBlogPosts as blogProps}
			<BlogCard props={blogProps} />
		{/each}
	</div>
</div>
