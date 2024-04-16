<script lang="ts">
	import YourNextSteps from '$lib/components/YourNextSteps.svelte';

	const rags_ar = 1344 / 2257;
	const rags_height = 2000;
	const rags_width = Math.round(rags_height * rags_ar);

	const date = new Date();
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
</script>

<svelte:head>
	<title>About Us | RAGGSTARRECORDS</title>
</svelte:head>
<div class="bg-white hidden md:flex flex-col items-center pt-20 pb-20">
	<div class="grid xl:grid-cols-2 grid-cols-1 gap-20 items-center mx-28">
		<span class="flex flex-col items-center">
			<h1 class="text-[2.50rem] leading-snug font-semibold text-darkGrey">
				Our goal is to help 100 artists reach 100,000 monthly listeners on Spotify
			</h1>
			<span class="flex flex-col gap-8 mt-8 text-lightGrey">
				<p>
					Hey, I'm Rags, founder of RaggStarRecords. I created this company in 2021 after I realized
					there was a problem with the music industry. A problem so big that I retired from my own
					artist career because of it.
				</p>
				<p>
					Everywhere I tried to get help to grow myself as an artist I would just get ripped off
					from one studio to another claiming they would get me sounding right just to deliver
					subpar quality mixes and awful customer service. I just got tired of seeing myself and
					other artists have to settle for studios that only wanted our money. It felt like they did
					not care about my career after I walked out of the studio.
				</p>
				<p>
					So, I decided to launch RaggStar Studios with the goal of being an artist's best friend in
					the music industry. What is lacking in the music business is accountability and time
					management. What we do is meet our artists' needs. Whether they need to book shows, get
					mixes and masters, cover arts, photography, videography, and content creation they can
					look to us. A one-stop production shop for an artist to succeed and walk out of the studio
					fulfilled and satisfied.
				</p>
				<p>
					Fast forward to today, we have worked with over 50 artists to help scale their careers,
					increasing their # of fans while increasing the overall quality of their artistry. Our
					artists come to us with little or no idea of how to run their careers because no one ever
					explains how to be an artist. Our job has been to educate these artists and get them
					started so they can continue to see their streams and careers grow on their own.
				</p>
				<p>
					Even better, we have created a process that will streamline the release of your projects
					to get you seeing a result in your career ASAP.
				</p>
				<p>
					Our goal is to help 100 artists reach 100,000 monthly listeners on Spotify, and we are
					going to do it without you having to go through years of shady business and people
					promising that they will put you in the music industry just like how I did. It is time for
					independent artists to take matters into their own hands and wield their own success from
					the ground up and we are here to help you every step of the way.
				</p>
				<p>
					If you have ANY questions about taking your career into your own hands, just book a call
					and I will be happy to chat with you!
				</p>
				<div class=" h-[2px] mt-4 opacity-75 bg-gray-200 w-full" />
			</span>
		</span>
		<img
			class=""
			height={rags_height}
			width={rags_width}
			src="/rags_bio.JPG"
			alt="Chief Go-Getter / Raghav Shyam"
		/>
	</div>
</div>

<div class="bg-white md:hidden flex flex-col items-center pt-10 pb-20">
	<div class="grid grid-cols-1 gap-4 items-center px-4">
		<img
			class=""
			height={rags_height}
			width={rags_width}
			src="/rags_bio.JPG"
			alt="Chief Go-Getter / Raghav Shyam"
		/>
		<div class=" h-[2px] my-8 opacity-75 bg-gray-200 w-full" />
		<span class="flex flex-col items-center px-2">
			<h1 class="md:text-[2.50rem] md:leading-snug text-[2rem] font-semibold text-darkGrey">
				Our goal is to help 100 artists reach 100,000 monthly listeners on Spotify
			</h1>
			<span class="flex flex-col gap-6 mt-6 text-lightGrey">
				<p>
					Hey, I'm Rags, founder of RaggStarRecords. I created this company in 2021 after I realized
					there was a problem with the music industry. A problem so big that I retired from my own
					artist career because of it.
				</p>
				<p>
					Everywhere I tried to get help to grow myself as an artist I would just get ripped off
					from one studio to another claiming they would get me sounding right just to deliver
					subpar quality mixes and awful customer service. I just got tired of seeing myself and
					other artists have to settle for studios that only wanted our money. It felt like they did
					not care about my career after I walked out of the studio.
				</p>
				<p>
					So, I decided to launch RaggStar Studios with the goal of being an artist's best friend in
					the music industry. What is lacking in the music business is accountability and time
					management. What we do is meet our artists' needs. Whether they need to book shows, get
					mixes and masters, cover arts, photography, videography, and content creation they can
					look to us. A one-stop production shop for an artist to succeed and walk out of the studio
					fulfilled and satisfied.
				</p>
				<p>
					Fast forward to today, we have worked with over 50 artists to help scale their careers,
					increasing their # of fans while increasing the overall quality of their artistry. Our
					artists come to us with little or no idea of how to run their careers because no one ever
					explains how to be an artist. Our job has been to educate these artists and get them
					started so they can continue to see their streams and careers grow on their own.
				</p>
				<p>
					Even better, we have created a process that will streamline the release of your projects
					to get you seeing a result in your career ASAP.
				</p>
				<p>
					Our goal is to help 100 artists reach 100,000 monthly listeners on Spotify, and we are
					going to do it without you having to go through years of shady business and people
					promising that they will put you in the music industry just like how I did. It is time for
					independent artists to take matters into their own hands and wield their own success from
					the ground up and we are here to help you every step of the way.
				</p>
				<p>
					If you have ANY questions about taking your career into your own hands, just book a call
					and I will be happy to chat with you!
				</p>
			</span>
		</span>
	</div>
</div>
<YourNextSteps />
