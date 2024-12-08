<script lang="ts">
	import Nav from '$c/Nav.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<div class="w-full min-h-lvh h-fit bg-stone-200">
	<Nav />
	{@render children()}
</div>
