<script>
    export let href;
    export let func;
</script>

<div style="clip-path: polygon(0% 50%, 20% 100%, 80% 100%, 100% 50%, 80% 0%, 20% 0%)" class="bg-evyellow hover:bg-evorange transition duration-500 hover:scale-125 py-2 px-4">
    {#if href}
    <a href={href}>
        <slot/>
    </a>
    {:else}
    <button type="button" on:click={() => func()}>
        <slot/>
    </button>
    {/if}
</div>

