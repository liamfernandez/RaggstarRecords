<script lang="ts">
	export let artist: 'Vernell' | 'Yana' | 'Tay';
</script>

<div class="flex flex-col w-[360px]">
	<img
		src="/images/{artist}.jpeg"
		class=" object-cover w-[360px] h-[325px]"
		alt="beautiful picture of {artist}"
	/>
	<span class="w-full bg-[#000]">
		<audio controls class="w-full">
			<source src="/snippets/{artist.toLowerCase()}.mp3" type="audio/mpeg" />
		</audio>
	</span>
	<h3 class="text-3xl text-darkGrey mt-4">{artist}</h3>
	<p class="text-lg mt-2 text-lightGrey max-w-xs">Recorded, Mixed, & Mastered</p>
</div>
