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

<div class="w-screen md:w-full px-4 md:px-0">
	<div class="pb-4 text-center">
		<h1
			class="mb-4 font-extrabold tracking-tight leading-none text-gray-900 text-2xl md:text-5xl lg:text-6xl dark:text-white"
		>
			Projects.
		</h1>
		<h2
			class="mb-4 text-xl font-extrabold tracking-tight leading-none text-blue-800 md:text-4xl lg:text-5xl dark:text-white"
		>
			Stuff I've built.
		</h2>
	</div>

	<Modal bind:showModal {projectContent} />

	<div class="grid grid-cols-2 grid-rows-2">
		{#each projectData as project}
			<div class="p-2">
				<ProjectCard {...project} {handleModalClick} />
			</div>
		{/each}
	</div>
</div>

<style>
</style>
