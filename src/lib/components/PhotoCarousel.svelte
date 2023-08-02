<script lang="ts">
	import { onMount } from 'svelte';

	const orderOfPics: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

	onMount(() => {
		const navTrayOne = document.getElementById(`nav-img-1`);
		navTrayOne?.classList.toggle(`opacity-50`);
	});

	function navImageClicked(num: number, scroll: boolean = true) {
		for (let x of orderOfPics) {
			const elm = document.getElementById(`nav-img-${x}`);
			if (x != num) {
				if (elm?.classList.contains(`opacity-50`)) {
					elm.classList.toggle(`opacity-50`);
				}
			} else {
				console.log(`About to toggle opacity for image number: #`, x);
				if (!elm?.classList.contains(`opacity-50`)) {
					elm?.classList.toggle(`opacity-50`);
				}
			}
		}

		if (scroll) {
			let carousel = document.getElementById(`carousel`);
			const newXPos = window.innerWidth * (num - 1);
			carousel?.scrollTo(newXPos, 0);
			const lengthOfWidth = carousel?.scrollWidth as number;
			toggleButtons(newXPos, lengthOfWidth);
		}

		let navTray = document.getElementById(`navTray`);
		const navTrayPos = 100 * (num - 7);
		navTray?.scrollTo(navTrayPos, 0);
	}

	function scrollImage(scrollRight: boolean): void {
		let carousel = document.getElementById(`carousel`);
		if (!carousel) return;
		let newScrollPos = carousel?.scrollLeft;
		if (scrollRight) {
			carousel?.scrollBy(window.innerWidth, 0);
			newScrollPos += window.innerWidth;
		} else {
			carousel?.scrollBy(-1 * window.innerWidth, 0);
			newScrollPos -= window.innerWidth;
		}

		toggleButtons(newScrollPos, carousel?.scrollWidth);
		navImageClicked(Math.floor(newScrollPos / (window.innerWidth - 20)) + 1, false);
	}

	function toggleButtons(scrollPos: number, maxWidth: number): void {
		let leftButton = document.getElementById('leftButton');
		let rightButton = document.getElementById('rightButton');
		if (scrollPos < window.innerWidth) {
			leftButton?.classList.toggle(`btn-disabled`);
		} else if (scrollPos >= maxWidth - window.innerWidth) {
			rightButton?.classList.toggle(`btn-disabled`);
		} else {
			if (leftButton?.classList.contains(`btn-disabled`)) {
				leftButton?.classList.toggle(`btn-disabled`);
			}

			if (rightButton?.classList.contains(`btn-disabled`)) {
				rightButton?.classList.toggle(`btn-disabled`);
			}
		}
	}
</script>

<div id={`carousel`} class={`carousel w-full md:overflow-x-hidden`}>
	<div class="absolute flex justify-between translate-y-[380px] left-5 right-5 z-[1]">
		<button
			id={`leftButton`}
			class={'hidden md:inline-flex btn btn-disabled btn-circle'}
			on:click={() => scrollImage(false)}>❮</button
		>
		<button
			id={`rightButton`}
			class={'hidden md:inline-flex btn btn-circle'}
			on:click={() => scrollImage(true)}>❯</button
		>
	</div>
	{#each orderOfPics as index}
		<div class="carousel-item relative w-full h-[450px] md:h-[750px] object-cover">
			<img
				alt={`main room image number ${index}`}
				src={`/main-room/main-room-${index}.jpeg`}
				class={`w-full object-cover`}
			/>
		</div>
	{/each}
</div>
<ul
	id={`navTray`}
	class={`hidden carousel carousel-center 2xl:justify-center pt-10 py-4 mx-5 md:flex flex-row gap-2 overflow-scroll overflow-x-hidden`}
>
	{#each orderOfPics as index}
		<li class="carousel-item min-h-[100px] min-w-[100px]">
			<button on:click={() => navImageClicked(index)}>
				<img
					alt={`main room image number ${index}`}
					id={`nav-img-${index}`}
					src={`/main-room/main-room-${index}.jpeg`}
					class={`w-[100px] h-[100px] object-cover`}
				/>
			</button>
		</li>
	{/each}
</ul>
