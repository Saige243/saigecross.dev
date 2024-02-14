<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import SpeedDial from '$lib/components/SpeedDial.svelte';

	import { onMount } from 'svelte';
	import { theme } from '$lib/theme';

	let loaded = false;
	let themeColor = '';

	onMount(() => {
		themeColor = $theme === 'light' ? '#C5DDDA' : '#024539';
		const metaTag = document.querySelector('meta[name="theme-color"]');
		if (metaTag) {
			metaTag.setAttribute('content', themeColor);
		}
	});

	$: themeColor = $theme === 'light' ? '#C5DDDA' : '#024539';
</script>

<div
	class="font-scp flex w-screen h-screen lg:px-30 2xl:px-48 text-text dark:text-textDark"
	style="background-color: {themeColor}"
>
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
