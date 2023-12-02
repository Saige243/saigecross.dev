<script lang="ts">
	import { writable } from 'svelte/store';
	import { scrolledSection } from '$lib/stores';
	import Github from '$lib/assets/github.svg';
	import Twitter from '$lib/assets/twitter.svg';
	import LinkedIn from '$lib/assets/linkedin.svg';

	const pages = writable([
		{ name: 'Home', id: 'home' },
		{ name: 'Projects', id: 'projects' },
		{ name: 'About', id: 'about' },
		{ name: 'Contact', id: 'contact' }
	]);

	const socials = writable([
		{
			name: 'Github',
			url: 'https://github.com/saige243',
			icon: Github
		},
		{
			name: 'Twitter',
			url: 'https://twitter.com/The_Commodore0',
			icon: Twitter
		},
		{
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/saige-cross-8b3976241/',
			icon: LinkedIn
		}
	]);

	$: {
		if ($scrolledSection) {
			currentPage.set($scrolledSection);
		}
	}

	export const currentPage = writable('home');

	function scrollToSection(id: string) {
		currentPage.set(id);
		const el = document.getElementById(id);
		el?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<navbar class="hidden sm:flex sm:flex-col sm:px-4 sm:text-center justify-between">
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
	<div class="flex flex-col place-items-center w-[100px] pb-24">
		{#each $socials as { name, url, icon }}
			<a
				href={url}
				target="_blank"
				class="py-4 text-gray-800 hover:bg-gray-200 hover:text-gray-900"
			>
				<img src={icon} alt={name} />
			</a>
		{/each}
	</div>
</navbar>

<style>
	.active {
		text-decoration: underline;
	}
</style>
