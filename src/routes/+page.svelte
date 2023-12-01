<script lang="ts">
	import Home from '$lib/components/Home.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import About from '$lib/components/About.svelte';
	import Contact from '$lib/components/Contact.svelte';
</script>

<svelte:head>
	<title>I'm Saige 👋</title>
	<meta name="description" content="saigecross.dev" />
</svelte:head>

<article class="scroller">
	<section id="home" class="py-16">
		<Home />
	</section>
	<section id="projects" class="py-16">
		<Projects />
	</section>
	<section id="about" class="py-16">
		<About />
	</section>
	<section id="contact" class="py-16">
		<Contact />
	</section>
</article>

<style>
	section {
		height: 100vh;
		width: 90vw;
	}
</style>
