<script lang="ts">
	import '../../app.css';
	import FooterBar from '$lib/components/FooterBar.svelte';
	import { MoveLeft } from 'lucide-svelte';
</script>

<body>
	<div class=" responsive-background">
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

	@media (min-width: 721px) {
		body {
			background: linear-gradient(135deg, #3799c6, #6b3ae6);
		}

		.responsive-background {
			@apply cheap;
		}
	}

	.cheap {
		position: relative;
		overflow: hidden;
		background: radial-gradient(circle, rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.1));
	}

	.cheap::before,
	.cheap::after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		width: 200%;
		height: 200%;
		background: conic-gradient(
			from 0deg,
			#1a237e,
			/* Dark navy */ #311b92,
			/* Deep purple */ #4a148c,
			/* Royal purple */ #263238,
			/* Dark blue grey */ #1a1a2e,
			/* Midnight blue */ #2c003e,
			/* Dark plum */ #311b92,
			#1a237e
		);
		transform: translate(-50%, -50%);
		animation: rotate 30s linear infinite;
		filter: blur(50px); /* Create a soft glowing effect */
		opacity: 0.8;
	}

	/* Secondary rotating layer for depth */
	.container::after {
		width: 180%;
		height: 180%;
		animation: rotate-reverse 10s linear infinite;
		opacity: 0.6;
	}

	/* Rotating animations */
	@keyframes rotate {
		0% {
			transform: translate(-50%, -50%) rotate(0deg);
		}
		100% {
			transform: translate(-50%, -50%) rotate(360deg);
		}
	}

	@keyframes rotate-reverse {
		0% {
			transform: translate(-50%, -50%) rotate(0deg);
		}
		100% {
			transform: translate(-50%, -50%) rotate(-360deg);
		}
	}

	@media (max-width: 720px) {
		.responsive-background {
			@apply dots;
		}
	}

	.dots::after {
		content: '';
		position: absolute;
		inset: 0;
		z-index: 1;
		backdrop-filter: blur(1em) brightness(6);
		background-image: radial-gradient(circle at 50% 50%, #0000 0, #0000 2px, hsl(0 0 4%) 2px);
		background-size: 8px 8px;
	}

	.dots {
		position: relative;
		inset: 0;
		--c: #09f;
		background-color: #000;
		background-image:
			radial-gradient(4px 100px at 0px 235px, var(--c), #0000),
			radial-gradient(4px 100px at 300px 235px, var(--c), #0000),
			radial-gradient(1.5px 1.5px at 150px 117.5px, var(--c) 100%, #0000 150%),
			radial-gradient(4px 100px at 0px 252px, var(--c), #0000),
			radial-gradient(4px 100px at 300px 252px, var(--c), #0000),
			radial-gradient(1.5px 1.5px at 150px 126px, var(--c) 100%, #0000 150%),
			radial-gradient(4px 100px at 0px 150px, var(--c), #0000),
			radial-gradient(4px 100px at 300px 150px, var(--c), #0000),
			radial-gradient(1.5px 1.5px at 150px 75px, var(--c) 100%, #0000 150%),
			radial-gradient(4px 100px at 0px 253px, var(--c), #0000),
			radial-gradient(4px 100px at 300px 253px, var(--c), #0000),
			radial-gradient(1.5px 1.5px at 150px 126.5px, var(--c) 100%, #0000 150%),
			radial-gradient(4px 100px at 0px 204px, var(--c), #0000),
			radial-gradient(4px 100px at 300px 204px, var(--c), #0000),
			radial-gradient(1.5px 1.5px at 150px 102px, var(--c) 100%, #0000 150%),
			radial-gradient(4px 100px at 0px 134px, var(--c), #0000),
			radial-gradient(4px 100px at 300px 134px, var(--c), #0000),
			radial-gradient(1.5px 1.5px at 150px 67px, var(--c) 100%, #0000 150%),
			radial-gradient(4px 100px at 0px 179px, var(--c), #0000),
			radial-gradient(4px 100px at 300px 179px, var(--c), #0000),
			radial-gradient(1.5px 1.5px at 150px 89.5px, var(--c) 100%, #0000 150%),
			radial-gradient(4px 100px at 0px 299px, var(--c), #0000),
			radial-gradient(4px 100px at 300px 299px, var(--c), #0000),
			radial-gradient(1.5px 1.5px at 150px 149.5px, var(--c) 100%, #0000 150%),
			radial-gradient(4px 100px at 0px 215px, var(--c), #0000),
			radial-gradient(4px 100px at 300px 215px, var(--c), #0000),
			radial-gradient(1.5px 1.5px at 150px 107.5px, var(--c) 100%, #0000 150%),
			radial-gradient(4px 100px at 0px 281px, var(--c), #0000),
			radial-gradient(4px 100px at 300px 281px, var(--c), #0000),
			radial-gradient(1.5px 1.5px at 150px 140.5px, var(--c) 100%, #0000 150%),
			radial-gradient(4px 100px at 0px 158px, var(--c), #0000),
			radial-gradient(4px 100px at 300px 158px, var(--c), #0000),
			radial-gradient(1.5px 1.5px at 150px 79px, var(--c) 100%, #0000 150%),
			radial-gradient(4px 100px at 0px 210px, var(--c), #0000),
			radial-gradient(4px 100px at 300px 210px, var(--c), #0000),
			radial-gradient(1.5px 1.5px at 150px 105px, var(--c) 100%, #0000 150%);
		background-size:
			300px 235px,
			300px 235px,
			300px 235px,
			300px 252px,
			300px 252px,
			300px 252px,
			300px 150px,
			300px 150px,
			300px 150px,
			300px 253px,
			300px 253px,
			300px 253px,
			300px 204px,
			300px 204px,
			300px 204px,
			300px 134px,
			300px 134px,
			300px 134px,
			300px 179px,
			300px 179px,
			300px 179px,
			300px 299px,
			300px 299px,
			300px 299px,
			300px 215px,
			300px 215px,
			300px 215px,
			300px 281px,
			300px 281px,
			300px 281px,
			300px 158px,
			300px 158px,
			300px 158px,
			300px 210px,
			300px 210px,
			300px 210px;
		animation: hi 150s linear infinite;
	}

	@keyframes hi {
		0% {
			background-position:
				0px 220px,
				3px 220px,
				151.5px 337.5px,
				25px 24px,
				28px 24px,
				176.5px 150px,
				50px 16px,
				53px 16px,
				201.5px 91px,
				75px 224px,
				78px 224px,
				226.5px 350.5px,
				100px 19px,
				103px 19px,
				251.5px 121px,
				125px 120px,
				128px 120px,
				276.5px 187px,
				150px 31px,
				153px 31px,
				301.5px 120.5px,
				175px 235px,
				178px 235px,
				326.5px 384.5px,
				200px 121px,
				203px 121px,
				351.5px 228.5px,
				225px 224px,
				228px 224px,
				376.5px 364.5px,
				250px 26px,
				253px 26px,
				401.5px 105px,
				275px 75px,
				278px 75px,
				426.5px 180px;
		}

		to {
			background-position:
				0px 6800px,
				3px 6800px,
				151.5px 6917.5px,
				25px 13632px,
				28px 13632px,
				176.5px 13758px,
				50px 5416px,
				53px 5416px,
				201.5px 5491px,
				75px 17175px,
				78px 17175px,
				226.5px 17301.5px,
				100px 5119px,
				103px 5119px,
				251.5px 5221px,
				125px 8428px,
				128px 8428px,
				276.5px 8495px,
				150px 9876px,
				153px 9876px,
				301.5px 9965.5px,
				175px 13391px,
				178px 13391px,
				326.5px 13540.5px,
				200px 14741px,
				203px 14741px,
				351.5px 14848.5px,
				225px 18770px,
				228px 18770px,
				376.5px 18910.5px,
				250px 5082px,
				253px 5082px,
				401.5px 5161px,
				275px 6375px,
				278px 6375px,
				426.5px 6480px;
		}
	}
</style>
