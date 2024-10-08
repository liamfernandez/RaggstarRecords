<script lang="ts">
	import { fly } from 'svelte/transition';
	import { modalStore } from '$lib/utils';

	// PROPS
	export let headerText: string = 'Modal Header';
	// export let width: 'full' | 'wide' | 'medium' | 'narrow' = 'medium';
	export let popupElm: HTMLDialogElement | undefined = undefined;
	export let modalId: string;

	// const widthClasses = {
	// 	full: 'w-full',
	// 	wide: 'w-4/5',
	// 	medium: 'w-3/5',
	// 	narrow: 'w-2/5'
	// };

	export function closeModal() {
		// const parentDialog = document.getElementById(modalId) as HTMLDialogElement;
		// parentDialog.close();
		popupElm?.close();

		if ($modalStore.dependentModal) {
			const dialogElm = document.getElementById($modalStore.dependentModal) as HTMLDialogElement;
			if (dialogElm) {
				dialogElm.showModal();
			}
			modalStore.update((store) => {
				store.dependentModal = undefined;
				return store;
			});

			return;
		}

		if ($modalStore.dependantAction) {
			$modalStore.dependantAction();
			modalStore.update((store) => {
				store.dependantAction = undefined;
				return store;
			});
			return;
		}
	}
</script>

<dialog id={modalId} class="modal" bind:this={popupElm} transition:fly={{ y: -100, duration: 500 }}>
	<div
		class={`bg-white modal-box md:w-3/5 w-11/12  flex flex-col items-center max-w-full max-h-[80vh] overflow-auto`}
	>
		<div class="flex justify-center p-2 md:p-4 border-b w-full">
			<h2 class="text-primary text-center text-xl md:text-3xl font-semibold">{headerText}</h2>
			<button
				on:click={closeModal}
				class="btn border-0 text-2xl bg-white btn-circle text-black hover:bg-red-600 hover:text-white outline-none outline-0 absolute right-4 top-2"
				>✕</button
			>
			<!-- <button
				on:click={closeModal}
				class="btn border-0 bg-white btn-circle text-black hover:bg-gray-300 outline-none outline-0"
			>
				<svg
					class="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button> -->
		</div>
		<div class="p-4">
			<slot />
		</div>
		{#if true}
			<button
				on:click={closeModal}
				class="mt-4 px-6 py-2 w-[40%] text-center md:text-base text-xs bg-black text-white rounded-md transition-colors duration-300 hover:bg-white hover:text-green-800 border border-black"
			>
				I Acknowledge
			</button>
		{/if}
	</div>

	<form method="dialog" class="modal-backdrop">
		<button on:click={closeModal}>close</button>
	</form>
</dialog>
