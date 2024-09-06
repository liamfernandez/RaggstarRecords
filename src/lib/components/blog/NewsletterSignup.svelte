<script lang="ts">
	import { createForm } from 'svelte-forms-lib';
	import { fly } from 'svelte/transition';
	import { EmailNewsletterCapture } from '$lib/utils';
	import * as yup from 'yup';
	import NeonEmailInput from './NeonEmailInput.svelte';
	import { elasticOut } from 'svelte/easing';

	let loading: boolean = false;
	let success = false;
	let failed = false;

	const { form, errors, state, handleChange, handleSubmit } = createForm({
		initialValues: {
			email: ''
		},
		validationSchema: yup.object().shape({
			email: yup.string().email().required('Email is not formatted correctly')
		}),
		onSubmit: async (values) => {
			console.log('It is submitted');
			loading = true;
			const response = await EmailNewsletterCapture(values);
			if (response.status === 200) {
				loading = false;
				success = true;
			} else {
				loading = false;
				failed = true;
			}
		}
	});
</script>

<div class="max-w-[60rem] mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
	<div
		class="px-8 md:px-12 py-4 md:py-4 flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0 md:space-x-2"
	>
		<div class="text-center">
			<h2 class="text-3xl md:text-3xl font-bold text-gray-900 leading-tight">
				Expert Tips Delivered Weekly
			</h2>
			<p class="mt-1 text-lg text-gray-600">Be In The Know</p>
		</div>
		<form on:submit={handleSubmit} class="w-full md:w-auto">
			<div class="flex flex-col sm:flex-row gap-4 items-center">
				<NeonEmailInput {form} />
				<button
					on:click={handleSubmit}
					class="w-full sm:w-auto px-6 py-2 bg-black text-white font-semibold rounded-lg hover:bg-[#6b0080] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
				>
					Join the Club
				</button>
			</div>
			<div class="">
				{#if $errors.email}
					<p
						in:fly={{ duration: 750, x: -120, easing: elasticOut }}
						class=" text-red-400 text-[9px] md:text-[14px]"
					>
						{$errors.email}
					</p>
				{/if}
			</div>
		</form>
	</div>
</div>
