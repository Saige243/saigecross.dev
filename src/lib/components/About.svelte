<script lang="ts">
	import JobHistoryBlock from './JobHistoryBlock.svelte';
	import { jobHistoryData } from '../data/project-data';
</script>

<div class="flex flex-col w-screen md:w-full h-fit pt-12">
	<div class="text-center md:text-left">
		<h1
			class="mb-4 text-5xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
		>
			About.
		</h1>
		<h2
			class="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-4xl text-blue-800 lg:text-5xl dark:text-blue-200"
		>
			Some stuff about me.
		</h2>
	</div>
	{#each jobHistoryData as jobHistory}
		<JobHistoryBlock {...jobHistory} />
	{/each}
</div>

<style></style>
