<script>
    import { fade, fly } from "svelte/transition";
    import { onMount } from "svelte";
    import { cubicIn, cubicOut, elasticInOut } from "svelte/easing";
    import ContentBox from "../lib/ContentBox.svelte";
    import { base } from "$app/paths";

    let domLoaded = false;

    onMount(() => {
        domLoaded = true;
    });

    


</script>

<!-- svelte-ignore non-top-level-reactive-declaration -->
<div class="text-black dark:text-white max-w-[50%] mx-auto">
    <!-- Header (todo) -->
    <div class="text-center mt-[1em]"><h1 class="text-3xl">Escape Velocity</h1></div>
    {#if domLoaded}
        <div transition:fly={{ x: -300, duration: 1000, easing: elasticInOut }}>We are team 14343 escape velocity, a FIRST Tech Challenge team based in Bellevue, WA.
        More yappage here idk</div>
        <div class="relative my-10">
            <div transition:fly={{x: -300, duration: 1000, easing: cubicOut }} class="absolute top-[20%] left-0 text-xl z-10" style="text-shadow: 0 0 5px white;">
                <h1 class="text-3xl font-bold">The future of innovation</h1>
                <hr>
<pre>
yap yap we are so cool
we make cool things
robot robot yay
more yappage
sdajuhdsaiuhsdnaodisj
</pre>
            </div>
            <div class="relative left-[30%]">
                <img src="{base}/evcsrobo.png" alt="robot" class="w-auto h-[40em] -z-20"/>
                <div transition:fly={{x: -300, duration: 1000, easing: cubicOut }} class="absolute top-0 left-0 w-[100%] h-full" style="background-image: linear-gradient(to right, rgba(0, 0, 0, 0.6), transparent);"></div>
            </div>
        </div>
    {/if}
    
</div>
