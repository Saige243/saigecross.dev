<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import SpeedDial from '$lib/components/SpeedDial.svelte';

	import { theme } from '$lib/theme';

	$: {
		const currentTheme = $theme;

		const themeColor = currentTheme === 'light' ? 'rgb(191 219 254)' : '#2c3e50';
		const metaTag = document.querySelector('meta[name="theme-color"]');
		if (metaTag) {
			metaTag.setAttribute('content', themeColor);
		}
	}
</script>

<div class="flex w-screen h-screen bg-blue-200 dark:bg-primary lg:px-30 2xl:px-48">
	<Navbar />
	<SpeedDial />
	<slot />
</div>

<style>
	:root {
		--navbar-width: 100px;
		overflow-y: hidden;
	}
</style>
