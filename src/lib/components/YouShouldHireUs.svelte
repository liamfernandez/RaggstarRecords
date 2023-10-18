<script lang="ts">
	import { fly } from 'svelte/transition';
	import CheckBullet from './CheckBullet.svelte';
	import { visibility } from 'fractils';

	let visible: boolean,
		options = { threshold: 0.25 };

	function handleChange(e: any) {
		if (visible) return;
		visible = e.detail.isVisible;
	}
</script>

<div
	use:visibility={options}
	on:v-change={handleChange}
	class="pt-48 md:pb-72 pb-[250px] 2xl:-mt-[12.1rem] bg-secondary flex flex-col items-center"
>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-8 -mt-[8rem] z-10 max-w-[90%] md:max-w-7xl">
		<span class="flex flex-col gap-8">
			<h2 class=" text-4xl md:text-left text-center md:text-[3.4rem] text-darkGrey">
				Why You Should Hire Us
			</h2>
			<p>
				After working with 50+ artists over an 18-month span, we have grown each of their <strong
					>streams and followers by at least 25%</strong
				>
			</p>
			<p>
				RaggStarRecords was built from the ground up with one purpose in mind: <strong
					>To help RnB artists grow their fanbase so they can make a living off their art.</strong
				>
			</p>
			<p>
				We don't work with heavy metal artists. We don't work with EDM or Punk. <strong>
					We focus solely on Rhythm and Blues artists</strong
				> who are serious about their craft and want to take their art and career to the next level.
			</p>
			<h3 class=" text-darkGrey text-3xl md:text-left text-center md:pb-0 pb-4 md:text-[2.2rem]">
				What Makes Us Different?
			</h3>
			<ul class="-mt-10">
				<CheckBullet>
					<p>
						We handle all types of production that you need to grow as an artist. Instead of having
						to know and talk to 20 different vendors or freelancers that you are not building a
						relationship with, RaggStar has everything you need in music production. We are a
						one-stop shop for R&B artists. From your music videos to studio time to mixing &
						mastering to marketing and promotion. 1 Company working for 1 artist.
					</p>
				</CheckBullet>
				<CheckBullet>
					<p>
						We do the stuff the artist shouldn't have to do. We schedule your content and posts so
						you don't have to. We film and edit your content so you don't have to. We mix and master
						your vocals so you don't have to. We make your cover art so you don't have to.
					</p>
				</CheckBullet>
				<CheckBullet>
					<p>
						We know how to deliver radio-quality songs that will catch the ears of thousands because
						that is what we do for all of our clients.
					</p>
				</CheckBullet>
				<CheckBullet>
					<p>
						We provide performance reports of how your project is doing after you release which
						means you benefit from the blessing of analytics. You will be able to see how your #'s
						are doing from project to project so you see what your fans like the most. So over time,
						you can hone in on that one sound of yours that people can't get enough of. Once we
						master that there is no limit to how big your career can get.
					</p>
				</CheckBullet>
			</ul>
		</span>
		{#if visible}
			<img
				in:fly={{ duration: 1000, x: 100 }}
				src="/robb.JPG"
				alt="One of our talented artists DattKidRobb recording live"
			/>
		{/if}
	</div>
</div>

<style>
	p {
		@apply text-midGrey text-lg;
	}
</style>
