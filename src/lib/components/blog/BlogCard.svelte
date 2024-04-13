<script lang="ts">
	import type { BlogCardProps } from '$lib/managers/BlogManager';
	import { generateGradientColors } from './Utils';

	export let props: BlogCardProps;

	const post_color = props.post_color ?? '#ced2d8';
	const { original, lighter, darker } = generateGradientColors(post_color, 60);

	function produce_styles() {
		return ` background-image: linear-gradient(to bottom right, ${lighter}, ${darker});`;
	}
</script>

<a href={`blog/${props.slug}`}>
	<div class="max-w-2xl my-4 mb-2">
		<div
			class="bg-white rounded-3xl overflow-hidden shadow-2xl
					transition-all duration-500 ease-in-out
					hover:border-2 hover:border-slate-400 hover:opacity-95 hover:scale-105 mb-64"
		>
			<img
				src={`blog/${props.image}/cover.png`}
				alt={`Blog Post titled: ${props.title}`}
				class="w-full h-[15rem] object-cover"
			/>
			<div class={'p-6 h-[15rem]'} style={produce_styles()}>
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
