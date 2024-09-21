<script>
    import { onMount } from "svelte";
    import { cubicOut, quintOut } from "svelte/easing";

    export let number;
    export let statisticName;
    export let duration = 3000;
    export let delay = 0;
    export let truncateDecimals = 0;

    let domLoaded = false;

    let count = 0;

    function inc(node, { delay = 0, duration = 400}) {
        return {
            delay,
            duration,
            tick: (t) => {count = (Math.floor((cubicOut(t) * number) * Math.pow(10, truncateDecimals)) / Math.pow(10, truncateDecimals)).toFixed(truncateDecimals);}
        }
    }

    onMount(() => domLoaded = true);
</script>

{#if domLoaded}
<div>
    <slot/>
    <h1 class="text-4xl" transition:inc={{duration: duration, delay: delay}}>
        {count}
    </h1>
    {@html statisticName}
</div>
{/if}