<script>
    import { onMount } from "svelte";
    import { cubicIn, cubicOut, linear } from "svelte/easing";
    import { fly, slide } from "svelte/transition";
    import { base } from "$app/paths";

    let domLoaded = false;
    let firstUpdate = false;

    onMount(() => domLoaded = true)
</script>

{#if domLoaded}
<div style="clip-path: polygon(0% 0%, calc(100% - 2em) 0%, 100% 100%, 0% 100%);" on:introstart={() => firstUpdate = true} transition:fly={{ duration:1000, x: "-66.67vw", opacity: 1, easing: cubicOut }} 
    class="flex items-center absolute top-5 h-[3em] max-h-[3em] text-black bg-evyellow w-[calc(100%-3em+2px)] md:w-2/3 -z-20 transition-width duration-1000">
    <div class="text-center text-black font-semibold text-xl w-full">
        <h1>Escape Velocity</h1>
    </div>
    <!-- <div class=" hidden absolute top-0 left-full border-t-transparent border-l-evyellow border-t-[3em] border-l-[2em] {firstUpdate ? "" : "-translate-x-2"} transition-all duration-1000 -z-20"></div> -->
</div>



<div style="clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 2em 100%); " transition:fly={{ duration: 500, x: 300, opacity: 1, easing: cubicOut, delay: 300}} 
    class="absolute top-5 right-0 h-[3em] w-[5em] -z-10 bg-evorange">
    <!-- <div class="absolute top-0 -left-[2em] -z-10 border-b-transparent border-r-evorange border-b-[3em] border-r-[2em] {firstUpdate ? "" : "translate-x-2"} transition-transform duration-1000"></div> -->
    <a href="{base}/">
        <img src="{base}/evlogo.png" alt="logo" class="absolute top-1 right-2 h-[2.5em]"/>
    </a>
</div>
{/if}
<div class="pb-[3em]"></div>