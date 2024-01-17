<script>
	import TechBadge from './TechBadge.svelte';
	import { stackData } from '$lib/data/stack-data';

	const stackDataArr = stackData;
</script>

<div class="flex h-fit flex-col md:space-y-12 text-center px-4 mx-auto w-screen sm:w-full pt-16">
	<div>
		<h1
			class="mb-4 text-5xl font-extrabold tracking-tight leading-none text-text dark:text-textDark md:text-5xl lg:text-6xl"
		>
			I'm Saige.
		</h1>
		<div class="flex bg-scYellow mx-12 pt-2 justify-center text-center">
			<div>
				<h2
					class="mb-4 text-bgDark text-2xl font-extrabold tracking-tight leading-none md:text-4xl lg:text-5xl text-center"
				>
					Fullstack Software Engineer.
				</h2>
			</div>
		</div>
		<p class="text-text dark:text-textDark xl:text-lg pt-2">
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
