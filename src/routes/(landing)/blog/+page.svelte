<script>
	import BlogCard from '$lib/components/blog/BlogCard.svelte';
	import NewsletterSignup from '$lib/components/blog/NewsletterSignup.svelte';
	import { orderedBlogPosts } from '$lib/repositories/BlogPostRepository';

	const headlineText = `Check Out Our Latest Post: ${orderedBlogPosts[0].title} - ${orderedBlogPosts[0].subtitle}`;
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>
<div class="container mx-auto px-4">
	<section id="Marquee scrolling headline">
		<div
			class=" hidden md:block bg-gradient-to-r from-slate-50 to-slate-100 bg-opacity-75 py-5 px-6 overflow-hidden relative mb-8 rounded-2xl"
		>
			<div class="whitespace-nowrap">
				<div class="scrolling-wrapper">
					<p class="inline-block text-sky-400 font-semibold text-3xl animate-marquee">
						{headlineText}
					</p>
				</div>
			</div>
			<div class="mask mask-left" />
			<div class="mask mask-right" />
		</div>
	</section>
	<NewsletterSignup source={'landing page'} />
	<div
		class="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-6 md:mb-20"
	>
		{#each orderedBlogPosts as blogProps}
			<BlogCard props={blogProps} />
		{/each}
	</div>
</div>
