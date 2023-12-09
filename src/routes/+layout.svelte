<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import SpeedDial from '$lib/components/SpeedDial.svelte';
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
