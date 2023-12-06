<script lang="ts">
	const { time, company, description, role, stack } = $$props;
</script>

<div class="job-history-block bg-white p-4 rounded-md shadow-md mb-4">
	<div class="font-bold text-lg mb-2">{time}</div>
	<div class="text-gray-600">{company}</div>
	<div class="text-blue-500 font-semibold text-sm mb-2">{role}</div>
	<div class="text-gray-700 mb-4">{description}</div>
	<div class="text-gray-800">
		<strong>Stack:</strong>
		{stack}
	</div>
</div>
