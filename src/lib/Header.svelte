<script>
    import { onMount } from "svelte";
    import { cubicIn, cubicOut } from "svelte/easing";
    import { fly, slide } from "svelte/transition";

    let domLoaded = false;
    let animDone = false;

    onMount(() => domLoaded = true)
</script>

{#if domLoaded}
<div transition:fly={{ duration:1000, x: "-66.67vw", opacity: 1, easing: cubicOut }} class="absolute top-5 border-y-evyellow border-y-[1em] w-2/3 -z-10"></div>
<div class="absolute top-5 left-2/3 border-t-transparent border-l-evyellow border-t-[2em] border-l-[3em] -z-10"></div>
<div transition:fly={{ duration:1000, delay: 980, x: "-3em", opacity:1, easing: cubicOut}} class="absolute top-5 w-[3em] h-[2em] bg-black z-10 transition-transform duration-1000" style="left: calc(66.67% + 3em)"></div>
{/if}