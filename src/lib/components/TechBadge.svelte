<script>
	import { stackData } from '$lib/data/stack-data';
</script>

{#each stackData as item}
	<a href={item.link} target="_blank" class="flex flex-wrap justify-center p-4 group">
		<div
			class="relative flex items-center justify-center w-24 h-24 bg-slate-200 shadow-xl rounded-full hover:animate-spin"
		>
			<img src={item.image} alt={item.title} class="w-12 h-12" />
		</div>
	</a>
{/each}
