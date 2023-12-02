<script lang="ts">
	import { writable } from 'svelte/store';
	import { scrolledSection } from '$lib/stores';
	import Toggle from '$lib/components/Toggle.svelte';
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

<navbar class="hidden sm:flex sm:flex-col sm:px-4 justify-between">
	<div class="pt-16 w-[100px]">
		{#each $pages as { name, id }}
			<button
				on:click={() => scrollToSection(id)}
				class="pb-4 dark:text-white font-bold text-2xl hover:underline underline-offset-8 decoration-blue-600 decoration-4"
				class:active={$currentPage === id}
				class:dark:active={$currentPage === id}
			>
				{name}
			</button>
		{/each}
		<div class="flex pt-4">
			<Toggle />
		</div>
	</div>
	<div class="flex flex-col w-[100px] pb-24">
		{#each $socials as { name, url, icon }}
			<a href={url} target="_blank" class="py-4 hover:opacity-40 w-fit">
				<img src={icon} alt={name} />
			</a>
		{/each}
	</div>
</navbar>

<style>
	.active {
		color: #2563eb;
	}
</style>
