<script lang="ts">
	import '$lib/styles/prose-mods.css';
	import Clock from '$lib/icons/Clock.svelte';
	import { onMount } from 'svelte';
	import Toast from './Toast.svelte';
	import { countWordsInDiv, formatDate } from './Utils';

	export let title: string;
	export let subtitle: string;
	export let published_date: Date;
	//export let metaImgUrl: string;
	export let coverImg: string;

	const AVERAGE_WPM_OF_READERS = 267;
	let minutesToRead = -1;

	let showToast = false;
	let message = '';

	onMount(() => {
		const totalWords = countWordsInDiv('total-words');
		minutesToRead = Math.ceil(totalWords / AVERAGE_WPM_OF_READERS);
		console.log(
			'Total Words in this article is? \n\n',
			totalWords,
			'\n\nMinutes to read: ',
			minutesToRead
		);

		const headingLinks = document.getElementsByClassName('icon-link');
		for (let i = 0; i < headingLinks.length; i++) {
			const parentLink = headingLinks[i].closest('a');
			if (!parentLink) {
				continue;
			}

			parentLink.onclick = function (event) {
				event.preventDefault();

				// Copy the href to the clipboard
				navigator.clipboard
					.writeText(parentLink.href)
					.then(function () {
						showToast = true;
						message = 'Copied link to this section to clipboard!';
						setTimeout(() => {
							showToast = false;
						}, 3001);
					})
					.catch(function (err) {
						console.error('Unable to copy to clipboard', err);
					});
			};
		}
	});
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content={title} />
	<meta property="og:description" content="Check out this article on raggstarrecords.com" />
	<meta property="og:image" content={`../blog/${coverImg}/cover.jpeg`} />
</svelte:head>

<span class="flex justify-center md:-translate-y-40 -translate-y-20">
	<img
		class="md:w-[40rem] md:h-[22.5rem] w-[20rem] h-[11.25rem] rounded-lg outline outline-black"
		src={`../blog/${coverImg}/cover.jpeg`}
		alt={title}
	/>
</span>
<div class="md:-mt-32 -mt-16 text-black flex flex-col gap-4 blogFont items-center mx-20">
	<article>
		<h1
			class="md:text-5xl sm:text-4xl text-3xl md:leading-[3.4rem] max-w-[43rem] my-0 font-extrabold"
		>
			{title}
		</h1>
		<h2
			class="md:text-2xl sm:text-2xl text-xl md:leading-[3.4rem] max-w-[43rem] my-0 font-extrabold text-gray-500"
		>
			{subtitle}
		</h2>
		<div class="md:w-[43rem] max-w-full">
			<hr class="mb-4 mt-4" />
			<span class="flex flex-col md:gap-6 gap-4">
				<span class="flex flex-row items-center justify-between">
					<span class="flex flex-col md:flex-row items-start md:items-center">
						<p class="text-xs text-sky-500 md:text-[16px] md:mr-20 mr-2">
							<strong class="text-black">Author: </strong>RGS Staff
						</p>
						<p class="mt-[1px] text-xs text-sky-500 md:text-[16px]">
							<strong class="text-black">Published: </strong>{formatDate(published_date)}
						</p>
					</span>
					{#if minutesToRead > 0}
						<span class="flex flex-row gap-1 items-center">
							<Clock size={20} />
							<p class="md:text-[16px] text-xs opacity-60">
								{minutesToRead} min read
							</p>
						</span>
					{/if}
				</span>
			</span>
			<hr class="md:mt-4 mt-2" />
		</div>
		<hb />
		<div id={`total-words`} class="content max-w-none md:-mt-2 -mt-4">
			<slot />
		</div>
	</article>
	<Toast show={showToast} {message} />
</div>

<style lang="">
	.blogFont {
		@apply font-openSans;
	}
</style>
