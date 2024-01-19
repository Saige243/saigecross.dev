<script>
	import TechBadge from './TechBadge.svelte';
	import { stackData } from '$lib/data/stack-data';

	const stackDataArr = stackData;
	const knownStacks = stackDataArr.slice(0, 12);
	const learningStacks = stackDataArr.slice(12, 18);
</script>

<div class="flex h-fit flex-col md:space-y-12 text-center px-4 mx-auto w-screen sm:w-full pt-16">
	<div>
		<h1
			class="mb-4 text-5xl font-extrabold tracking-tight leading-none text-text dark:text-textDark md:text-5xl lg:text-6xl"
		>
			I'm Saige.
		</h1>
		<div class="flex mx-12 pt-2 justify-center text-center">
			<div class="bg-scYellow px-2 pt-2">
				<h2
					class="mb-4 text-bgDark text-2xl font-extrabold tracking-tight leading-none md:text-4xl lg:text-5xl text-center"
				>
					Fullstack Software Engineer.
				</h2>
			</div>
		</div>
		<p class="text-text dark:text-textDark xl:text-lg pt-2">
			I love building things. Here are some of my favorite technologies:
		</p>
	</div>
	<div class="flex flex-col justify-center items-center">
		<div class="grid grid-cols-3 grid-rows-4 lg:grid lg:grid-cols-6 lg:grid-rows-2 lg:w-3/4">
			{#each knownStacks as stack}
				<TechBadge {stack} />
			{/each}
		</div>
		<p class="pt-8 xl:text-lg">Skills I'm developing:</p>
		<div class="grid grid-cols-3 grid-rows-6 lg:grid lg:grid-cols-6 lg:grid-rows-1 lg:w-3/4">
			{#each learningStacks as stack}
				<TechBadge {stack} />
			{/each}
		</div>
	</div>
</div>

<style></style>
