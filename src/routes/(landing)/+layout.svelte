<script lang="ts">
	import '../../app.css';

	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import NavBar from '$lib/components/NavBar.svelte';
	import FooterBar from '$lib/components/FooterBar.svelte';
	import MobileNavBar from '$lib/components/MobileNavBar.svelte';
	import BookACall from '$lib/components/BookACall.svelte';
	import ContactPopup from '$lib/components/modals/ContactPopup.svelte';
	import PoliciesPopup from '$lib/components/modals/PoliciesPopup.svelte';

	// DIALOG IDs
	let policyPopup: HTMLDialogElement;
	let sendAMessagePopup: HTMLDialogElement;
	const sendAMessageId = 'send-a-message';
	// const policiesPopupId = 'policies-popup';

	function navigateAway(
		goal: 'what-we-do' | 'our-process' | 'home' | 'about' | 'testimonials' | 'blog' | 'FAQ'
	) {
		const drawerInput = document.getElementById('my-drawer-4') as HTMLInputElement;
		if (drawerInput.checked) {
			drawerInput.checked = false;
		}

		if ($page.url.pathname === '/' && goal === 'home') {
			window.scrollTo({ top: 0, behavior: 'smooth' });
			window.history.replaceState({}, '', '/');
		} else if (goal === 'blog') {
			goto('/blog');
		} else if (goal === 'testimonials') {
			goto('/testimonials');
		} else if (goal === 'about') {
			goto('/about');
		} else if (goal === 'FAQ') {
			goto('/frequently-asked-questions');
		} else if ($page.url.pathname === '/') {
			const element = document.getElementById(goal);
			element?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
			console.log('scrolling smoothly to ', $page.url.hostname + '/#', goal);
			window.history.replaceState({}, '', `/#${goal}`);
		} else {
			console.log('TELEPORTING');

			if (goal === 'home') {
				goto(`/`);
			} else {
				goto(`/#${goal}`);
			}
		}
	}

	function openContactModal() {
		policyPopup.showModal();
	}
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" />
	<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
	<meta name="facebook-domain-verification" content="dm46297wigz7s8je1knlvieqb0w9tk" />
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
			alt="FB Pixel"
			src="https://www.facebook.com/tr?id=391503896615796&ev=PageView&noscript=1"
		/></noscript
	>
	<!-- End Meta Pixel Code -->
</svelte:head>
<div class="drawer md:block">
	<input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content min-h-screen bg-white">
		<nav id="header" class=" header">
			<NavBar />
			<MobileNavBar />
		</nav>
		<slot />
		<footer>
			<FooterBar />
		</footer>
	</div>
	<div class="drawer-side z-40">
		<label for="my-drawer-4" class="drawer-overlay" />
		<ul
			class="z-[10001] flex h-full w-[60%] flex-col items-center gap-8 bg-white pt-40 text-midGrey"
		>
			<label
				for="my-drawer-4"
				class={`btn btn-circle -mb-8 -mt-8 ml-2 scale-[0.72] self-start bg-white text-lg text-primary`}
				>X</label
			>
			<button
				on:click={() => {
					navigateAway('home');
				}}
			>
				<li class="nav-button">
					<p>Home</p>
				</li>
			</button>
			<button
				on:click={() => {
					navigateAway('what-we-do');
				}}
			>
				<li class="nav-button">
					<p>What We Do</p>
				</li>
			</button>
			<button
				on:click={() => {
					navigateAway('our-process');
				}}
			>
				<li class="nav-button">
					<p>Our Process</p>
				</li>
			</button>
			<button
				on:click={() => {
					navigateAway('about');
				}}
			>
				<li class="nav-button">
					<p>About</p>
				</li>
			</button>
			<!-- TODO: ADD A TESTIMONIALS HERE FOR MOBILE DRAWER NAV -->
			<button
				on:click={() => {
					navigateAway('testimonials');
				}}
			>
				<li class="nav-button">
					<p>Testimonials</p>
				</li>
			</button>
			<button
				on:click={() => {
					navigateAway('blog');
				}}
			>
				<li class="nav-button">
					<p>Blog</p>
				</li>
			</button>
			<button
				on:click={() => {
					navigateAway('FAQ');
				}}
			>
				<li class="nav-button">
					<p>FAQ</p>
				</li>
			</button>
			<li class="nav-button">
				<button on:click={openContactModal}> Contact </button>
			</li>
			<li>
				<BookACall backgroundIncluded={true} />
			</li>
		</ul>
	</div>
</div>
<ContactPopup popupElm={sendAMessagePopup} />
<PoliciesPopup popupElm={policyPopup} />
