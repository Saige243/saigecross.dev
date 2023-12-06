<script lang="ts">
	import Home from '$lib/components/Home.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import About from '$lib/components/About.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import { onMount } from 'svelte';
	import { scrolledSection } from '$lib/stores';

	let scroller: HTMLElement;

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const sectionId = entry.target.id;
						scrolledSection.set(sectionId);
					}
				});
			},
			{ threshold: 1 }
		);

		document.querySelectorAll('section').forEach((section) => {
			observer.observe(section);
		});

		return () => observer.disconnect();
	});
</script>

<svelte:head>
	<title>I'm Saige 👋</title>
	<meta name="description" content="saigecross.dev" />
</svelte:head>

<article bind:this={scroller} class="scroller">
	<section id="home" class="py-12">
		<Home />
	</section>
	<section id="projects" class="py-12">
		<Projects />
	</section>
	<section id="about" class="py-12">
		<About />
	</section>
	<!-- <section id="contact" class="py-12">
		<Contact />
	</section> -->
</article>

<style>
	section {
		height: 100vh;
		width: calc(100% - var(--navbar-width));
	}
</style>
