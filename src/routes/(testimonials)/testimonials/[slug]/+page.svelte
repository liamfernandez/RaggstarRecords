<script lang="ts">
	import { page } from '$app/stores';
	import { error } from '@sveltejs/kit';
	import {
		Testimonials_Data,
		GetArtistImg,
		ASSETS_PATH
	} from '$lib/repositories/TestimonialRepository';
	import type { TestimonialProps } from '$lib/repositories/TestimonialRepository';
	import VideoPlayer from '$lib/components/atoms/VideoPlayer.svelte';
	import {
		Clapperboard,
		CornerDownRight,
		Drum,
		FileAudio,
		AudioWaveform,
		Palette
	} from 'lucide-svelte';
	import AudioPlayer from '$lib/components/atoms/AudioPlayer.svelte';

	const slug = $page.params.slug;

	const MapTestimonials: Map<string, TestimonialProps> = Testimonials_Data.reduce(
		(acc, testimonial) => {
			const artist_path = `${testimonial.first_name.toLowerCase() + '-' + testimonial.last_name.toLowerCase() + '-' + testimonial.id}`;
			acc.set(artist_path, testimonial);
			return acc;
		},
		new Map<string, TestimonialProps>()
	);

	const testimonial = MapTestimonials.get(slug) as TestimonialProps;

	if (!MapTestimonials.has(slug)) {
		throw error(404, 'Testimonial not found');
	}

	let audioPlayers: HTMLAudioElement[] = [];

	// Function to handle when an audio player starts playing
	function handlePlay(currentPlayer: HTMLAudioElement) {
		// Pause all other players
		audioPlayers.forEach((player) => {
			if (player !== currentPlayer && !player.paused) {
				player.pause();
			}
		});
	}
</script>

<svelte:head>
	<title>Testimonial | {testimonial.first_name} {testimonial.last_name}</title>
	<meta
		property="og:title"
		content="Testimonial | {testimonial.first_name} {testimonial.last_name}"
	/>
	<meta property="og:type" content="website" />
	<meta property="og:image" content={GetArtistImg(testimonial, 'hq', 'jpg')} />
</svelte:head>

<!-- START PICTURE AND METADATA -->
<div class=" flex flex-col items-center justify-center md:ml-40 md:flex-row">
	<div
		class="secBg flex h-fit w-full flex-col gap-2 py-2 text-center md:my-8 md:rounded-l-lg md:py-8 md:pl-12 md:text-left 2xl:ml-[14rem] 3xl:ml-[0rem] 3xl:w-fit 3xl:pr-[14rem]"
	>
		<p class=" text-3xl font-light text-cyan-400 md:text-3xl">Testimonial</p>
		<h1 class="pb-3 text-4xl font-thin text-white md:pb-0 md:text-7xl">
			{testimonial.first_name}
			{testimonial.last_name}
		</h1>
		<nav class=" mt-4 hidden w-fit flex-col gap-2 md:flex">
			<p class="text-[1.2rem] font-light text-cyan-400">Table of Contents</p>
			<!-- TODO: NEED TO ADD CONDITIONAL FOR IF THE ARTIST HAS THESE THINGS -->
			<a
				href="#video-player"
				class=" ml-2 flex flex-row gap-2 text-gray-300 underline-offset-4 hover:underline"
				><CornerDownRight class="-mt-[2px] text-cyan-400" />Video</a
			>
			<a
				href="#timeline"
				class=" ml-2 flex flex-row gap-2 text-gray-300 underline-offset-4 hover:underline"
				><CornerDownRight class="-mt-[2px] text-cyan-400" />Timeline of Services</a
			>
			<a
				href="#written-review"
				class=" ml-2 flex flex-row gap-2 text-gray-300 underline-offset-4 hover:underline"
				><CornerDownRight class="-mt-[2px] text-cyan-400" />The Full Story</a
			>
		</nav>
	</div>
	<img
		class="min-w-[18rem] md:min-w-[45rem] md:rounded-l-lg 3xl:min-w-[60rem] 3xl:rounded-r-lg"
		src={GetArtistImg(testimonial, 'hq', 'jpg')}
		alt={`${testimonial.first_name} ${testimonial.last_name}`}
	/>
</div>
<!-- START VIDEO PLAYER -->
<div id="video-player" class="mt-8 flex flex-col items-center md:mt-20">
	<span
		class=" secBg mx-auto flex w-full max-w-4xl translate-y-5 flex-row items-center justify-center pb-3 pt-2 text-center font-light text-gray-300 md:rounded-t-lg md:text-3xl"
	>
		<Clapperboard class="scale-75 stroke-[1px] md:scale-100" size={38} color="#22d3ee" />
	</span>
	<VideoPlayer
		youtubeVideoId={testimonial.video_review_id}
		title={`${testimonial.first_name} ${testimonial.last_name + " 's"} Review`}
	/>
</div>

