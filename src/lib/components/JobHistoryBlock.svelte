<script lang="ts">
	import Arrow from '$lib/assets/arrow.svg';
	const { time, company, description, role, stack } = $$props;
</script>

<div class="job-history-block mb-2">
	<div class="font-bold text-lg mb-2 dark:text-white">{time}</div>
	<div class="">
		<p class="text-lg text-seafoam font-bold">{company}</p>
	</div>
	<div class="text-scYellow mb-1 font-bold">{role}</div>
	<div class="sm:text-base lg:text-base block text-gray-700 dark:text-textDark mb-4">
		{description}
	</div>
	<div class="text-blue-500 italic">
		<strong>Stack:</strong>
		{stack}
	</div>
	<img src={Arrow} alt="arrow" class="h-20 w-2 justify-normal" />
</div>
