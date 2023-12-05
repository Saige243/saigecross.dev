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

<div class="h-full">
	<div class="w-screen md:w-full px-4 md:px-0">
		<div class="pb-4 text-center">
			<h1
				class="mb-4 font-extrabold tracking-tight leading-none text-gray-900 text-3xl md:text-5xl lg:text-6xl dark:text-white"
			>
				Projects.
			</h1>
			<h2
				class="mb-4 text-2xl font-extrabold tracking-tight leading-none text-blue-800 md:text-4xl lg:text-5xl dark:text-white"
			>
				Stuff I've built.
			</h2>
		</div>

		<Modal bind:showModal {projectContent} />

		<div class="flex flex-row h-[600px] flex-wrap">
			{#each projectData as project}
				<div class="p-2 w-full sm:w-1/2">
					<ProjectCard {...project} {handleModalClick} />
				</div>
			{/each}
		</div>
	</div>
</div>

<!-- </div> -->

<!-- </div> -->

<style>
</style>
