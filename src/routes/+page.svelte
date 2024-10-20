<script>
    import PageWrapper from "../lib/common/PageWrapper.svelte";
    import { fade, fly, scale } from "svelte/transition";
    import { afterUpdate, onMount } from "svelte";
    import { cubicIn, cubicInOut, cubicOut, elasticIn, elasticInOut, quintIn } from "svelte/easing";
    import ContentBox from "../lib/common/ContentBox.svelte";
    import { base } from "$app/paths";
    import Header from "../lib/layout/Header.svelte";

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
    <Header></Header>
    {#if domLoaded}
        <div style="background-image: linear-gradient(to right, #F4C032, #FF8800);">
            <div class="relative mx-3 md:max-w-3xl lg:max-w-6xl md:mx-auto mt-4 text-black flex lg:flex-row flex-col lg:justify-center" >
                <div on:introstart={setLoaded} transition:fly={{x: -300, duration: 1000, easing: cubicOut }} class="mt-[10%] text-xl z-10 lg:max-w-md px-[1em]">
                    <h1 class="text-3xl font-bold">Escape Velocity Robotics</h1>
                    <hr class="border-black border-t-2 transition-width delay-[400ms] duration-1000 {firstUpdate ? "w-[6em]" :"w-0"} my-2">
                    With a long-standing history of success, our team is always innovating, whether it is
                    our unique Differential Swerve drive or our custom 3d-printed designs. Our mission is to bring everyone we can into the Digital Age through access to technology and promotion of STEM.
                </div>
                <div>
                    <img src="{base}/evcsrobo.png" alt="The Escape Velocity CENTERSTAGE robot." class="max-h-[40em] -z-20 mx-auto lg:mx-0"/>
                    <!-- <div transition:fly={{x: -300, duration: 1000, easing: cubicOut }} class="absolute top-0 left-0 w-[100%] h-full" style="background-image: linear-gradient(to right, rgba(0, 0, 0, 0.6), transparent);"></div> -->
                </div>
            </div>
        </div>
        
        <div transition:fly={{x: 30, duration: 1000}}>
            <PageWrapper>
                
                <h1 class="text-2xl font-bold">Who We Are</h1>
                <hr class="border-black dark:border-white my-2 border-t-2 transition-width duration-1000 delay-[1s] {!firstUpdate? "w-0" : "w-[5em]"}">
                We are 14343 Escape Velocity, an 8 person FIRST® Tech Challenge team from Bellevue, Washington.
            
            </PageWrapper>
        </div>
    {/if}
    
</div>
