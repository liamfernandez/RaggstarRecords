<script>
	import YourNextSteps from '$lib/components/YourNextSteps.svelte';
	import Question from '$lib/icons/Question.svelte';
</script>

<svelte:head>
	<title>Frequently Asked Questions & Answers | RAGGSTARRECORDS</title>
</svelte:head>
<div class=" bg-primary flex flex-col items-center">
	<h1
		class=" py-10 md:mr-32 md:px-0 px-8 text-white font-bold text-center md:text-left text-4xl md:text-6xl"
	>
		Frequently Asked Questions
	</h1>
</div>
<div class="bg-white flex flex-col gap-12 items-center mt-10 pb-20">
	<div class="flex flex-col items-start max-w-[90%] md:max-w-2xl">
		<span class="flex flex-row mb-3 items-center gap-4">
			<Question size={24} />
			<h3 class="text-2xl text-darkGrey font-semibold">How much do you charge?</h3>
		</span>
		<p>
			Every artist is 1 of 1, so the rates are dependent on the needs of each artist. Our #1 goal is
			to deliver everything the artist needs to grow and succeed, so if we do not think we can make
			that happen for you then we will not accept your money.
		</p>
	</div>

	<div class="flex flex-col items-start max-w-[90%] md:max-w-2xl">
		<span class="flex flex-row mb-3 items-center gap-4">
			<Question size={24} />
			<h3 class="text-2xl text-darkGrey font-semibold">
				How long will it take to see a growth in my fanbase?
			</h3>
		</span>
		<p>
			It all depends on how quickly an artist can get ready to release their music. If it takes one
			month for you to finish your record and also roll out the promotion, you will see a change
			over the next month after your project releases. Our turnaround times on deliverables are
			based on when you need to release. If you need to release a song by next week then we will
			make it happen!
		</p>
	</div>

	<div class="flex flex-col items-start max-w-[90%] md:max-w-2xl">
		<span class="flex flex-row mb-3 items-center gap-4">
			<Question size={24} />
			<h3 class="text-2xl text-darkGrey font-semibold">
				Is the music industry too saturated? I heard 60,000 new songs get uploaded to Spotify every
				day
			</h3>
		</span>
		<p>
			The music industry and artists are evolving. Yes, there is a lot of music that gets released.
			Millions of songs go unplayed every day because artists are not properly marketing and
			promoting their releases correctly. Plus, let's be real, most of the music is not good because
			they are being uploaded by artists who record in their bedroom closet and are not serious
			about their career. There are a lot more listeners than there are artists, we help you get
			your music sounding great and consistently played into the ears of your target audience!
		</p>
	</div>

	<div class="flex flex-col items-start max-w-[90%] md:max-w-2xl">
		<span class="flex flex-row mb-3 items-center gap-4">
			<Question size={24} />
			<h3 class="text-2xl text-darkGrey font-semibold">
				I do not like my voice. Do I need to be a professional singer to record?
			</h3>
		</span>
		<p>
			Fun fact: Every major artist hated their voice the first time they heard themselves in their
			headphones. Getting used to hearing your voice out loud or while your recording is something
			every artist has had to go through. Most artists who are going viral today have never had
			vocal lessons or a professional vocal coach. If you are serious about becoming an artist, odds
			are you sound pretty good on the mic and we are only going to make you sound better!
		</p>
	</div>

	<div class="flex flex-col items-start max-w-[90%] md:max-w-2xl">
		<span class="flex flex-row mb-3 items-center gap-4">
			<Question size={24} />
			<h3 class="text-2xl text-darkGrey font-semibold">
				How will I fit recording and mixing sessions into my busy schedule?
			</h3>
		</span>
		<p>
			We work with you to find the best time in your schedule to focus on recording your music and
			planning your release. Other than when we need to shoot videos or photography for you,
			everything else can be handled without your presence. All while you give feedback on our work
			or anything you find that needs to be changed.
		</p>
	</div>
</div>
<div class="text-center">
	<YourNextSteps />
</div>

<style lang="">
	p {
		@apply text-lightGrey;
	}
</style>
