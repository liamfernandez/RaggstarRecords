<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { onBookACall, onClickOfContact } from '$lib/utils';
	import Ig from '../icons/IG.svelte';
	import TikTok from '../icons/TikTok.svelte';
	import Twitter from '../icons/Twitter.svelte';
	import PoliciesPopup from './modals/PoliciesPopup.svelte';

	export let smoothScroll = true;

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

<div class=" bg-[#e1e1e1] grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-72 pt-8 pb-20 px-20">
	<span class="flex flex-col gap-6">
		<p class="font-semibold text-darkGrey">FOLLOW US ON</p>
		<span class="flex flex-row items-center gap-3">
			<a href="https://twitter.com/RaggStarENT" target="_blank" class=" bg-[#212121] py-2 px-2">
				<Twitter size={16} />
			</a>
			<a
				href="https://www.tiktok.com/@raggstarrecords"
				target="_blank"
				class=" bg-[#212121] py-2 px-2 hover:scale-105"
			>
				<TikTok size={14} />
			</a>
			<!-- <span class=" bg-[#212121] py-2 px-2">
						<Facebook size={16} />
					</span> -->
			<a
				href="https://www.instagram.com/raggstarrecords/"
				target="_blank"
				class=" bg-[#212121] py-2 px-2 hover:scale-105"
			>
				<Ig size={16} />
			</a>
		</span>
		<p class=" text-lightGrey">RaggStarRecords © 2024</p>
		<p class=" text-xs text-lightGrey mt-10 md:block hidden">
			Site Powered by <a class="hover:underline decoration-lightGrey" href="https://liamverse.io"
				>Liamverse</a
			>
		</p>
	</span>
	<span class="flex flex-col gap-4">
		<p class="font-semibold text-darkGrey">NAVIGATION</p>
		{#if !smoothScroll}
			<ul class="ml-0 flex flex-col items-start gap-2">
				<a href="/">
					<p class=" text-lightGrey hover:underline hover:decoration-lightGrey">Home</p>
				</a>
				<a href="/#what-we-do">
					<p class=" text-lightGrey hover:underline hover:decoration-lightGrey">What We Do</p>
				</a>
				<a href="/#our-process">
					<p class=" text-lightGrey hover:underline hover:decoration-lightGrey">Our Process</p>
				</a>
				<a href="/about" class=" text-lightGrey hover:underline hover:decoration-lightGrey"
					>About Us</a
				>
				<a href="/blog" class=" text-lightGrey hover:underline hover:decoration-lightGrey">Blog</a>
				<button
					on:click={onClickOfContact}
					class=" text-lightGrey hover:underline hover:decoration-lightGrey">Contact Us</button
				>
			</ul>
		{:else}
			<ul class="ml-0 flex flex-col items-start gap-2">
				<button
					on:click={() => {
						navigateAway('home');
					}}
				>
					<p class=" text-lightGrey hover:underline hover:decoration-lightGrey">Home</p>
				</button>
				<button
					on:click={() => {
						navigateAway('what-we-do');
					}}
				>
					<p class=" text-lightGrey hover:underline hover:decoration-lightGrey">What We Do</p>
				</button>
				<button
					on:click={() => {
						navigateAway('our-process');
					}}
				>
					<p class=" text-lightGrey hover:underline hover:decoration-lightGrey">Our Process</p>
				</button>
				<a href="/about" class=" text-lightGrey hover:underline hover:decoration-lightGrey"
					>About Us</a
				>
				<a href="/blog" class=" text-lightGrey hover:underline hover:decoration-lightGrey">Blog</a>
				<button
					on:click={onClickOfContact}
					class=" text-lightGrey hover:underline hover:decoration-lightGrey">Contact Us</button
				>
			</ul>
		{/if}
	</span>
	<span class="flex flex-col gap-6">
		<p class="font-semibold text-darkGrey">CONTACTS</p>
		<span class="flex flex-row gap-3 items-center">
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g clip-path="url(#clip0_647_12)">
					<path
						d="M19.7147 8.57146C19.7147 13.7143 12.0004 19.7143 12.0004 19.7143C12.0004 19.7143 4.28613 13.7143 4.28613 8.57146C4.28613 4.36975 7.7987 0.857178 12.0004 0.857178C16.2021 0.857178 19.7147 4.36975 19.7147 8.57146Z"
						stroke="black"
						stroke-width="1.71429"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M12.0001 11.1429C13.4203 11.1429 14.5716 9.99159 14.5716 8.57143C14.5716 7.15126 13.4203 6 12.0001 6C10.58 6 9.42871 7.15126 9.42871 8.57143C9.42871 9.99159 10.58 11.1429 12.0001 11.1429Z"
						stroke="black"
						stroke-width="1.71429"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M18.9899 17.1428H20.5717L23.1431 23.1428H0.857422L3.42885 17.1428H5.01062"
						stroke="black"
						stroke-width="1.71429"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</g>
				<defs>
					<clipPath id="clip0_647_12">
						<rect width="24" height="24" fill="white" />
					</clipPath>
				</defs>
			</svg>
			<p class=" text-midGrey">Atlanta, GA</p>
		</span>
		<button
			class="text-sm self-start text-lightGrey underline decoration-lightGrey"
			on:click={onClickOfContact}>Click Here To Send A Message</button
		>
		<button class="text-sm text-lightGrey underline decoration-lightGrey" on:click={onBookACall}
			>Click Here To Book a 1 On 1 Call</button
		>
		<a
			class="block md:hidden text-xs pt-10 -mb-10 text-lightGrey decoration-lightGrey underline"
			href="https://liamverse.io">Site Powered by Liamverse</a
		>
	</span>
</div>
<PoliciesPopup />
