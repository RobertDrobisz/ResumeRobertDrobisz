<script lang="ts">
	import { base } from '$app/paths';
</script>

<nav class="nav">
	<div class="nav-item"><a sveltekit:prefetch href="{base}/">Home</a></div>
	<div class="nav-item"><a sveltekit:prefetch href="{base}/projects">Projects</a></div>
</nav>
