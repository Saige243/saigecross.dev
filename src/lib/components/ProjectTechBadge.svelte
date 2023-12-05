<script>
	const { link, image, title } = $$props.stack;
</script>

<a href={link} target="_blank">
	<img src={image} alt={title} class="w-8 h-8" />
</a>
