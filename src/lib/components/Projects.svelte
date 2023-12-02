<script>
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { projectData } from '../data/project-data';
</script>

<div class="w-screen md:w-full">
	<div class="pb-4">
		<h1
			class="mb-4 text-5xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
		>
			Projects.
		</h1>
		<h2
			class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white"
		>
			Stuff I've built.
		</h2>
	</div>

	<div class="grid grid-cols-2 grid-rows-2">
		{#each projectData as project}
			<div class="p-2">
				<ProjectCard {...project} />
			</div>
		{/each}
	</div>
</div>

<style>
</style>
