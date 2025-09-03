<script lang="ts">
	export let showModal: boolean;
	import { projectPageData } from '$lib/data/project-data';
	import { writable } from 'svelte/store';
	import ExternalLink from '$lib/assets/externalLink.svg';

	type ProjectContent = {
		title: string;
		image: string;
		description: string;
		link: string;
		ghLink: string;
		stack: string[];
	};

	import type { Writable } from 'svelte/store';

	let projectContent: Writable<ProjectContent> = writable({
		title: '',
		image: '',
		description: '',
		link: '',
		ghLink: '',
		stack: []
	});

	let dialog: HTMLDialogElement;
	$: if (dialog && showModal) dialog.showModal();

	$: if ($$props.projectContent) {
		projectPageData.map((projectName) => {
			if ($$props.projectContent === projectName.title) {
				projectContent.set({
					...projectName,
					link: projectName.link ?? '',
					ghLink: projectName.ghLink ?? ''
				});
			}
		});
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
	class="px-2 md:px-12 lg:px-4 dark:bg-gray-600 py-12 h-screen md:h-fit"
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click|stopPropagation class="flex flex-col max-w-fit h-fit p-2">
		<div class="absolute top-2 right-4" on:click={() => dialog.close()}>
			<button class="dark:text-white">&#x2715;</button>
		</div>
		<div class="mb-12">
			<h1
				class="text-5xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
			>
				{$projectContent.title === 'Voya Travel'
					? 'Voya Travel (In progress)'
					: $projectContent.title}
				<hr />
			</h1>
		</div>
		<div class="xl:flex justify-between space-x-2 space-y-2">
			<div class="flex place-content-center xl:w-2/3 h-full">
				<img src={$projectContent.image} alt={$projectContent.title} />
			</div>
			<hr />
			<div class="flex flex-col xl:w-1/3 text-wrap">
				<p class="dark:text-white py-8">{$projectContent.description}</p>
				<div class="md:flex md:space-x-2">
					{#if $projectContent.title !== 'SaigeCross.dev'}
						<a
							href={$projectContent.link}
							target="_blank"
							class="flex justify-between md:w-1/2 bg-seafoam text-white py-2 mb-8 px-4 rounded hover:opacity-80 transition-colors duration-200 text-center cursor-pointe text-sm lg:text-base"
						>
							{$projectContent.title === 'Voya Travel' ? 'Github Link' : $projectContent.title}
							<img src={ExternalLink} alt="external link" class="w-4" />
						</a>
					{/if}
				</div>
				{#if Array.isArray($projectContent.stack)}
					<p class="text-black dark:text-white">{$projectContent.stack.join(', ')}</p>
				{/if}
				<hr />
				<div class="pt-8">
					<button
						on:click={() => dialog.close()}
						class="dark:text-white hover:text-seafoam hover:dark:text-seafoam"
						>&larr; back to projects</button
					>
				</div>
			</div>
		</div>
	</div>
</dialog>

<style>
	dialog {
		border-radius: 0.2em;
		border: none;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	button {
		display: block;
	}
</style>
