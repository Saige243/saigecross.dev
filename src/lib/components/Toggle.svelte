<script>
	import { theme } from '$lib/theme';

	let isDarkMode = $theme === 'dark';

	function toggleTheme() {
		$theme = $theme === 'dark' ? 'light' : 'dark';
		window.document.body.classList.toggle('dark', $theme === 'dark');
	}
</script>

<div>
	<label class="relative inline-flex items-center cursor-pointer">
		<input type="checkbox" bind:checked={isDarkMode} class="sr-only peer" on:change={toggleTheme} />
		<div
			class="w-12 h-6 bg-seafoam peer-focus:outline-none rounded-full peer dark:bg-gray-900 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[3.5px] after:bg-scYellow after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-seafoam"
		>
			<div class="mb-px">
				<span class="ms-1 text-base text-gray-900 dark:text-gray-300">
					{#if isDarkMode}
						<span class="w-4 h-4 text-lg pr-2">🌞</span>
					{:else}
						<span class="w-4 h-4 text-lg pl-[22px]">🌚</span>
					{/if}
				</span>
			</div>
		</div>
	</label>
</div>
