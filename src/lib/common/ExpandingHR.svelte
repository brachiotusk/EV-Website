<script>
    import { afterNavigate } from "$app/navigation";
    import { afterUpdate, onMount } from "svelte";

    let loaded = false;

    afterNavigate(() => loaded = true);
</script>

<hr style="width: {loaded ? "var(--width, 3em)" : "0"};" class="my-2 border-white border-t-2 transition-width duration-1000">