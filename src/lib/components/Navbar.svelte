<script lang="ts">
	import { writable } from 'svelte/store';

	const pages = writable([
		{ name: 'Home', id: 'home' },
		{ name: 'Projects', id: 'projects' },
		{ name: 'About', id: 'about' },
		{ name: 'Contact', id: 'contact' }
	]);

	export const currentPage = writable('home');

	function scrollToSection(id: string) {
		currentPage.set(id);
		const el = document.getElementById(id);
		el?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<navbar class="flex flex-col px-4 text-center">
	<div class="w-[100px]">
		{#each $pages as { name, id }}
			<button
				on:click={() => scrollToSection(id)}
				class="py-4 text-gray-800 hover:bg-gray-200 hover:text-gray-900"
				class:active={$currentPage === id}
			>
				{name}
			</button>
		{/each}
	</div>
</navbar>

<style>
	.active {
		text-decoration: underline;
	}
</style>
