<script>
	let darkModeEnabled = false;
</script>

<button
	class="toggle"
	on:click={() => {
		darkModeEnabled = !darkModeEnabled;
	}}
>
	<div>
		{#if !darkModeEnabled}
			<span class="outline outline-1 outline-white text-white px-2 py-1"> Dark Mode 🌙 </span>
		{:else}
			<span class="outline outline-1 outline-white text-white px-2 py-1"> Light Mode ☀️ </span>
		{/if}
	</div>
</button>
