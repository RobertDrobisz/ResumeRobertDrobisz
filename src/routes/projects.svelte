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
	<Section title="project 1">
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam ratione consequuntur incidunt
		modi doloremque ipsa nesciunt laboriosam quis? Dignissimos vitae quaerat iusto fuga voluptatum
		soluta suscipit repellat eos aut nisi.
	</Section>
	<Section title="project 2">
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, commodi magni animi aliquid
		odio dolores, accusantium ex exercitationem eius quo est labore, libero assumenda officiis ad
		nam ipsam. Expedita, aspernatur!
	</Section>
</main>
