<script lang="ts">
	const logo_ar: number = 559 / 447;
	const logo_height: number = 130;
</script>

<div class="md:hidden flex flex-row items-center justify-center bg-white w-full sticky">
	<label for="my-drawer-4" class="md:hidden menu -translate-x-20">
		<img src="/hambergermenu.svg" alt="menu with more options" />
	</label>
	<img
		src="/main-logo-no-bg.png"
		class=" -translate-x-4"
		height={logo_height}
		width={Math.round(logo_height * logo_ar)}
		alt="RaggStarRecords Logo"
	/>
</div>
