<script>
	import { stackData } from '$lib/data/stack-data';
</script>

{#each stackData as item}
	<a href={item.link} target="_blank" class="flex flex-wrap justify-center p-4 group">
		<div
			class="relative flex items-center justify-center w-fit h-fit p-3 bg-white shadow-xl rounded-full hover:animate-spin"
		>
			<img src={item.image} alt={item.title} class="w-12 h-12" />
		</div>
	</a>
{/each}
