<script lang="ts">
	const { title, description, stack, handleModalClick } = $$props;
	import { stackData } from '$lib/data/stack-data';
	import ProjectTechBadge from './ProjectTechBadge.svelte';

	let stackDataArr: any = [];

	$: stack.map((item: string) => {
		stackData.map((stackItem) => {
			if (item === stackItem.title) {
				stackDataArr.push(stackItem);
			}
		});
	});
</script>

<a
	href={''}
	on:click={() => handleModalClick(title)}
	class=" flex flex-col p-4 sm:p-4 bg-white border border-gray-200 rounded-lg shadow-xl hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 cursor-pointer"
>
	<div class="flex space-x-2">
		<div class="w-[200px]">
			<img src="https://picsum.photos/800/600?grayscale&random=1" alt="pic" />
		</div>

		<div class="flex flex-col px-6">
			<h5
				class="mb-2 text-lg md:text-2xl lg:text-3xl font-bold tracking-tight text-gray-900 dark:text-white"
			>
				{title}
			</h5>
			<div>
				<span class="text-xs md:text-sm lg:text-base block text-gray-700 dark:text-gray-400 pb-2">
					{description}
				</span>
			</div>
		</div>
	</div>
	<div>
		<div class="flex flex-row space-x-2">
			{#each stackDataArr as stack}
				<div class="w-6 h-6">
					<ProjectTechBadge {stack} />
				</div>
			{/each}
		</div>
	</div>
</a>
