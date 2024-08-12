<script>
    import { onMount } from "svelte";
    import { cubicIn, cubicOut, linear } from "svelte/easing";
    import { fly, slide } from "svelte/transition";
    import { base } from "$app/paths";
    import LinkChip from "./LinkChip.svelte";

    let domLoaded = false;
    let firstUpdate = false;

    onMount(() => domLoaded = true)
</script>

{#if domLoaded}
<div class="flex mt-5 justify-between">
    <div style="clip-path: polygon(0% 0%, calc(100% - 2em) 0%, 100% 100%, 0% 100%);" on:introstart={() => firstUpdate = true} transition:fly={{ duration:1000, x: "-66.67vw", opacity: 1, easing: cubicOut }} 
        class="h-[3em] max-h-[3em] text-black bg-evyellow w-[calc(100%-3em+2px)] md:w-2/3 transition-width duration-1000">
        <div class="text-center text-black font-semibold text-xl w-full md:hidden flex">
            <h1>Escape Velocity</h1>
        </div>
        <div class="items-center text-center text-black font-semibold text-xl w-full h-full hidden md:flex justify-evenly">
            <LinkChip href="{base}/">Home</LinkChip>
            <LinkChip href="{base}/about">About Us</LinkChip>
            <LinkChip href="{base}/CENTERSTAGE">CENTERSTAGE</LinkChip>
            <LinkChip href="{base}/POWERPLAY">POWERPLAY</LinkChip>
            <LinkChip href="{base}/sponsors">Sponsors</LinkChip>
            <LinkChip href="{base}/contact">Contact Us</LinkChip>
        </div>
        <!-- <div class=" hidden absolute top-0 left-full border-t-transparent border-l-evyellow border-t-[3em] border-l-[2em] {firstUpdate ? "" : "-translate-x-2"} transition-all duration-1000 -z-20"></div> -->
    </div>



    <div style="clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 2em 100%); " transition:fly={{ duration: 500, x: 300, opacity: 1, easing: cubicOut, delay: 300}} 
        class="h-[3em] w-[5em] bg-evorange">
        <!-- <div class="absolute top-0 -left-[2em] -z-10 border-b-transparent border-r-evorange border-b-[3em] border-r-[2em] {firstUpdate ? "" : "translate-x-2"} transition-transform duration-1000"></div> -->
        <a href="{base}/">
            <img src="{base}/evlogo.png" alt="logo" class="mt-1 ml-[calc(100%-3em)] h-[2.5em]"/>
        </a>
    </div>
</div>
{/if}