<script>
	const { link, image, title } = $$props.stack;
</script>

<a href={link} target="_blank" class="flex flex-wrap justify-center p-4 group">
	<div
		class="relative flex items-center justify-center w-fit h-fit p-3 bg-white shadow-xl rounded-full hover:animate-spin"
	>
		<img src={image} alt={title} class="w-12 h-12" />
	</div>
</a>
