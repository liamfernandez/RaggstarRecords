<script lang="ts">
	import '../../app.css';
	import './testimonials.css';
	import FooterBar from '$lib/components/FooterBar.svelte';
	import { MoveLeft } from 'lucide-svelte';
</script>

<body>
	<div class="dots">
		<div class="relative z-10 pb-10">
			<nav class="secBg mb-20 flex h-[4rem] w-full flex-row items-center pl-4 md:h-[5rem]">
				<img
					src="/half-logo.png"
					alt="RaggStarRecords Logo"
					class="absolute -right-6 top-1/2 h-[3.5rem] -translate-x-1/2 -translate-y-1/2 md:left-1/2 md:h-[4rem]"
				/>
				<a href="/testimonials" class="flex flex-row items-center">
					<MoveLeft size={32} class="scale-[0.85] text-cyan-400 md:scale-100" />
					<span
						class=" ml-2 flex flex-row gap-2 text-[14px] text-gray-300 underline-offset-4 hover:underline md:text-[16px]"
					>
						Back to All Testimonials
					</span>
				</a>
			</nav>
			<slot />
		</div>
	</div>
	<FooterBar />
</body>

<style lang="postcss">
	.secBg {
		@apply bg-[#1018287a];
		backdrop-filter: blur(4px);
	}
</style>
