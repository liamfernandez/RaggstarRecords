<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import BookACall from './BookACall.svelte';

	const logo_ar: number = 559 / 447;
	const logo_height: number = 130;

	let lastScrollTop = 0;

	onMount(() => {
		window.addEventListener(
			'scroll',
			function () {
				let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

				// When scrolling down
				if (scrollTop > lastScrollTop && scrollTop > 130) {
					this.document.getElementById('header').style.transform = 'translateY(-100%)'; // move header out of view
				}
				// When scrolling up
				else {
					this.document.getElementById('header').style.transform = 'translateY(0)'; // bring header back into view
				}

				lastScrollTop = scrollTop;
			},
			{ passive: true }
		); // passive improves performance by not blocking onscroll
	});

	function navigateAway(goal: 'what-we-do' | 'our-process' | 'home') {
		if ($page.url.pathname === '/' && goal === 'home') {
			window.scrollTo({ top: 0, behavior: 'smooth' });
			window.history.replaceState({}, '', '/');
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

<div class="hidden md:flex flex-row justify-between items-center w-full pl-32">
	<img
		src="/main-logo-no-bg.png"
		class=""
		height={logo_height}
		width={Math.round(logo_height * logo_ar)}
		alt="RaggStarRecords Logo"
	/>
	<ul class="flex flex-row gap-8 items-center mr-20 text-midGrey">
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
		<li class="nav-button">
			<a href="/about">About</a>
		</li>
		<li class="nav-button">
			<a href="/frequently-asked-questions">FAQ</a>
		</li>
		<li class="nav-button">
			<a href="/blog">Blog</a>
		</li>
	</ul>
</div>
