<script lang="ts">
	import { HomeSolid, ArchiveSolid, UserSolid, ArrowDownSolid } from 'flowbite-svelte-icons';
	import { scrolledSection } from '$lib/stores';

	let isOpen = false;

	const handleToggle = () => {
		isOpen = !isOpen;
	};

	const handleClick = (id: string) => {
		scrolledSection.set(id);
		const el = document.getElementById(id);
		el?.scrollIntoView({ behavior: 'smooth' });
		isOpen = false;
	};
</script>

<div class="absolute sm:hidden bottom-6 right-4 z-10">
	<button
		id="click"
		class="p-3 bg-blue-400 rounded-full transform transition-transform ease-in-out duration-300"
		on:click={handleToggle}
		style={`transform: rotate(${isOpen ? '180deg' : '0'})`}
	>
		<ArrowDownSolid />
	</button>
</div>
{#if isOpen}
	<div class="absolute bottom-20 right-4 z-10 space-y-1">
		<div class="flex flex-col rounded-full">
			<button id="click" class="p-3 bg-white rounded-full" on:click={() => handleClick('home')}
				><HomeSolid /></button
			>
		</div>
		<div>
			<button id="click" class="p-3 bg-white rounded-full" on:click={() => handleClick('projects')}
				><ArchiveSolid /></button
			>
		</div>
		<div>
			<button id="click" class="p-3 bg-white rounded-full" on:click={() => handleClick('about')}
				><UserSolid /></button
			>
		</div>
	</div>
{/if}
