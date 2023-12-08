<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<div class="flex w-screen bg-blue-200 dark:bg-primary lg:px-30 2xl:px-48">
	<Navbar />
	<slot />
</div>

<style>
	:root {
		--navbar-width: 100px;
		overflow-y: hidden;
	}
</style>
