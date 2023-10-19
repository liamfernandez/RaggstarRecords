<script lang="ts">
	import { fly } from 'svelte/transition';
	import { createForm } from 'svelte-forms-lib';
	import * as yup from 'yup';
	import { SendMessage } from '$lib/utils';
	import { elasticOut } from 'svelte/easing';

	let loading: boolean = false;
	let success = false;
	let failed = false;

	const { form, errors, state, handleChange, handleSubmit } = createForm({
		initialValues: {
			name: '',
			email: '',
			message: ''
		},
		validationSchema: yup.object().shape({
			name: yup.string().required(),
			email: yup.string().email().required(),
			message: yup.string().required().max(160, 'Message must be at most 160 characters')
		}),
		onSubmit: async (values) => {
			loading = true;
			const response = await SendMessage(values);
			if (response.status === 200) {
				loading = false;
				success = true;
			} else {
				loading = false;
				failed = true;
			}
		}
	});

	function closeAndClear() {
		$form.name = '';
		$form.email = '';
		$form.message = '';
	}
</script>

<dialog id="send-a-message" class="modal">
	<div class="modal-box flex flex-col items-center bg-white min-w-[70%]">
		<form method="dialog">
			<button
				on:click={closeAndClear}
				class="btn border-0 text-2xl bg-white btn-circle text-black hover:bg-gray-300 outline-none outline-0 absolute right-2 top-2"
				>✕</button
			>
		</form>
		<img
			src="./main-logo-no-bg.png"
			alt=""
			class="hidden md:block absolute left-2 top-2 h-[100px] inset-0 -z-10"
		/>
		<h2 class=" text-4xl font-bold text-primary">Contact Us</h2>
		<form
			on:submit={handleSubmit}
			class="flex flex-col justify-center items-center mt-10 w-[90%] md:w-[70%]"
		>
			<span class="w-full flex flex-row items-center justify-between">
				{#if $form.name.length > 0 || $errors.name}
					<label for="name" in:fly={{ duration: 1000, delay: 300 }} class="label self-start">
						<span class="label-text">Your Name</span>
					</label>
				{/if}
				{#if $errors.name}
					<p
						in:fly={{ duration: 750, x: -120, easing: elasticOut }}
						class=" text-red-400 text-[9px] md:text-[14px]"
					>
						{$errors.name}
					</p>
				{/if}
			</span>
			<input
				type="text"
				placeholder="Your Name"
				id="name"
				class="mb-4 focus:outline-tertiary border-gray-400 text-black input input-bordered w-full bg-white"
				on:change={handleChange}
				on:blur={handleChange}
				bind:value={$form.name}
			/>
			<span class="w-full flex flex-row items-center justify-between">
				{#if $form.email.length > 0 || $errors.email}
					<label for="email" in:fly={{ duration: 1000, delay: 300 }} class="label self-start">
						<span class="label-text">Your Email</span>
					</label>
				{/if}
				{#if $errors.email}
					<p
						in:fly={{ duration: 750, x: -120, easing: elasticOut }}
						class=" text-red-400 text-[9px] md:text-[14px]"
					>
						{$errors.email}
					</p>
				{/if}
			</span>
			<input
				type="email"
				placeholder="Your Email"
				id="email"
				class="mb-4 focus:outline-tertiary border-gray-400 text-black input input-bordered w-full bg-white"
				on:change={handleChange}
				on:blur={handleChange}
				bind:value={$form.email}
			/>
			<span class="w-full flex flex-row items-center justify-between">
				{#if $form.message.length > 0 || $errors.message}
					<label for="message" in:fly={{ duration: 1000, delay: 300 }} class="label self-start">
						<span class="label-text">Message</span>
					</label>
				{/if}
				{#if $errors.message}
					<p
						in:fly={{ duration: 750, x: -120, easing: elasticOut }}
						class=" text-red-400 text-[9px] md:text-[14px]"
					>
						{$errors.message}
					</p>
				{/if}
			</span>
			<textarea
				id="message"
				placeholder="Message"
				class="mb-4 focus:outline-tertiary border-gray-400 text-black text-[1rem] textarea textarea-bordered w-full bg-white"
				on:change={handleChange}
				on:blur={handleChange}
				bind:value={$form.message}
			/>
			{#if !loading && !success && !failed}
				<button
					type="submit"
					class=" transition bg-primary hover:bg-purple-900 w-full text-white py-4"
				>
					SEND MESSAGE
				</button>
			{:else if loading}
				<span class="loading loading-spinner loading-md bg-secondary text-secondary" />
			{:else if success}
				<p in:fly={{ duration: 750 }} class=" rounded-md py-4 px-10 bg-[#000000dc] text-green-400">
					We've received your message and will contact you via the email provided. Thank you!
				</p>
			{:else if failed}
				<p in:fly={{ duration: 750, x: -120, easing: elasticOut }} class=" text-red-500">
					Sorry, we couldn't complete your request at this time. Please try again later
				</p>
			{/if}
		</form>
	</div>
	<form method="dialog" class="modal-backdrop">
		<button on:click={closeAndClear}>close</button>
	</form>
</dialog>
