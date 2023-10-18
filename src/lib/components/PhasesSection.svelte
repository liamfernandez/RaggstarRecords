<script lang="ts">
	import IndividualPhase from './IndividualPhase.svelte';
</script>

<IndividualPhase phaseNumber={1}>
	<li class=" flex flex-row text-lightGrey">
		Dates and times for your studio sessions that fit into your busy schedule
	</li>
	<li class="flex flex-row items-center text-lightGrey">
		Content ideas and schedule of posting dates and times
	</li>
	<li class="flex flex-row text-lightGrey">
		A clear vision of who you are as an artist and insight into who you could become
	</li>
	<li class="flex flex-row items-center text-lightGrey">
		Photography and videography dates and times
	</li>
</IndividualPhase>
<div class=" flex flex-col my-12 items-center">
	<span class="h-[2px] bg-primary max-w-xl w-full" />
</div>
<IndividualPhase phaseNumber={2}>
	<li class=" flex flex-row text-lightGrey">
		An exclusive song that you will be replaying in the car day after day because you can't believe
		you sound that good
	</li>
	<li class="flex flex-row text-lightGrey">
		Photos from you in the studio that make your friends and family think you're famous already!
	</li>
	<li class="flex flex-row text-lightGrey">
		Content that is ready to be posted and multiply your following!
	</li>
	<li class="flex flex-row text-lightGrey">
		A comfortable, safe space that is clean and conducive to creating and expressing yourself
	</li>
</IndividualPhase>
<div class=" flex flex-col my-12 items-center">
	<span class="h-[2px] bg-primary max-w-xl w-full" />
</div>
<IndividualPhase phaseNumber={3}>
	<li class=" flex text-lightGrey">
		A release plan and content schedule to promote your record to your audience to keep them engaged
		in your record while adding replay value to the song.
	</li>
	<li class="flex flex-row text-lightGrey">
		A monthly performance report of how your record is doing with respect to streaming #'s and
		engagement so we know how your growth is going. This gives us insight to see if we need to
		change things up or stay the course so you get the most amount of listener growth for the least
		amount of work!
	</li>
	<li class="flex text-lightGrey">
		Over 25% increase in your followers and listeners across all social media platforms and Digital
		Streaming Platforms
	</li>
</IndividualPhase>

<style>
	li::before {
		@apply pr-8;
		content: '•'; /* Unicode character for a bullet point */
		display: inline-block;
		width: 1em; /* Width to ensure spacing is consistent */
		margin-left: 0.3em; /* Pull the bullet point into position */
		margin-right: -0em; /* Spacing after the bullet point */
		font-size: 1.8em;
		padding-bottom: 4px;

		color: black;
	}
</style>
