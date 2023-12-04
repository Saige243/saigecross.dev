<script lang="ts">
	const { title, description, image, stack, handleModalClick } = $$props;
</script>

<a
	href={''}
	on:click={() => handleModalClick(title)}
	class="flex flex-col justify-between h-72 p-2 sm:p-4 bg-white border border-gray-200 rounded-lg shadow-xl hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 cursor-pointer"
>
	<!-- <img src={image} alt={title} /> -->
	<h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
		{title}
	</h5>
	<div class="flex flex-col">
		<div>
			<p class="text-sm md:text-base block text-gray-700 dark:text-gray-400 pb-2">
				{description}
			</p>
		</div>
		<div class="flex flex-wrap">
			{#each stack as item}
				<div
					class="hidden w-fit sm:flex bg-purple-800 rounded-xl p-1 m-1 text-center place-items-center content-center justify-center"
				>
					<span class="text-white text-xs text-center px-1">{item}</span>
				</div>
			{/each}
		</div>
	</div>
</a>
