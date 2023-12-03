<script>
	import { stackData } from '$lib/data/stack-data';
</script>

{#each stackData as item}
	<a href={item.link} class="flex flex-wrap justify-center p-4">
		<div class="flex items-center justify-center w-20 h-20 bg-slate-200 shadow-xl rounded-full">
			<img src={item.image} alt={item.title} class="w-12 h-12" />
		</div>
	</a>
{/each}
