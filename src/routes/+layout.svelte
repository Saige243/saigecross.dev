<script>
	import '../app.css';
	import Navbar from './Navbar.svelte';
</script>

<div class="px-16 md:px-48 xl:px-72">
	<Navbar />
	<slot />
</div>
