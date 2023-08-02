<script lang="ts">
	import '$lib/styles/app.css';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	const tabs = ['Home', 'Services', 'Discography', 'About Us'];
	const slugs: Map<string, string> = new Map([
		[tabs[0], '/'],
		[tabs[1], '/services'],
		[tabs[2], '/discography'],
		[tabs[3], '/about']
	]);

	function RefreshTabs(tabClicked: string) {
		tabs.forEach((tabName) => {
			const tabElement = document.getElementById(`tab-${tabName}`);
			if (tabName !== tabClicked && tabElement?.classList.contains('activeTab')) {
				console.log(`\n activeTab is enabled for [${tabName}-tab] | disabling now`);
				tabElement.classList.toggle('wait-for-hov');
				tabElement.classList.toggle('activeTab');
			} else if (tabName === tabClicked && tabElement) {
				console.log(`\n Trying to enable activeTab for [${tabName}]`);
				tabElement.classList.toggle('wait-for-hov');
				tabElement.classList.toggle('activeTab');
			}
		});
	}

	onMount(() => {
		tabs.forEach((tabName) => {
			if (slugs.get(tabName) === $page.url.pathname) {
				RefreshTabs(tabName);
			}
		});
	});
</script>

<svelte:head>
	<link rel="icon" type="image/svg+xml" href="/main-logo-no-bg.png" />
</svelte:head>
<body class="drawer drawer-end md:block">
	<input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		<nav>
			<!-- MOBILE NAV ABOVE -->
			<div class="bg-[white] flex justify-between items-center pb-1 md:pt-2 pl-1 pr-10 md:px-8">
				<img class="md:h-28 h-20" alt="main raggstarrecords logo" src="/main-logo-raggstar.jpg" />
				<label for="my-drawer-4" class="md:hidden">
					<img src="/hambergermenu.svg" alt="menu with more options" />
				</label>
				<span class="hidden md:flex md:gap-12">
					{#each tabs as tabName}
						<button
							on:click={() => RefreshTabs(tabName)}
							id={`tab-${tabName}`}
							class="wait-for-hov"
						>
							<a
								href={slugs.get(tabName)}
								class="text-black text-[8px] md:text-base bg-white font-Druk tracking-wide rounded-xl md:py-2 py-[1px] px-[1px] md:px-2"
							>
								{tabName.toUpperCase()}
							</a>
						</button>
					{/each}
				</span>
			</div>
			<hr />
		</nav>
		<slot />
		<hr />
		<footer>
			<div
				class="flex bg-white justify-center flex-col pt-4 md:pt-8 pb-4 md:pb-6 gap-4 md:gap-6 items-center"
			>
				<span class=" flex md:gap-4 gap-8 flex-row">
					<a href="https://www.instagram.com/raggstarrecords/">
						<img src="/socials/IG.svg" alt="Instagram" class="h-[25px]" />
					</a>
					<a href="https://www.tiktok.com/@raggstarrecords">
						<img src="/socials/TikTok.svg" alt="TikTok" class="h-[25px]" />
					</a>
					<a href="https://www.youtube.com/@raggstarrecords3739">
						<img src="/socials/YouTube.svg" alt="YouTube" class="h-[25px]" />
					</a>
				</span>
				<span class="md:text-xs text-[10px] text-black">
					© 2023 RAGGSTARRECORDS | Atlanta, GA
				</span>
			</div>
		</footer>
	</div>
	<div class="drawer-side">
		<label for="my-drawer-4" class="drawer-overlay" />
		<ul class="flex flex-col gap-4 pt-10 w-[47%] h-full bg-base-200">
			<label
				for="my-drawer-4"
				class={`btn btn-circle self-end bg-white scale-[0.72] mr-7 -mt-5 text-lg text-black`}
				>X</label
			>
			<!-- Sidebar content here -->
			{#each tabs as tabName}
				<li>
					<a class="pl-6 font-Druk text-sm text-white" href={slugs.get(tabName)}
						>{tabName.toUpperCase()}</a
					>
				</li>
			{/each}
		</ul>
	</div>
</body>

<style>
	.activeTab {
		@apply bg-gradient-to-bl from-[#1c82e1] to-emerald-400 p-[2px] rounded-xl flex justify-center;
	}

	.wait-for-hov {
		background: linear-gradient(to top right, rgb(52 211 153), rgb(28, 130, 225)) no-repeat
			calc(200% - var(--i, 0) * 100%) 100% / 200% calc(100% * var(--i, 0) + 0.08em);
		transition: 0.2s calc(var(--i, 0) * 0.2s),
			background-position 0.2s calc(0.2s - calc(var(--i, 0) * 0.2s));
		padding: 2px;
		border-radius: 0.75rem;
		display: flex;
		justify-content: center;
	}

	.wait-for-hov:hover {
		--i: 1;
	}
</style>
