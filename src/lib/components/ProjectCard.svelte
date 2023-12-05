<script lang="ts">
	const { title, description, image, stack, handleModalClick } = $$props;
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
	class="flex flex-col justify-between p-4 sm:p-4 h-full bg-white border border-gray-200 rounded-lg shadow-xl hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 cursor-pointer"
>
	<h5 class="mb-2 text-2xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
		{title}
	</h5>
	<div class="flex flex-col">
		<div>
			<p class="text-sm lg:text-xl block text-gray-700 dark:text-gray-400 pb-2">
				{description}
			</p>
		</div>
		<div class="flex flex-row space-x-2">
			{#each stackDataArr as stack}
				<div class="w-6 h-6">
					<ProjectTechBadge {stack} />
				</div>
			{/each}
		</div>
	</div>
</a>
