<script lang="ts">
	import { writable } from 'svelte/store';

	const pages = writable([
		{ name: 'Home', path: '/' },
		{ name: 'About', path: '/about' },
		{ name: 'Projects', path: '/projects' },
		{ name: 'Contact', path: '/contact' }
	]);

	const currentPage = writable('/');

	function handleLinkClick(path: string) {
		currentPage.set(path);
	}
</script>

<navbar class="flex flex-col px-4 justify-center">
	{#each $pages as { name, path }}
		<a
			href={path}
			class="py-2 text-gray-800 hover:bg-gray-200 hover:text-gray-900"
			class:active={$currentPage === path}
			on:click={() => handleLinkClick(path)}
		>
			{name}
		</a>
	{/each}
</navbar>

<style>
	.active {
		text-decoration: underline;
	}
</style>
