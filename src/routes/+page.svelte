<script>
    import { fade, fly, scale } from "svelte/transition";
    import { afterUpdate, onMount } from "svelte";
    import { cubicIn, cubicOut, elasticInOut } from "svelte/easing";
    import ContentBox from "../lib/ContentBox.svelte";
    import { base } from "$app/paths";
    import MainPageSplash from "../lib/MainPageSplash.svelte";

    let domLoaded = false;
    let firstUpdate = false;

    onMount(() => {
        domLoaded = true;
        firstUpdate = false;
    });

    function setLoaded() {firstUpdate = true;}

    

    


</script>


<div class="text-black dark:text-white">
    <!-- Header (todo) -->
    <div class="text-center mt-[1em]"><h1 class="text-3xl">Escape Velocity</h1></div>
    {#if domLoaded}
       
        <div class="text-center w-1/2 mx-auto" on:introstart={setLoaded} transition:fly={{ x: -300, duration: 1000, easing: elasticInOut }}>We are team 14343 escape velocity, a FIRST Tech Challenge team based in Bellevue, WA.
        More yappage here idk</div>
        <div style="background-image: linear-gradient(to right, #F4C032, #FF8800);">
            <div class="relative w-1/2 mx-auto mt-10 text-black flex flex-row" >
                <div transition:fly={{x: -300, duration: 1000, easing: cubicOut }} class="mt-[10%] text-xl z-10">
                    <h1 class="text-3xl font-bold">The Future of Innovation.</h1>
                    <hr class="border-black border-t-2 transition-all delay-[400ms] duration-1000 {firstUpdate ? "w-1/3" :"w-0"} mb-4">
<pre>
yap yap we are so cool2
we make cool things
robot robot yay
more yappage
sdajuhdsaiuhsdnaodisj
</pre>
                </div>
                <div>
                    <img src="{base}/evcsrobo.png" alt="robot" class="w-auto h-[40em] -z-20"/>
                    <!-- <div transition:fly={{x: -300, duration: 1000, easing: cubicOut }} class="absolute top-0 left-0 w-[100%] h-full" style="background-image: linear-gradient(to right, rgba(0, 0, 0, 0.6), transparent);"></div> -->
                </div>
            </div>
        </div>
        
    {/if}
    <div class="flex items-center align-middle flex-col justify-center text-center w-2/3 mx-auto mt-3">
        <h1 class="text-3xl font-bold mb-2">We are Leaders.</h1>
        <hr class="mb-4 transition-all duration-1000 delay-[1s] {!domLoaded? "w-0" : "w-1/5"}">
        dshauodijsai
    </div>
    
</div>
