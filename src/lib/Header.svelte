<script>
    import { onMount } from "svelte";
    import { cubicIn, cubicOut, linear } from "svelte/easing";
    import { fly, slide } from "svelte/transition";
    import { base } from "$app/paths";

    let domLoaded = false;
    let animDone = false;

    onMount(() => domLoaded = true)
</script>

{#if domLoaded}
<div transition:fly={{ duration:1000, x: "-66.67vw", opacity: 1, easing: cubicOut }} class="flex items-center absolute top-5 h-[3em] max-h-[3em] text-black bg-evyellow w-2/3 -z-20">
    <div class="text-center text-black font-semibold text-xl w-full">
        <h1>Escape Velocity</h1>
    </div>
</div>
<div  transition:fly={{ duration:1000, delay:30, x: "-66.67vw", opacity: 1, easing: cubicOut }} class="absolute top-5 left-2/3 border-t-transparent border-l-evyellow border-t-[3em] border-l-[7em] -z-20"></div>

<a href="{base}/">
    <img src="{base}/evlogo.png" alt="logo" class="absolute top-6 right-4 h-[2.5em]" transition:fly={{ duration: 500, x: 100, opacity: 1, easing: cubicOut, delay: 300}}/>
</a>
<div transition:fly={{ duration: 500, x: 100, opacity: 1, easing: cubicOut, delay: 300}} class="absolute top-5 right-0 h-[3em] w-[5em] -z-10 bg-evorange"></div>
<div transition:fly={{ duration: 500, x: 100, opacity: 1, easing: cubicOut, delay: 330}} class="absolute top-5 right-[5em] -z-10 border-b-transparent border-r-evorange border-b-[3em] border-r-[2em]"></div>
{/if}
<div class="pb-[3em]"></div>