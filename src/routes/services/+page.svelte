<script lang="ts">
	import { goto } from '$app/navigation';
	import { servicesMap } from '$lib/strings';

	const serviceHeaders: string[] = [...servicesMap.keys()];

	function getAligment(index: number): string {
		return index % 2 === 0 ? 'align-self: flex-start;' : 'align-self: flex-end;';
	}
</script>

<svelte:head>
	<title>Services | RAGGSTARRECORDS</title>
</svelte:head>
<div class="bg-[#262626]">
	<h1 class=" text-center text-gray-200 font-[Druk] pt-12 md:pt-20 pb-10 text-3xl md:text-5xl">
		SERVICES
	</h1>
	<span class={`flex flex-col md:gap-2 gap-6 items-center mx-4 md:mx-24 lg:mx-72 pb-10`}>
		<button
			on:click={() => {
				goto('https://booking.raggstarrecords.com');
			}}
			class=" bg-gradient-to-tr from-[#1c82e1] via-emerald-400 to-[#1c82e1] text-white font-Futura text-2xl px-4 py-1 rounded-2xl"
			>Book a Session Today</button
		>
		{#each serviceHeaders as header, index}
			<div class="self-center md:w-5/12" style={getAligment(index)}>
				<h2
					class="font-Druk md:text-2xl bg-gradient-to-r from-sky-500 to-green-600 bg-clip-text text-transparent text-xl"
				>
					{header.toUpperCase()}
				</h2>
				<p class="text-white">{servicesMap.get(header)}</p>
			</div>
		{/each}
		<button
			on:click={() => {
				goto('https://booking.raggstarrecords.com');
			}}
			class="my-0 md:my-6 bg-gradient-to-tr from-[#1c82e1] via-emerald-400 to-[#1c82e1] text-white font-Futura text-2xl p-2 rounded-2xl"
			style="box-shadow: 0 5px 10px 0 rgba(0,0,0,1);">Book a Session Today</button
		>
	</span>
</div>
