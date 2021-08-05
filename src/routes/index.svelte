<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import Section from '$lib/ui/Section.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<Header />
<main class="l-container">
	<Section title="personal-info">
		Robert Drobisz In my projects, I focus on quality. My experience comes from many technologies,
		so I can easily combine different technologies and quickly learn new ones. ul. Pod kozińce 5c
		43-460 Wisła (+48) 512-839-337 rdrobisz92@gmail.com linkedin
	</Section>
	<Section title="experience">
		EXPERIENCE ScaloSoft(providing work for Asseco), Remote — Front-End Developer 2021-03 - 2021-04
		Develop CRM system Subject: External Business Apps Technology: JavaScript, TypeScript, Angular
		11, HTML Da Vinci Studio, Bielsko — Front-End Developer 2019-04 - 2020-04 Dedicated solutions
		Subject: Internal/External Business Apps Technology: JavaScript, TypeScript, NativeScript,
		Angular 9, HTML, SCSS, Bootstrap, Symfony, Ionic E-lan s.c, Bielsko — Full-Stack Developer
		2016-04 - 2019-03 Applications for the automotive industry customers and dedicated solutions
		Subject: Internal/External Business Apps Technology: JavaScript, TypeScript, jQuery, Angular 7,
		HTML5, CSS, C#, WPF, SQL, Bootstrap, C++, Vue, EntityFramework, MVC
	</Section>
	<Section title="education">
		EDUCATION University of Bielsko-Biala (ATH) — Master of Engineering, Software Engineering
		2012-09 - 2018-06
	</Section>
	<Section title="skils">
		SKILLS Angular C# Bootstrap Css/scss NativeScript Ionic/cordova Sql/nosql JavaScript TypeScript
		PHP jQuery Software Visual studio Microsoft office Git Docker
	</Section>
	<Section title="languages">Polish - native language English - B1/B2</Section>
</main>
