<script>
    export let src;
    export let name;
    export let href;
</script>


<div on:keydown={(e) => {if (e.key == "Enter") {window.open(href, '_blank');}}} on:click={() => {window.open(href, '_blank');}} role="button" tabindex=0 class="flex flex-col text-center mx-4 w-[calc(100%-4em)] lg:mx-0 lg:w-2/3 h-40 rounded-3xl border-black dark:border-white border-4 my-4 transition hover:scale-[1.1] duration-500">
    <h1 class="text-3xl font-semibold mb-2">{name}</h1>
    <div class="flex justify-between items-center align-middle h-full mx-4 mb-4 max-h-[calc(100%-3.75rem)]">
        <img src={src} alt={name} class="max-h-full lg:h-full rounded-xl p-2" style="background-color: var(--background-color); transform: translateX(var(--offset));"/>
        <a href={href} class="hidden md:block">
            <svg width=50 height=50 class="hidden md:block -translate-y-[calc(1.825rem-15px)] transition duration-500 hover:scale-150 hover:text-evyellow">
                <path d="M 0 0 L 25 25 L 0 50" fill="transparent" stroke="currentColor" stroke-width=4/>
                <path d="M 10 0 L 35 25 L 10 50" fill="transparent" stroke="currentColor" stroke-width=4/>
            </svg>
        </a>
    </div>
</div>
