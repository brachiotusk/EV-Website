<script>
    import { onMount } from "svelte";
    import { cubicIn, cubicOut, linear } from "svelte/easing";
    import { fly, slide } from "svelte/transition";
    import { base } from "$app/paths";
    import LinkChip from "../common/LinkChip.svelte";
    import MobileNavbar from "./MobileNavbar.svelte";

    let domLoaded = false;
    let firstUpdate = false;
    let showNavbar = false;
    let animOver = false;

    onMount(() => domLoaded = true)

    let toggleNavbar = function() {showNavbar = !showNavbar;}
</script>

{#if domLoaded}
<div class="flex mt-5 justify-between">
    <div style="clip-path: polygon(0% 0%, calc(100% - 2em) 0%, 100% 100%, 0% 100%);" on:introstart={() => firstUpdate = true} on:introend={() => animOver = true} transition:fly={{ duration:1000, x: "-66.67vw", opacity: 1, easing: cubicOut }} 
        class="h-[3em] max-h-[3em] text-black bg-evyellow w-[calc(100%-3em+2px)] md:w-2/3 transition-all duration-1000">
        <div class="items-center text-center text-black font-semibold text-xl w-full h-full flex lg:hidden justify-evenly">
            <button type="button" on:click={() => {showNavbar=!showNavbar; console.log(showNavbar)}}>
                <svg width="20" height="3em" stroke="currentColor" class="z-100 absolute left-4 {animOver ? "top-5" : "top-0"}" style="stroke-width: 0.15em; stroke-linecap: rounded;">
                    <path d="M 0 15 H 20 M 0 25 H 20 M 0 35 H 20" class="fill-none"></path>
                </svg>
            </button>
            <h1>Escape Velocity</h1>
        </div>
        
        <div class="items-center text-center text-black font-semibold text-xl w-full h-full hidden lg:flex justify-evenly">
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
        class="h-[3em] w-[5em] bg-evorange absolute lg:block top-5 right-0">  
        <!-- <div class="absolute top-0 -left-[2em] -z-10 border-b-transparent border-r-evorange border-b-[3em] border-r-[2em] {firstUpdate ? "" : "translate-x-2"} transition-transform duration-1000"></div> -->
        <a href="{base}/">
            <img src="{base}/evlogo.png" alt="logo" class="mt-1 ml-[calc(100%-3em)] h-[2.5em]"/>
        </a>
    </div>
</div>
{#if showNavbar}
<MobileNavbar func={toggleNavbar}/>
{/if}
{/if}