<script lang="ts">
	import Home from '$lib/components/Home.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Resume from '$lib/components/Resume.svelte';
	import About from '$lib/components/About.svelte';
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
						const el = document.getElementById(sectionId);
						el?.scrollIntoView({ behavior: 'smooth' });
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

<article bind:this={scroller} class="scroller h-screen">
	<section id="home" class="mb-40 xs:sm:mb-0">
		<Home />
	</section>
	<section id="projects" class="mb-32 sm:mb-0">
		<Projects />
	</section>
	<section id="resume" class="mt-48 h-fit sm:pt-0">
		<Resume />
	</section>
	<section id="about" class="sm:pt-0">
		<About />
	</section>
</article>

<style>
	section {
		/* height: 100%; */
		width: calc(100% - var(--navbar-width));
	}
</style>