<!-- START TIMELINE -->
<!-- TODO: Have a way to conditionally show this based on the services purchased -->
<div id="timeline" class=" mx-auto mt-8 w-full max-w-5xl md:mt-24">
	<h2
		class=" secBg w-full px-4 py-2 text-center text-3xl font-light text-cyan-400 md:w-fit md:rounded-t-lg md:text-left md:text-3xl"
	>
		Timeline of Services
	</h2>
	<div class="secBg flex flex-col px-10 pb-6 pt-4 md:rounded-b-lg">
		<ol class="relative border-s border-gray-700">
			<li class="mb-10 ms-10">
				<span
					class="absolute -start-5 flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 ring-8 ring-blue-900"
				>
					<Drum size={22} class=" text-cyan-400" />
				</span>
				<h3 class="mb-1 flex items-center text-lg font-semibold text-white">Custom Beat Created</h3>
				<time class="mb-2 block text-sm font-normal leading-none text-gray-500">Week 1</time>
				<div class="mt-4">
					<AudioPlayer
						{handlePlay}
						bind:audioElement={audioPlayers[0]}
						fileName={`${ASSETS_PATH}/${testimonial.first_name.toLowerCase() + '_' + testimonial.last_name.toLowerCase() + '/beat'}`}
					/>
				</div>
			</li>
			<li class="mb-10 ms-10">
				<span
					class="absolute -start-5 flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 ring-8 ring-blue-900"
				>
					<AudioWaveform size={22} class=" text-cyan-400" />
				</span>
				<h3 class="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
					Rough Mix - Raw Vocals
				</h3>
				<time class="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
					>Week 2</time
				>
				<div class="mt-4">
					<AudioPlayer
						{handlePlay}
						bind:audioElement={audioPlayers[1]}
						fileName={`${ASSETS_PATH}/${testimonial.first_name.toLowerCase() + '_' + testimonial.last_name.toLowerCase() + '/rough-mix'}`}
					/>
				</div>
			</li>
			<li class="mb-10 ms-10">
				<span
					class="absolute -start-5 flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 ring-8 ring-blue-900"
				>
					<FileAudio size={22} class=" text-cyan-400" />
				</span>
				<h3 class="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
					Final Product - Mixed and Mastered
				</h3>
				<time class="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
					>Week 3</time
				>
				<div class="mt-4">
					<AudioPlayer
						{handlePlay}
						bind:audioElement={audioPlayers[2]}
						fileName={`${ASSETS_PATH}/${testimonial.first_name.toLowerCase() + '_' + testimonial.last_name.toLowerCase() + '/final-mix'}`}
					/>
				</div>
			</li>
			<li class="mb-10 ms-10">
				<span
					class="absolute -start-5 flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 ring-8 ring-blue-900"
				>
					<Palette size={22} class=" text-cyan-400" />
				</span>
				<h3 class="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
					Cover Artwork Created
				</h3>
				<time class="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
					>Week 4</time
				>
				<img
					src={`${ASSETS_PATH}/${testimonial.first_name.toLowerCase() + '_' + testimonial.last_name.toLowerCase() + '/cover-art.jpeg'}`}
					alt={`Cover Art`}
					class="mt-4 w-[80%] rounded-lg md:w-[40%]"
				/>
			</li>
		</ol>
	</div>
</div>

<!-- START Written Review -->
<div id="written-review" class=" mx-auto mb-32 mt-8 w-full max-w-5xl md:mt-24">
	<h2
		class=" secBg w-full px-4 py-2 text-center text-3xl font-light text-cyan-400 md:w-fit md:rounded-t-lg md:text-left md:text-3xl"
	>
		The Full Story
	</h2>
	<div class="secBg flex flex-col gap-8 px-6 pb-6 pt-4 text-white md:rounded-b-lg md:px-4">
		<p>
			Before working with this incredible team, I faced numerous obstacles. I lacked the right
			infrastructure, a collaborative environment to refine my ideas, and the guidance necessary to
			elevate my artistry. The overwhelming complexity of managing every part of my production alone
			made it nearly impossible to focus on the fine details.
		</p>
		<p>
			Choosing this team was an easy decision. Their professionalism, clear communication, and
			organizational skills stood out, qualities that are rare in this industry. Plus, being based
			in Atlanta city synonymous with some of my favorite music was the cherry on top.
		</p>
		<p>
			From custom producing my beat to mixing, mastering, and even scheduling consistent meetings,
			they delivered everything I needed. They didn't just handle tasks—they empowered me with
			structure, attention to detail, and a streamlined process that boosted my confidence. They did
			not stop working on the project until I was 100% satisfied. Their ability to quickly turn
			around revisions you ask of them is unmatched. Collaborating with them was smooth and
			incredibly morale-boosting, helping me restore faith in the creative process after past
			disappointments with others.
		</p>
		<p>
			Even when it came to aligning the cover art with the timing of the project, the team
			demonstrated flexibility and found solutions that worked perfectly within the overall creative
			flow. Their ability to adapt and adjust priorities ensured everything came together
			seamlessly.
		</p>
		<p>
			For any artist considering their services, <strong
				>my advice is simple: work with them.</strong
			>
			Their natural talent and drive to help artists succeed make all the difference. They offer the
			structure and professionalism that so many independent artists overlook, along with free resources
			and constant communication. Their consistency in everything they do, from ads to newsletters, is
			unmatched.
			<strong>This team doesn't just create music; they build careers.</strong>
		</p>
	</div>
</div>

<style lang="postcss">
	.secBg {
		@apply bg-[#1018287a];
		backdrop-filter: blur(4px);
	}
</style>
