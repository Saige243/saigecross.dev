<script lang="ts">
	export let showModal: Boolean;
	import { projectPageData } from '$lib/data/project-data';
	import { writable } from 'svelte/store';
	import Carousel from './Carousel.svelte';

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
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		on:click|stopPropagation
		class="flex flex-col max-w-screen h-screen justify-around dark:bg-gray-600"
	>
		<div class="absolute top-2 right-4" on:click={() => dialog.close()}>
			<button>X</button>
		</div>
		<h1
			class="mb-4 text-5xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
		>
			{$projectContent.title}
			<hr />
		</h1>
		<Carousel />
		<hr />
		<p>{$projectContent.description}</p>
		<hr />
		<p>{$projectContent.stack}</p>
		<!-- svelte-ignore a11y-autofocus -->
		<div>
			<button autofocus on:click={() => dialog.close()}>back to projects</button>
		</div>
	</div>
</dialog>

<style>
	dialog {
		border-radius: 0.2em;
		border: none;
		padding: 0;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	dialog > div {
		padding: 1em;
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
