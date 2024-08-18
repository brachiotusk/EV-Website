<script>
    export let href;
</script>

<div style="clip-path: polygon(0% 50%, 20% 100%, 80% 100%, 100% 50%, 80% 0%, 20% 0%)" class="bg-evyellow hover:bg-evorange transition-[background-color, scale] duration-500 hover:scale-125 py-2 px-4">
    <a href={href}>
        <slot/>
    </a>
</div>

