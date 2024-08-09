<script>
    import { fade, fly } from "svelte/transition";
    import { onMount } from "svelte";
    import { cubicIn, elasticInOut } from "svelte/easing";
    import ContentBox from "../lib/ContentBox.svelte";

    let domLoaded = false;

    onMount(() => {domLoaded = true;});


</script>


<div class="text-black dark:text-white max-w-[50%] mx-auto">
    <!-- Header (todo) -->
    <div class="text-center mt-[1em]"><h1 class="text-3xl">Escape Velocity</h1></div>
    {#if domLoaded}
        <div transition:fly={{ x: -300, duration: 1000, easing: elasticInOut }}>We are team 14343 escape velocity, a FIRST Tech Challenge team based in Bellevue, WA.
        More yappage here idk</div>
    {/if}
    <ContentBox x=250 y=250 rounded=50 strokeWidth=30>
        iudhs aiu hdisao jds oaj
        <ul>
            <li>idsaoijdiajsmd</li>
        </ul>
    </ContentBox>
</div>
