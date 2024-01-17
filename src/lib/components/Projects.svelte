<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { projectData } from '../data/project-data';
	import Modal from '$lib/components/Modal.svelte';

	let showModal = false;
	let projectContent: string;

	function handleModalClick(title: string) {
		projectContent = title;

		showModal = true;
	}
</script>

<div class="flex flex-col w-screen md:w-full h-screen pt-16 px-4 sm:px-0">
	<div class="text-center lg:text-left lg:flex md:flex-col pb-4 lg:px-20">
		<h1
			class="pb-2 sm:pb-0 font-extrabold tracking-tight leading-none text-4xl lg:text-5xl xl:text-5xl text-scYellow"
		>
			Projects
		</h1>
		<h2
			class="md:flex text-2xl font-extrabold tracking-tight pt-2 leading-none text-text dark:text-textDark md:text-3xl"
		>
			Stuff I've built.
		</h2>
	</div>

	<Modal bind:showModal {projectContent} />

	<div class="flex flex-col lg:px-20 justify-right">
		{#each projectData as project}
			<div class="py-2">
				<ProjectCard {...project} {handleModalClick} />
			</div>
		{/each}
	</div>
</div>

<style>
</style>
