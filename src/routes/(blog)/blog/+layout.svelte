<script lang="ts">
	import '../../../app.css';
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicInOut } from 'svelte/easing';
	import { ASSETS_PATH } from '$lib/repositories/BlogPostRepository';
	import { blur } from 'svelte/transition';
	import ClickOutLink from '$lib/icons/ClickOutLink.svelte';
	import FooterBar from '$lib/components/FooterBar.svelte';
	import ContactPopup from '$lib/components/modals/ContactPopup.svelte';

	const progress = tweened(0, {
		duration: 400,
		easing: cubicInOut
	});

	onMount(() => {
		// Set progress bar on top of screen to show how close to done to reading they are.
		function handleScroll() {
			const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
			const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
			progress.set(scrollTop / height);
		}

		const scrollProgress = document.getElementById('scroll-progress');
		if (scrollProgress) {
			setTimeout(() => {
				handleScroll();
			}, 1000);
			window.addEventListener('scroll', handleScroll);
		}
	});
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Akatab" rel="stylesheet" />
	<script>
		!(function (f, b, e, v, n, t, s) {
			if (f.fbq) return;
			n = f.fbq = function () {
				n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
			};
			if (!f._fbq) f._fbq = n;
			n.push = n;
			n.loaded = !0;
			n.version = '2.0';
			n.queue = [];
			t = b.createElement(e);
			t.async = !0;
			t.src = v;
			s = b.getElementsByTagName(e)[0];
			s.parentNode.insertBefore(t, s);
		})(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
		fbq('init', '391503896615796');
		fbq('track', 'PageView', {
			page_path: window.location.pathname,
			page_title: document.title
		});
	</script>
	<noscript
		><img
			height="1"
			width="1"
			style="display:none"
			src="https://www.facebook.com/tr?id=391503896615796&ev=PageView&noscript=1"
		/></noscript
	>
	<!-- DO NOT MODIFY -->
	<!-- End Facebook Pixel Code -->
</svelte:head>
<progress
	id="scroll-progress"
	value={$progress}
	class="fixed top-0 progress-bg bg-transparent w-full h-[3px] z-50"
/>
<div id="splash_of_color" class="md:h-[15rem] h-[10rem] bg-white">
	<div class=" absolute left-[32%] md:left-[45%] pt-4 z-50">
		<span in:blur={{ duration: 2400, delay: 200 }} class="flex flex-col items-center">
			<a
				href="/blog"
				rel="noreferrer noopener"
				class=" w-fit flex hover:animate-pulse flex-row gap-2 items-center rounded-xl font-[Akatab] outline-PrimaryText outline outline-[1px] px-4 text-PrimaryText py-1"
			>
				<ClickOutLink rotate={true} />
				Back to All Posts
			</a>
		</span>
	</div>
	<img
		class="h-40 absolute left-[1rem] hidden xl:block"
		src={`${ASSETS_PATH}/../main-logo-no-bg.png`}
		alt="raggstar logo"
	/>
	<img
		class="h-40 absolute right-[1rem] hidden xl:block"
		src={`${ASSETS_PATH}/../main-logo-no-bg.png`}
		alt="raggstar logo"
	/>
</div>
<div class={`md:w-full w-screen pb-20 bg-white`}>
	<slot />
</div>
<FooterBar smoothScroll={false} />
<ContactPopup />
