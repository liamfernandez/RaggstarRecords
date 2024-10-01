<script lang="ts">
	import PopupBase from './PopupBase.svelte';

	const MODAL_ID = 'policies-popup';

	export let popupElm: HTMLDialogElement | undefined = undefined;
	export let dependentModal: string;

	function acknowledge() {
		const dialogElm = document.getElementById(dependentModal) as HTMLDialogElement;
	}
</script>

<PopupBase
	{dependentModal}
	{popupElm}
	modalId={MODAL_ID}
	headerText="Please take a moment to review our policies"
>
	<div class="flex flex-col items-center">
		<h2 class=" text-gray-700 text-center">
			By booking a session at RaggStar Records, you agree to all of the following studio policies.
		</h2>
		<span class="mt-4">
			<a
				href="/RR-Policies-2024-1.pdf"
				target="_blank"
				rel="noopener noreferrer"
				class="flex flex-row items-center bg-white text-black border-2 border-black px-4 py-2 rounded transition-colors duration-300 hover:bg-black hover:text-white group"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5 mr-2"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
					/>
				</svg>
				Policies PDF
			</a>
		</span>
	</div>
</PopupBase>
