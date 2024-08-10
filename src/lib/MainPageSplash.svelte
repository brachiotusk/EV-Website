<script>
    import { onMount } from "svelte";
    import { base } from "$app/paths";

    let domLoaded = false;

    onMount(() => domLoaded = true);
</script>

<div style="background-image: linear-gradient(to right, yellow, orange);">
    <div class="relative w-1/2 mx-auto mt-10 text-black flex flex-row" >
        <div transition:fly={{x: -300, duration: 1000, easing: cubicOut }} class="mt-[10%] text-xl z-10">
            <h1 class="text-3xl font-bold">The Future of Innovation.</h1>
            <hr class="border-black border-t-2 transition-all duration-1000 {domLoaded ? "w-1/3" :"w-0"} mb-4">
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