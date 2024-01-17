<script lang="ts">
	import { scrolledSection } from '$lib/stores';

	let isOpen = false;

	import { theme } from '$lib/theme';

	function toggleTheme() {
		$theme = $theme === 'dark' ? 'light' : 'dark';
		window.document.body.classList.toggle('dark', $theme === 'dark');
		isOpen = false;
	}

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
			<button id="click" class="p-3 bg-white dark:bg-gray-400 rounded-full" on:click={toggleTheme}>
				{#if $theme === 'dark'}
					<svg
						class="w-6 h-6 text-gray-800 dark:text-white"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path
							d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"
						/>
					</svg>
				{:else}
					<svg
						class="w-6 h-6 text-gray-800 dark:text-white"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 18 20"
					>
						<path
							d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"
						/>
					</svg>
				{/if}
			</button>
		</div>
		<div class="flex flex-col rounded-full">
			<button
				id="click"
				class="p-3 bg-white dark:bg-gray-400 rounded-full"
				on:click={() => handleClick('home')}
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
			<button
				id="click"
				class="p-3 bg-white dark:bg-gray-400 rounded-full"
				on:click={() => handleClick('projects')}
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
			<button
				id="click"
				class="p-3 bg-white dark:bg-gray-400 rounded-full"
				on:click={() => handleClick('resume')}
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
					<path d="M16 7V5a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v2"></path>
					<line x1="12" y1="12" x2="12" y2="12"></line>
				</svg>
			</button>
		</div>
		<div>
			<button
				id="click"
				class="p-3 bg-white dark:bg-gray-400 rounded-full"
				on:click={() => handleClick('about')}
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
