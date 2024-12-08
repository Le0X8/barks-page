<script lang="ts">
	import { title } from '../config';
</script>

<nav class="bg-stone-300 rounded-lg p-2 px-3 fixed w-[calc(100vw-1rem)] bottom-2 sm:top-2 left-2 h-12 flex items-center">
  <h1 class="text-2xl">{title}</h1>
  <div class="flex-grow"></div>
  <label for="nav-expand">
    <!-- ich warte bis lucide-svelte Svelte 5 unterstützt -->
  </label>
</nav>

<div class="h-16"></div>