<script lang="ts">
	import { writable } from 'svelte/store';
	import '../app.css';
	import Navbar from './Navbar.svelte';
	import { setContext } from 'svelte';

	const currentPage = writable('/');
	setContext('currentPage', {
		subscribe: currentPage.subscribe,
		refresh() {
			currentPage.set($currentPage);
		}
	});

	function scrollToSection($currentPage: string) {
		const el = document.getElementById($currentPage);
		el?.scrollIntoView({ behavior: 'smooth' });
	}

	scrollToSection('/');
	console.log('currentPage', $currentPage);
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
