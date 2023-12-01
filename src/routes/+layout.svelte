<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import { onMount } from 'svelte';
</script>

<div class="flex w-screen bg-primary">
	<Navbar />
	<div class="content">
		<slot />
	</div>
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

	.content {
		flex: 1;
		width: calc(100% - var(--navbar-width));
	}
</style>
