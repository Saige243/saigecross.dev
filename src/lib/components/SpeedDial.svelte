<script lang="ts">
	import { SpeedDial, SpeedDialButton } from 'flowbite-svelte';
	import { HomeSolid, ArchiveSolid, UserSolid } from 'flowbite-svelte-icons';
	import { scrolledSection } from '$lib/stores';

	const handleClick = (id: string) => {
		scrolledSection.set(id);
		const el = document.getElementById(id);
		el?.scrollIntoView({ behavior: 'smooth' });
	};
</script>

<SpeedDial defaultClass="absolute sm:hidden end-6 bottom-6 bg-blue-400 p-3 rounded-full z-10">
	<SpeedDialButton name="Home" class="p-2 my-1" on:click={() => handleClick('home')}>
		<HomeSolid class="w-5 h-5" />
	</SpeedDialButton>
	<SpeedDialButton name="Projects" class="p-2 my-1" on:click={() => handleClick('projects')}>
		<ArchiveSolid class="w-5 h-5" />
	</SpeedDialButton>
	<SpeedDialButton name="About" class="p-2 my-1 mb-3" on:click={() => handleClick('about')}>
		<UserSolid class="w-5 h-5" />
	</SpeedDialButton>
</SpeedDial>
