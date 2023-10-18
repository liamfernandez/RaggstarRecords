<script lang="ts">
	export let reviewer: string;

	const ratings: Map<string, string> = new Map([
		[
			'Jakobe B',
			'Amazing all around experience, very comfortable atmosphere, amazing engineer all you could want'
		],
		[
			'Lex M',
			'Phenomenal studio and even better staff. Rags is a great studio manager, and Morgen is a top notch engineer!!!!'
		],
		[
			'Martir M',
			'Very professional setting, with top quality equipment and a great location. Rags is great to work with!'
		],
		['Morgen S', 'comfortable work environment with great perks and talented clientele']
	]);

	const imgMap: Map<string, string> = new Map([
		['Jakobe B', 'jakobe.png'],
		['Lex M', 'lex.png'],
		['Martir M', 'martir.png'],
		['Morgen S', 'morgen.png']
	]);
	const stars = [1, 2, 3, 4, 5];
</script>

<div class="flex flex-col items-start gap-4">
	<img src={`/ratings/${imgMap.get(reviewer)}`} alt={`reviewer ${reviewer} profile picture`} />
	<p class="text-xl font-semibold text-darkGrey">{reviewer}.</p>
	<p class="md:text-xl text-midGrey md:min-h-[12.5rem]">{ratings.get(reviewer)}</p>
	<span class=" h-[2px] w-[2rem] bg-gray-400 mb-4 mt-10" />
	<span class="flex flex-row gap-2">
		{#each stars as star}
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g clip-path="url(#clip0_643_11)">
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M12.0001 0.474854C11.6623 0.475003 11.3315 0.571117 11.0462 0.752002C10.761 0.932887 10.5329 1.1911 10.3887 1.49657L7.66642 6.99085C7.65922 7.00381 7.65236 7.01696 7.64585 7.03028C7.63265 7.03225 7.61951 7.03454 7.60642 7.03714L1.61156 7.92514C1.27158 7.95814 0.948237 8.08812 0.679999 8.29961C0.411762 8.51109 0.209924 8.79518 0.0984992 9.11808C-0.0129254 9.44098 -0.0292461 9.78909 0.051479 10.121C0.132204 10.4529 0.306577 10.7546 0.553851 10.9903L4.94242 15.2229L4.95271 15.2314C4.95891 15.2373 4.96357 15.2445 4.96626 15.2526C4.96895 15.2607 4.9696 15.2693 4.96814 15.2777V15.2846L3.92242 21.4011V21.4029C3.86502 21.7345 3.90175 22.0756 4.02843 22.3874C4.15511 22.6992 4.36668 22.9692 4.6391 23.1668C4.91153 23.3645 5.23391 23.4818 5.56963 23.5054C5.90536 23.529 6.24099 23.4581 6.53842 23.3006L11.9384 20.4463C11.9579 20.4378 11.9789 20.4334 12.0001 20.4334C12.0214 20.4334 12.0424 20.4378 12.0619 20.4463L17.4618 23.2989C17.7591 23.4574 18.095 23.5292 18.4311 23.5062C18.7672 23.4831 19.0901 23.3661 19.3629 23.1685C19.6358 22.9709 19.8476 22.7006 19.9743 22.3884C20.101 22.0762 20.1375 21.7347 20.0796 21.4029L19.0338 15.2829V15.2777C19.0304 15.2709 19.0321 15.2606 19.0338 15.2537C19.0364 15.2452 19.0411 15.2375 19.0476 15.2314L19.0578 15.2229L23.4447 10.9886C23.6914 10.7528 23.8653 10.4512 23.9458 10.1196C24.0262 9.78795 24.0097 9.4402 23.8983 9.11763C23.787 8.79507 23.5853 8.51124 23.3174 8.29986C23.0496 8.08848 22.7266 7.95842 22.387 7.92514L16.3939 7.03714C16.3808 7.03454 16.3676 7.03225 16.3544 7.03028C16.3479 7.01696 16.341 7.00381 16.3338 6.99085L13.6116 1.49657C13.4673 1.1911 13.2393 0.932887 12.954 0.752002C12.6687 0.571117 12.3379 0.475003 12.0001 0.474854Z"
						fill="#FFC000"
					/>
				</g>
				<defs>
					<clipPath id="clip0_643_11">
						<rect width="24" height="24" fill="white" />
					</clipPath>
				</defs>
			</svg>
		{/each}
	</span>
</div>
