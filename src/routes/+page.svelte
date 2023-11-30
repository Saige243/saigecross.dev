<script>
</script>

<svelte:head>
	<title>Saige Cross Portfolio</title>
	<meta name="description" content="Saige Cross Portfolio" />
</svelte:head>

<article class="scroller">
	<section class=" bg-blue-200">
		<h1 class="text-5xl">I'm Saige. 👋</h1>
		<h2 class="text-2xl">
			I'm a full-stack web developer with a passion for creating beautiful, functional websites and
			applications.
		</h2>
	</section>
	<section class="bg-blue-400">
		<h1 class="text-5xl pb-4">I'm Saige. 👋</h1>
		<h2 class="text-2xl">
			I'm a full-stack web developer with a passion for creating beautiful, functional websites and
			applications.
		</h2>
	</section>
</article>

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
