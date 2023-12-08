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

<div class="flex flex-col md:flex-row w-screen md:w-full h-full">
	<div class="text-center md:text-left flex flex-col pb-4">
		<h1
			class="mb-4 font-extrabold tracking-tight leading-none text-gray-900 text-4xl lg:text-5xl xl:text-6xl dark:text-white"
		>
			Projects.
		</h1>
		<h2
			class="hidden md:flex mb-4 text-2xl font-extrabold tracking-tight leading-none text-blue-800 md:text-3xl lg:text-4xl xl:text-5xl dark:text-white"
		>
			Stuff I've built.
		</h2>
	</div>

	<Modal bind:showModal {projectContent} />

	<div class="flex flex-col sm:px-8 md:px-20 justify-right">
		{#each projectData as project}
			<div class="p-2 md:p-4">
				<ProjectCard {...project} {handleModalClick} />
			</div>
		{/each}
	</div>
</div>

<style>
</style>
