<script>
    import ExpandingHr from "../../lib/common/ExpandingHR.svelte";
    import Header from "../../lib/layout/Header.svelte";
    import PageWrapper from "../../lib/common/PageWrapper.svelte";
    import { base } from "$app/paths";
    import SponsorBox from "../../lib/sponsors/SponsorBox.svelte";

</script>
<Header/>
<PageWrapper>
    <h1 class="text-3xl font-semibold">Our Sponsors</h1>
    <ExpandingHr --width=10em/>
    <SponsorBox src="{base}/sponsors/baesystems.png" name="BAE Systems" href="https://www.baesystems.com"/>
    <SponsorBox src="{base}/sponsors/micron.png" name="Micron" --offset=-35px href="https://www.micron.com/"></SponsorBox>
    <SponsorBox src="{base}/sponsors/fabworks.svg" name="Fabworks" --background-color=white href="https://www.fabworks.com/"></SponsorBox>
    <SponsorBox src="{base}/sponsors/boeinglogo.png" name="Boeing" --background-color=white href="https://boeing.com/"></SponsorBox>
    <SponsorBox src="{base}/sponsors/ghlabs.png" name="Global Health Labs" href="https://www.ghlabs.org/"></SponsorBox>
    <i>Looking to sponsor us? <a href="{base}/contact" class="text-evyellow underline">Get in touch.</a> We appreciate any sum of money! [insert sponsor tiers here]</i>
</PageWrapper>