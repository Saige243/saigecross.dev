<script>
	import Portrait from '../assets/portrait.jpeg';
</script>

<div class="flex flex-col w-screen md:w-full h-full pt-16 lg:px-20 min-h-screen">
	<h2
		class="mb-4 text-4xl text-center sm:text-left font-extrabold tracking-tight leading-none md:text-4xl lg:text-5xl text-scYellow"
	>
		About.
	</h2>
	<p class="text-3xl text-text dark:text-textDark font-extrabold text-center sm:text-left">
		Stuff about me.
	</p>

	<div class="lg:flex md:space-x-6 items-center justify-center sm:my-32 pb-8">
		<img src={Portrait} alt="Portrait of me" class="rounded-full w-50 h-80 mx-auto mt-8 mb-8" />
		<div class="px-10">
			<p>
				Great to meet you! I'm Saige - a musician turned fullstack developer who loves to create
				things from scratch.<br /><br />
				I started my professional software engineering journey in 2022, working with a music startup
				web app called Fanwave.io, built in TypeScript, React, and Express on the backend. That project
				actually got me hired at Of Ash And Fire, where I currently work as a fullstack engineer, building
				a wide variety of software applications and solutions built with a range of technololgies like
				TypeScript, React, MongoDB, Rails, React Native, and Expo, just to name a few.
				<br /><br /> When I'm not coding, I'm probably reading, writing, watching a movie, or playing
				an instrument.
			</p>
		</div>
	</div>
</div>

<style></style>
