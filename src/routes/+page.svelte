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
	<section id="home" class="pt-6 md:pt-12 mb-40 xs:sm:mb-0">
		<Home />
	</section>
	<section id="projects" class="sm:pt-6 mb-32 sm:mb-0">
		<Projects />
	</section>
	<section id="about" class="mt-48 sm:pt-0">
		<About />
	</section>
</article>

<style>
	section {
		height: 100vh;
		width: calc(100% - var(--navbar-width));
	}
</style>
