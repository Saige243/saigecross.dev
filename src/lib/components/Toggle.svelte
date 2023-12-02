<script>
	import { theme } from '$lib/theme';
	import Moon from '$lib/assets/moon.svg';
	import Sun from '$lib/assets/sun.svg';

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
			class="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer dark:bg-gray-900 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-900"
		></div>
		<span class="ms-1 text-sm font-medium text-gray-900 dark:text-gray-300">
			{#if isDarkMode}
				<img src={Sun} alt="sun" class="w-4 h-4" />
			{/if}
			{#if !isDarkMode}
				<img src={Moon} alt="moon" class="w-4 h-4" />
			{/if}
		</span>
	</label>
</div>
