<script>
	const { title, description, image, url, stack } = $$props;
</script>

<a
	href={url}
	class="flex flex-col justify-between h-[500px] w-96 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 cursor-pointer"
>
	<!-- <img src={image} alt={title} /> -->
	<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
		{title}
	</h5>
	<div class="flex flex-wrap">
		<p class="font-normal text-gray-700 dark:text-gray-400 pb-2">
			{description}
		</p>
		{#each stack as item}
			<div
				class="flex bg-purple-800 rounded-xl p-1 m-1 text-center place-items-center content-center justify-center"
			>
				<span class="text-white text-xs text-center">{item}</span>
			</div>
		{/each}
	</div>
</a>

<style></style>
