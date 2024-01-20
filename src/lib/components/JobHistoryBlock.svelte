<script lang="ts">
	import Arrow from '$lib/assets/arrow.svg';
	const { time, company, description, role, stack } = $$props;
</script>

<div class="job-history-block">
	<div class="font-bold text-lg mb-2 dark:text-white">{time}</div>
	<div class="">
		<p class="text-lg text-seafoam dark:text-scYellow font-bold">{company}</p>
	</div>
	<div class="text-bgDark dark:text-seafoam mb-1 font-black">{role}</div>
	<div class="text-sm md:text-base block text-gray-700 dark:text-textDark mb-4">
		<ul>
			{#each description as desc}
				<li class="list-disc ml-4">{desc}</li>
			{/each}
		</ul>
	</div>
	<div class="text-seafoam font-bold text-sm">
		{stack}
	</div>
	{#if company !== 'PLENTY Mercantile'}
		<img src={Arrow} alt="arrow" class="h-20 w-2 justify-normal" />
	{:else}
		<div class="b-76"></div>
	{/if}
</div>
