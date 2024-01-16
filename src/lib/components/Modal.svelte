<script lang="ts">
	export let showModal: Boolean;
	import { projectPageData } from '$lib/data/project-data';
	import { writable } from 'svelte/store';
	import ExternalLink from '$lib/assets/externalLink.svg';

	let projectContent: any = writable({});

	let dialog: HTMLDialogElement;
	$: if (dialog && showModal) dialog.showModal();

	$: if ($$props.projectContent) {
		projectPageData.map((projectName: any) => {
			if ($$props.projectContent === projectName.title) {
				projectContent.set(projectName);
			}
		});
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
	class="px-4 sm:px-8 md:px-24 lg:px-40 dark:bg-gray-600 py-12 h-screen md:h-fit"
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click|stopPropagation class="flex flex-col max-w-fit h-fit p-2">
		<div class="absolute top-2 right-4" on:click={() => dialog.close()}>
			<button>&#x2715;</button>
		</div>
		<div class="mb-12">
			<h1
				class="text-5xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
			>
				{$projectContent.title}
				<hr />
			</h1>
		</div>
		<div class="md:flex justify-between space-x-2 space-y-2">
			<div class="flex place-content-center md:w-1/2">
				<img src="https://picsum.photos/800/600?grayscale&random=1" alt={$projectContent.title} />
			</div>
			<hr />
			<div class="flex flex-col md:w-1/2 text-wrap justify-center">
				<p class="dark:text-white py-8">{$projectContent.description}</p>
				<a
					href={$projectContent.link}
					target="_blank"
					class="flex justify-between w-1/2 bg-blue-500 text-white py-2 mb-8 px-4 rounded hover:bg-blue-700 transition-colors duration-200 text-center"
				>
					Take me to {$projectContent.title}!
					<img src={ExternalLink} alt="external link" class="w-4" />
				</a>
				{#if Array.isArray($projectContent.stack)}
					<p>{$projectContent.stack.join(', ')}</p>
				{/if}
				<hr />
				<div class="pt-8">
					<button on:click={() => dialog.close()} class="dark:text-white"
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
