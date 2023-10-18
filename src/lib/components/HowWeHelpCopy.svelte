<script lang="ts">
	export let emoji: string;
	export let title: string;
	export let description: string;
</script>

<span id="SAVE + TIME + ENERGY" class="flex flex-col font-openSans md:max-w-[33rem]">
	<span class="flex flex-row gap-2 -translate-x-2 items-center">
		<p class=" text-4xl md:text-[3.5rem]">{emoji}</p>
		<h3 class=" text-darkGrey text-xl md:text-3xl font-extrabold">{title}</h3>
	</span>
	<p class=" text-midGrey mt-2 md:text-[18px] md:leading-7">{description}</p>
</span>
