<script lang="ts">
	import { writable } from 'svelte/store';
	import { scrolledSection } from '$lib/stores';
	import Toggle from '$lib/components/Toggle.svelte';
	import Github from '$lib/assets/github.svg';
	import GithubWhite from '$lib/assets/githubWhite.svg';
	import Twitter from '$lib/assets/twitter.svg';
	import TwitterWhite from '$lib/assets/twitterWhite.svg';
	import LinkedIn from '$lib/assets/linkedin.svg';
	import LinkedInWhite from '$lib/assets/linkedinWhite.svg';
	import { theme } from '$lib/theme';

	type Social = {
		name: string;
		url: string;
		icon: string;
	};

	const pages = writable([
		{ name: 'Home', id: 'home' },
		{ name: 'Projects', id: 'projects' },
		{ name: 'Resume', id: 'resume' },
		{ name: 'About', id: 'about' }
	]);

	const socials = writable<Social[]>([]);

	$: {
		socials.set([
			{
				name: 'Github',
				url: 'https://github.com/saige243',
				icon: $theme === 'light' ? Github : GithubWhite
			},
			{
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/saige-cross-8b3976241/',
				icon: $theme === 'light' ? LinkedIn : LinkedInWhite
			}
		]);
	}

	$: {
		if ($scrolledSection) {
			currentPage.set($scrolledSection);
		}
	}

	export const currentPage = writable('home');

	export function scrollToSection(id: string) {
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
				class="pb-4 dark:text-white font-bold text-xl hover:underline underline-offset-8 decoration-scYellow decoration-4"
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
		color: #f1ff46;
	}
</style>
