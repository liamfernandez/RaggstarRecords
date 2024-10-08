<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import BookACall from './BookACall.svelte';
	import { onClickOfContact } from '$lib/utils';

	const logo_ar: number = 559 / 447;
	const logo_height: number = 130;

	let lastScrollTop = 0;

	onMount(() => {
		const scrollHandler = function () {
			let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

			// When scrolling down
			if (scrollTop > lastScrollTop && scrollTop > 130) {
				document.getElementById('header')?.style.setProperty('transform', 'translateY(-100%)'); // move header out of view
			}
			// When scrolling up
			else {
				document.getElementById('header')?.style.setProperty('transform', 'translateY(0)'); // bring header back into view
			}

			lastScrollTop = scrollTop;
		};

		window.addEventListener('scroll', scrollHandler, { passive: true }); // passive improves performance by not blocking onscroll

		return () => {
			window.removeEventListener('scroll', scrollHandler);
		};
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
		<li class="nav-button">
			<button on:click={onClickOfContact}> Contact </button>
		</li>
		<BookACall backgroundIncluded={true} />
	</ul>
</div>

<style lang="postcss">
	.nav-button {
		@apply py-2;
		background: none;
		border: none;
		font-size: 16px;
		cursor: pointer;
		position: relative;
		/* padding: 10px 20px; */
		transition: color 0.3s;
	}
	/* Change button text color on hover */
	.nav-button:hover {
		@apply text-primary; /* change this to your preferred hover color */
	}
	.nav-button::after {
		@apply bg-primary;
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0;
		height: 2px;
		transition: width 0.3s cubic-bezier(0.25, 1, 0.5, 1);
	}
	.nav-button:hover::after {
		width: 100%;
	}
</style>
