<script>
	import Strings from '../../strings';
	import HeroSection from '../../lib/components/HeroSection.svelte';
	import HowWeHelpCopy from '../../lib/components/HowWeHelpCopy.svelte';
	import BookACall from '../../lib/components/BookACall.svelte';
	import PhasesSection from '../../lib/components/PhasesSection.svelte';
	import WhyHireProduction from '../../lib/components/WhyHireProduction.svelte';
	import YouShouldHireUs from '../../lib/components/YouShouldHireUs.svelte';
	import Rating from '../../lib/components/Rating.svelte';
	import PreviewArtist from '../../lib/components/PreviewArtist.svelte';
	import YourNextSteps from '$lib/components/YourNextSteps.svelte';
</script>

<svelte:head>
	<title>RaggStar Records</title>
</svelte:head>
<section class="" id="studio-picture+Intro">
	<HeroSection />
</section>
<section
	class="2xl:-translate-y-36 2xl:-mb-52 -translate-y-10 -mb-12 md:-translate-y-20 md:-mb-40"
	id="WAVE-BETWEEN-SECTIONS"
>
	<svg
		preserveAspectRatio="none"
		width="100%"
		height="auto"
		viewBox="0 0 1257 192"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g clip-path="url(#clip0_636_9)">
			<path
				d="M0 0L120 16C240 32 480 64 720 58.7C960 53 1200 11 1320 -10.7L1440 -32V192H1320C1200 192 960 192 720 192C480 192 240 192 120 192H0V0Z"
				fill="#8DCAEC"
			/>
		</g>
		<defs>
			<clipPath id="clip0_636_9">
				<rect width="1257" height="192" fill="white" />
			</clipPath>
		</defs>
	</svg>
</section>
<section id="what-we-do">
	<div class="flex flex-col items-center bg-secondary pb-36">
		<h2
			class="z-30 font-bold text-3xl max-w-[95%] md:text-5xl md:max-w-4xl md:leading-[4rem] font-lucida-regular text-center text-darkGrey"
		>
			How we help you FINALLY grow from zero to 10,000+ monthly listeners as an R&B artist
		</h2>
		<span class="h-[2px] bg-primary w-[80%] md:w-[70%] my-8 md:my-10" />
		<div
			class="flex flex-row md:gap-40 gap-16 items-start max-w-[85%] md:max-w-[100rem] mb-16 md:mb-28 flex-wrap"
		>
			<HowWeHelpCopy
				emoji={'🚧'}
				title={Strings.Remove_Roadblocks_Title}
				description={Strings.Remove_Roadblocks_Copy}
			/>
			<HowWeHelpCopy
				emoji={'🕰️'}
				title={Strings.Save_Time_Title}
				description={Strings.Save_Time_Copy}
			/>
		</div>
		<span class="max-w-[85%]">
			<HowWeHelpCopy
				emoji={'🏆'}
				title={Strings.Dreams_Come_True_Title}
				description={Strings.Dreams_Come_True_Copy}
			/>
		</span>
		<span class="mb-12" />
		<BookACall />
	</div>
</section>
<!-- CURVED TOP -->
<svg
	class=" -translate-y-[8.7rem]"
	viewBox="0 0 200 100"
	preserveAspectRatio="none"
	style="display: block; width: 100%; height: 140px;"
>
	<path d="M 0 100 Q 100 0 200 100" class=" fill-white" />
</svg>
<section id="our-process">
	<div class="flex flex-col -mt-20 max-w-[85%] md:max-w-[64rem] mx-auto pb-32">
		<h2
			class="z-30 md:text-5xl text-3xl font-bold md:leading-[4rem] font-lucida-regular text-center text-darkGrey"
		>
			The 3-Step Roadmap to Take Your Career from a 9-5 Employee to Full-Time Artist
		</h2>
		<span class="h-[2px] bg-primary w-full my-8 md:my-16" />
		<PhasesSection />
	</div>
</section>
<section id="WHY HIRE PRODUCTION TEAM?">
	<svg
		class=" -translate-y-[8.7rem]"
		viewBox="0 0 200 100"
		preserveAspectRatio="none"
		style="display: block; width: 100%; height: 140px;"
	>
		<path d="M 0 100 Q 100 0 200 100" class=" fill-tertiary" />
	</svg>
	<div class=" bg-tertiary 2xl:pb-80 pb-52 -mt-[8.8rem] flex flex-col items-center">
		<WhyHireProduction />
	</div>
</section>

<section id="WHY YOU SHOULD HIRE US">
	<svg
		class=" 2xl:-translate-y-[12rem] -translate-y-[8rem] -mb-[8.05rem]"
		width="100%"
		height="auto"
		viewBox="0 0 1389 102"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g clip-path="url(#clip0_641_2)">
			<path d="M695 7L1414.67 105.25H-24.6671L695 7Z" fill="#8DCAEC" />
		</g>
		<defs>
			<clipPath id="clip0_641_2">
				<rect width="1389" height="102" fill="white" />
			</clipPath>
		</defs>
	</svg>
	<YouShouldHireUs />
</section>

<section id="RATINGS + SEE WHAT OUR CLIENTS ARE SAYING + PREVIEW MUSIC">
	<svg
		class=" md:-translate-y-[23rem] md:-mb-[29.1rem] -translate-y-[13rem] -mb-[14.1rem]"
		xmlns="http://www.w3.org/2000/svg"
		width="100%"
		height="auto"
		viewBox="0 0 1440 320"
	>
		<path
			fill="white"
			fill-opacity="1"
			d="M0,192L80,181.3C160,171,320,149,480,160C640,171,800,213,960,213.3C1120,213,1280,171,1360,149.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
		/>
	</svg>
	<div class=" bg-white md:pt-32 pt-10 flex flex-col items-center">
		<p class="text-center text-xl md:text-[1.7rem] text-primary pb-4">Don't Believe us?</p>
		<p class="text-center text-darkGrey font-semibold text-3xl md:text-5xl">
			See What Our Clients Are Saying
		</p>
		<div class="grid sm:grid-cols-1 md:grid-cols-4 gap-28 max-w-[80%] md:mx-48 mt-20">
			<Rating reviewer={'Jakobe B'} />
			<Rating reviewer={'Lex M'} />
			<Rating reviewer={'Martir M'} />
			<Rating reviewer={'Morgen S'} />
		</div>

		<!-- <section id="PLAYABLE SONGS + PREVIEW MIXED & MASTERED WORK"> -->
		<p class=" text-lightGrey text-lg md:text-2xl pt-20 md:pt-32 tracking-widest">OUR WORK</p>
		<h2 class=" text-darkGrey text-center text-3xl md:text-6xl pt-4 md:pt-10">
			Check Out Some of My Favorite Projects
		</h2>
		<span class="h-[2px] bg-primary max-w-[70%] md:max-w-xl w-full my-10" />
		<div class="grid grid-cols-1 md:grid-cols-3 gap-20 mb-20">
			<PreviewArtist artist={'Vernell'} />
			<PreviewArtist artist={'Tay'} />
			<PreviewArtist artist={'Yana'} />
		</div>
	</div>
	<YourNextSteps />
</section>
