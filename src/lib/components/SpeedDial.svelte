<script lang="ts">
	import { scrolledSection } from '$lib/stores';

	let isOpen = false;

	const handleToggle = () => {
		isOpen = !isOpen;
	};

	const handleClick = (id: string) => {
		scrolledSection.set(id);
		const el = document.getElementById(id);
		el?.scrollIntoView({ behavior: 'smooth' });
		isOpen = false;
	};
</script>

<div class="absolute sm:hidden bottom-6 right-4 z-10">
	<button
		id="click"
		class="p-3 bg-blue-400 rounded-full transform transition-transform ease-in-out duration-300"
		on:click={handleToggle}
		style={`transform: rotate(${isOpen ? '180deg' : '0'})`}
	>
		<svg
			class="w-6 h-6 text-gray-800 dark:text-white"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 10 14"
		>
			<path
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M5 1v12m0 0 4-4m-4 4L1 9"
			/>
		</svg>
	</button>
</div>
{#if isOpen}
	<div class="absolute bottom-20 right-4 z-10 space-y-1">
		<div class="flex flex-col rounded-full">
			<button id="click" class="p-3 bg-white rounded-full" on:click={() => handleClick('home')}
				><svg
					class="w-6 h-6 text-gray-800 dark:text-white"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path
						d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"
					/>
				</svg>
			</button>
		</div>
		<div>
			<button id="click" class="p-3 bg-white rounded-full" on:click={() => handleClick('projects')}
				><svg
					class="w-6 h-6 text-gray-800 dark:text-white"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 16"
				>
					<path
						d="M19 0H1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1ZM2 6v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6H2Zm11 3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0h2a1 1 0 0 1 2 0v1Z"
					/>
				</svg>
			</button>
		</div>
		<div>
			<button id="click" class="p-3 bg-white rounded-full" on:click={() => handleClick('about')}
				><svg
					class="w-6 h-6 text-gray-800 dark:text-white"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 14 18"
				>
					<path
						d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"
					/>
				</svg>
			</button>
		</div>
	</div>
{/if}
