<script lang="ts">
	import type { BlogCardProps } from '$lib/managers/BlogManager';
	import { generateGradientColors } from './Utils';
	import { formatDate } from './Utils';

	export let props: BlogCardProps;

	const post_color = props.post_color ?? '#ced2d8';
	const { original, lighter, darker } = generateGradientColors(post_color, 60);

	function produce_styles() {
		return ` background-image: linear-gradient(to bottom right, ${lighter}, ${darker});`;
	}
</script>

<a href={`blog/${props.slug} max-h-[15rem]`}>
	<div class="max-w-2xl my-4 mb-2">
		<div
			class="bg-white rounded-3xl overflow-hidden shadow-2xl
					transition-all duration-500 ease-in-out
					customHoverStyle mb-64"
		>
			<img
				src={`blog/${props.image}/cover.jpeg`}
				alt={`Blog Post titled: ${props.title}`}
				class="w-full h-[15rem] object-cover"
			/>
			<div class={'p-6 h-[15rem]'} style={produce_styles()}>
				<p class="text-xs text-gray-600">{`Published on ${formatDate(props.date_published)}`}</p>
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

<style>
	/* In your component's CSS file */
	.customHoverStyle:hover {
		border: 2px solid #2a96df;
		opacity: 0.95;
		transform: scale(1.05);
	}
</style>
