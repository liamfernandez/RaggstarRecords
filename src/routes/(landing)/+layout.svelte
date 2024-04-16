<script lang="ts">
	import '../../app.css';

	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import NavBar from '$lib/components/NavBar.svelte';
	import FooterBar from '$lib/components/FooterBar.svelte';
	import MobileNavBar from '$lib/components/MobileNavBar.svelte';
	import BookACall from '$lib/components/BookACall.svelte';
	import ContactPopup from '$lib/components/ContactPopup.svelte';

	function navigateAway(goal: 'what-we-do' | 'our-process' | 'home' | 'about' | 'blog' | 'FAQ') {
		const drawerInput = document.getElementById('my-drawer-4') as HTMLInputElement;
		if (drawerInput.checked) {
			drawerInput.checked = false;
		}

		if ($page.url.pathname === '/' && goal === 'home') {
			window.scrollTo({ top: 0, behavior: 'smooth' });
			window.history.replaceState({}, '', '/');
		} else if (goal === 'blog') {
			goto('/blog');
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

	function openModal() {
		const dialogElm = document.getElementById('send-a-message') as HTMLDialogElement;
		dialogElm.showModal();
	}
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" />
	<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
</svelte:head>
<div class="drawer md:block">
	<input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content bg-white min-h-screen">
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
			class="flex flex-col pt-40 z-[10001] w-[60%] bg-white h-full gap-8 items-center text-midGrey"
		>
			<label
				for="my-drawer-4"
				class={`btn btn-circle self-start bg-white scale-[0.72] -mt-8 ml-2 -mb-8 text-lg text-primary`}
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
				<button on:click={openModal}> Contact </button>
			</li>
			<li>
				<BookACall backgroundIncluded={true} />
			</li>
		</ul>
	</div>
</div>
<ContactPopup />
