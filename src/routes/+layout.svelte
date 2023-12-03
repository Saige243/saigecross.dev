<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<div class="flex w-screen bg-blue-200 dark:bg-primary px lg:px-30 xl:px-40 2xl:px-48">
	<Navbar />
	<slot />
</div>

<style>
	:root {
		--navbar-width: 100px;
		overflow-y: hidden;
	}
	.scroller {
		height: 100vh;
		overflow-y: scroll;
		scroll-snap-type: y mandatory;
	}
	.scroller section {
		scroll-snap-align: start;
	}
</style>
