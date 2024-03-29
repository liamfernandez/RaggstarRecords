<script>
	import BlogPosts from '$lib/components/BlogCard.svelte';
</script>

<div class="container mx-auto px-4">
	<div
		class="bg-gradient-to-r from-slate-50 to-slate-100 bg-opacity-75 py-5 px-6 overflow-hidden relative mb-8 rounded-2xl"
	>
		<div class="whitespace-nowrap">
			<div class="scrolling-wrapper">
				<p class="inline-block text-sky-400 font-semibold text-3xl animate-marquee">
					Check Out Our Latest Blog: No Label? No Problem: How to Build a Fanbase as an Independent
					Artist
				</p>
			</div>
		</div>
		<div class="mask mask-left" />
		<div class="mask mask-right" />
	</div>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
		<a href="blog/how-to-create-a-fanbase-without-a-label">
			<div class="max-w-2xl mx-auto my-8">
				<div
					class="bg-white rounded-3xl overflow-hidden shadow-2xl
					transition-all duration-500 ease-in-out
					hover:shadow-2xl hover:border-4 hover:border-slate-400 hover:opacity-95 hover:scale-105 mb-64"
				>
					<img src="blog_image1.png" alt="Image description" class="w-full object-cover" />
					<div class="p-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400">
						<p class="text-xs text-gray-600">Published on February 2nd, 2024</p>
						<h2 class="font-semibold text-xl text-gray-900 mt-2 mb-4">
							No Label? No Problem: How to Build a Fanbase as an Independent Artist
						</h2>
						<p class="text-gray-700 text-base">
							In this article we will be discussing methods of how successful independent artists
							were able to build their following without the backing of a major label.
						</p>
					</div>
				</div>
			</div>
		</a>
	</div>
</div>
