<script>
    import ExpandingHr from "../../lib/common/ExpandingHR.svelte";
    import Header from "../../lib/layout/Header.svelte";
    import PageWrapper from "../../lib/common/PageWrapper.svelte";

</script>
<Header/>

<PageWrapper>
    <h1 class="text-3xl font-semibold">
        Contact Us!
    </h1>
    <ExpandingHr --width=10em/>
    <ul>
        <li>Email: <a href="mailto:escapevelocityweb@gmail.com" class="text-evyellow underline">escapevelocityweb@gmail.com</a></li>
        <li>Instagram: <a href="https://www.instagram.com/ftcescapevelocity14343/" class="text-evyellow underline">@ftcescapevelocity14343</a></li>
    </ul>
    
</PageWrapper>