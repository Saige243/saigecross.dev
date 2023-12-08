<script>
	import TechBadge from './TechBadge.svelte';
	import { stackData } from '$lib/data/stack-data';

	const stackDataArr = stackData;
</script>

<div class="flex h-fit flex-col md:space-y-12 text-center px-4 mx-auto w-screen sm:w-full">
	<div>
		<h1
			class="mb-4 text-5xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
		>
			I'm Saige.
		</h1>
		<h2
			class="mb-4 text-blue-800 text-2xl font-extrabold tracking-tight leading-none md:text-4xl lg:text-5xl dark:text-blue-200"
		>
			Fullstack Software Engineer.
		</h2>
		<p class="text-gray-700 dark:text-gray-400">
			I love building things. Here are some of my favorite recent technologies:
		</p>
	</div>
	<div class="flex justify-center">
		<div class="grid grid-cols-3 grid-rows-6 lg:grid lg:grid-cols-6 lg:grid-rows-3 lg:w-3/4">
			{#each stackDataArr as stack}
				<TechBadge {stack} />
			{/each}
		</div>
	</div>
</div>

<style></style>
