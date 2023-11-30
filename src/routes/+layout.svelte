<script lang="ts">
	import '../app.css';
	import Navbar from './Navbar.svelte';
</script>

<div class="flex w-screen">
	<Navbar />
	<slot />
</div>

<style>
	section {
		height: 100vh;
		width: 100vw;
	}
	.scroller {
		height: 100vh; /* Set the height to the viewport height */
		overflow-y: scroll;
		scroll-snap-type: y mandatory;
	}
	.scroller section {
		scroll-snap-align: start;
	}
</style>
