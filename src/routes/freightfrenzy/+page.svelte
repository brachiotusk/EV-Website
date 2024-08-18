<script>
    import { base } from "$app/paths";
    import ExpandingHr from "../../lib/common/ExpandingHR.svelte";
    import PageWrapper from "../../lib/common/PageWrapper.svelte";
    import Header from "../../lib/layout/Header.svelte";
</script>
<Header/>
<PageWrapper>
    <h1 class="text-3xl font-semibold">Freight Frenzy</h1>
    <ExpandingHr --width=10em/>
    During our first year as a team, we focused on learning the basics of FTC and understanding how the Control Hub, Java, and the 
    overall game worked. For this year, we were mentored by a couple of old members of Escape Velocity, and with their help we
     worked on a simple 4 wheel drive that had a arm that would lift and pick up items from the rolling intake on the bottom and then 
     it would lock into a box to be deposited into the towers for scoring.
     <img src="{base}/freightfrenzy/evff.jpg" alt="The Escape Velocity Freight Frenzy robot scoring a block onto a blue hub." class="my-4 max-h-[30em]"/>
     <i>The Escape Velocity Freight Frenzy robot scoring a block onto a blue hub.</i>
</PageWrapper>