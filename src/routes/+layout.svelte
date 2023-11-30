<script>
	import '../app.css';
	import Navbar from './Navbar.svelte';
</script>

<div class="flex w-screen">
	<Navbar />
	<slot />
</div>
