<script lang="ts">
	import JobHistoryBlock from './JobHistoryBlock.svelte';
	import { jobHistoryData } from '../data/project-data';
</script>

<div class="flex flex-col w-screen md:w-full h-full pt-16 lg:px-20">
	<div class="text-center md:text-left">
		<h1 class="mb-2 text-5xl font-extrabold tracking-tight leading-none text-scYellow">Resume.</h1>
		<h2
			class="mb-3 text-3xl font-extrabold tracking-tight leading-none text-text dark:text-textDark"
		>
			Where I've been.
		</h2>
	</div>
	{#each jobHistoryData as jobHistory}
		<JobHistoryBlock {...jobHistory} />
	{/each}
</div>

<style></style>
