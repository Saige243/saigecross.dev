<script lang="ts">
	const { time, company, description, role, stack } = $$props;
</script>

<div class="job-history-block py-4 mb-4">
	<div class="font-bold text-lg mb-2 dark:text-blue-200">{time}</div>
	<div class="text-white">
		<p class="text-lg text-black dark:text-white font-bold">{company}</p>
	</div>
	<div class="text-blue-500 font-semibold text-sm mb-2">{role}</div>
	<div class="sm:text-base lg:text-base block text-gray-700 dark:text-gray-400 mb-4">
		{description}
	</div>
	<div class="text-blue-500">
		<strong>Stack:</strong>
		{stack}
	</div>
</div>
