<script lang="ts">
	import JobHistoryBlock from './JobHistoryBlock.svelte';
	import { jobHistoryData } from '../data/project-data';
</script>

<div>
	<h1
		class="mb-4 text-5xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
	>
		About.
	</h1>
	<h2
		class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white"
	>
		Some stuff about me.
	</h2>
	{#each jobHistoryData as jobHistory}
		<JobHistoryBlock {...jobHistory} />
	{/each}
</div>

<style></style>
