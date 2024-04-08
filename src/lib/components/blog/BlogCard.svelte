<script lang="ts">
	import type { BlogCardProps } from '$lib/managers/BlogManager';

	export let props: BlogCardProps;
</script>

<a href={`blog/${props.slug}`}>
	<div class="max-w-2xl mx-auto my-8">
		<div
			class="bg-white rounded-3xl overflow-hidden shadow-2xl
					transition-all duration-500 ease-in-out
					hover:border-2 hover:border-slate-400 hover:opacity-95 hover:scale-105 mb-64"
		>
			<img
				src={`blog/${props.image}/cover.png`}
				alt={`Blog Post titled: ${props.title}`}
				class="w-full object-cover"
			/>
			<div class="p-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400">
				<p class="text-xs text-gray-600">{`Published on ${props.date_published}`}</p>
				<h2 class="font-semibold text-xl text-gray-900 mt-2 mb-4">
					{props.title}
				</h2>
				<p class="text-gray-700 text-base">
					{props.description}
				</p>
			</div>
		</div>
	</div>
</a>
