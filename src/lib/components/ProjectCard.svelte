<script lang="ts">
	const { title, description, stack, image, handleModalClick } = $$props;
	import { stackData } from '$lib/data/stack-data';
	import ProjectTechBadge from './ProjectTechBadge.svelte';

	type StackItem = {
		title: string;
		image: string;
	};

	let stackDataArr: StackItem[] = [];

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
	class=" flex flex-col p-4 sm:p-4 bg-white dark:bg-cardGreen border rounded-lg shadow-xl dark:border-cardGreen hover:opacity-80 cursor-pointer max-h-[180px]"
>
	<div class="flex space-x-2">
		<div class="hidden md:flex sm:w-[290px]">
			<img src={image} alt="pic" class="h-full" />
		</div>

		<div class="flex flex-col px-6">
			<h5 class="mb-1 text-lg md:text-2xl xl:text-3xl font-bold tracking-tight text-seafoam">
				{title}
			</h5>
			<div>
				<span class="text-xs sm:text-sm xl:text-base block text-text dark:text-textDark pb-1">
					{description}
				</span>
			</div>
			<div>
				<div class="flex flex-row space-x-2">
					{#each stackDataArr as stack}
						<div class="w-5 h-5">
							<ProjectTechBadge {stack} />
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</a>
