<script>
    import { onMount } from "svelte";

    let domLoaded = false;

    export let x;
    export let y;
    export let rounded;
    export let strokeWidth = 10;

    onMount(() => {domLoaded = true;});
</script>


<div class="relative" style="width: {parseInt(x) + 2*strokeWidth}px; height: {parseInt(y) + 2*strokeWidth}px; --perimeter: {2*x + 2*y}; --stroke-width: {strokeWidth}">
    <svg class="absolute top-0 left-0" height={x+strokeWidth*2} width={y+strokeWidth*2}>
        <rect class="transition-all cubic-in shape duration-1000" style="{!domLoaded ? "stroke-dasharray: 0 var(--perimeter);" : ""}" x={strokeWidth} y={strokeWidth} height={x} width={y} rx={rounded} ry={rounded}></rect>
    </svg>
    <div class="flex justify-center text-center w-full h-full flex-col">
        <slot/>
    </div>
</div>


<style>

    .shape {
        fill-opacity: 0;
        stroke: yellow;
        stroke-width: var(--stroke-width);
        stroke-dasharray: var(--perimeter);
        stroke-linejoin: round;
        
    }

    .shape:hover {
        stroke-dashoffset: 0;
        stroke-dasharray: var(--perimeter);
    }
</style>