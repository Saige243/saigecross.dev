<script lang="ts">
	import { writable } from 'svelte/store';

	export const currentPage = writable('home');

	$: console.log('currentPage', $currentPage);

	const pages = writable([
		{ name: 'Home', id: 'home' },
		{ name: 'Projects', id: 'projects' },
		{ name: 'About', id: 'about' },
		{ name: 'Contact', id: 'contact' }
	]);

	function handleLinkClick(id: string) {
		currentPage.set(id);
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
