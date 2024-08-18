<script>
    import { base } from "$app/paths";
    import ExpandingHr from "../../lib/common/ExpandingHR.svelte";
    import PageWrapper from "../../lib/common/PageWrapper.svelte";
    import Header from "../../lib/layout/Header.svelte";
</script>
<Header/>
<PageWrapper>
    <h1 class="text-3xl font-semibold">Powerplay</h1>
    <ExpandingHr --width=10em/>
    This was a huge year for learning, as all but one of the older members graduated the team. This left a lot of independence and 
    leadership oppurtunities for the at the time 8th graders to push the team forward and learn how to build a functional robot. We 
    created a 5 wheel omnidirectional drive, the only one in the entire world. We had a linear slide that brought the plunger up and down
     to grab cones and score them up to 3 feet high. To improve it for the state championship, we added a pivot to reduce the amount of movement
    needed in the autonomous period.
    <img src="{base}/powerplay/evppteam.jpg" class="max-h-[30em] mt-4" alt="The 2022-2023 Escape Velocity Powerplay team, photograhed.">
    <i>The 2022-2023 Escape Velocity Powerplay team.</i><br>
    Our successes this year were capped off by a 6th place Qualification Match finish in the State Championship, Semifinalist Alliance 1st Pick in the State
    Championship, a successful 1+4 Autonomous run, and a Behind the Bot interview with FUN.
    <iframe class="mt-4" width="560" height="315" src="https://www.youtube.com/embed/WN0J67SiuwU?si=r4f1rQabuyJNSyng" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <i>The Behind the Bot interview from FUN.</i>
    <iframe class="mt-4" width="560" height="315" src="https://www.youtube.com/embed/5CABussjpvA?si=WUkJNlH5QhUy9Ae2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <i>The 1+4 autonomous.</i>
    <img src="{base}/powerplay/evppilawards.jpg" class="max-h-[30em]" alt="Escape Velocity at the awards ceremony at the Pasteur Interleague.">
    <i>Inspire 1 at the Pasteur Interleague!</i>
</PageWrapper>