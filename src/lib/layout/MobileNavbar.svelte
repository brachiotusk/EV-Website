<script>

    import { slide, fly } from "svelte/transition";
    import LinkChip from "../common/LinkChip.svelte";
    import { base } from "$app/paths";
    import { cubicOut } from "svelte/easing";

    export let func;

</script>


<div transition:fly={{opacity: 1, x: "-100vw", duration: 400, easing: cubicOut}} class="w-full h-full bg-white dark:bg-black bg-opacity-80 dark:bg-opacity-80 fixed z-30 top-0 left-0">
    <div class="flex flex-col justify-evenly text-center mx-20 my-5 text-black font-semibold text-2xl h-2/3">
        <button type="button" on:click={() => {func()}}>
            <svg width="20" height="3em" class="z-100 absolute left-4 top-5" style="stroke-width: 0.15em; stroke-linecap: rounded;">
                <path d="M 0 15 H 20 M 0 25 H 20 M 0 35 H 20" class="stroke-white fill-none"></path>
            </svg>
        </button>
        <LinkChip href="{base}/">Home</LinkChip>
        <LinkChip href="{base}/about">About Us</LinkChip>
        <LinkChip href="{base}/centerstage">CENTERSTAGE</LinkChip>
        <LinkChip href="{base}/POWERPLAY">POWERPLAY</LinkChip>
        <LinkChip href="{base}/sponsors">Sponsors</LinkChip>
        <LinkChip href="{base}/contact">Contact Us</LinkChip>
    </div>
</div>
