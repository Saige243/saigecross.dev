<script lang="ts">
	import { getContext } from 'svelte';
	import { writable } from 'svelte/store';

	let currentPage = writable('/');
	const context = getContext('currentPage');
	if (context) {
		currentPage.set(context as string);
	}

	const pages = writable([
		{ name: 'Home', id: '/' },
		{ name: 'Projects', id: 'projects' },
		{ name: 'About', id: 'about' },
		{ name: 'Contact', id: 'contact' }
	]);

	function handleLinkClick(path: string) {
		currentPage.set(path);
	}
</script>

<navbar class="flex flex-col px-4 text-center">
	{#each $pages as { name, id }}
		<button
			class="py-4 text-gray-800 hover:bg-gray-200 hover:text-gray-900"
			class:active={$currentPage === id}
			on:click={() => handleLinkClick(id)}
		>
			{name}
		</button>
	{/each}
</navbar>

<style>
	.active {
		text-decoration: underline;
	}
</style>
