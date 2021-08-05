<script lang="ts">
	export let title: string;
</script>

<section class="section">
	<h2 class="section-title">{title.toUpperCase()}</h2>
	<div class="section-content">
		<slot />
	</div>
</section>
