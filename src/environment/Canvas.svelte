<script>
import { onMount, onDestroy, setContext } from 'svelte';

	export let attributes = {};
	let canvas, 
        context;

	onMount(() => {
                // prepare canvas stores
                context = canvas.getContext('2d', attributes);
	});
	
</script>

<canvas bind:this={canvas}/>
<slot></slot>

