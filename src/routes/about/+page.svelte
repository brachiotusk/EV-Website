<script>
    import ExpandingHr from "../../lib/common/ExpandingHR.svelte";
    import Header from "../../lib/layout/Header.svelte";
    import PageWrapper from "../../lib/common/PageWrapper.svelte";

</script>
<Header></Header>

<PageWrapper>
    <h1 class="text-3xl font-semibold">Meet the Team</h1>
    <ExpandingHr --width=10em/>
    We are an 8 person FTC team from Bellevue, Washington. Here's everyone on the team!<br>
    <!-- make this section look prettier later -->

    <b class="mt-4 text-xl">Mechanical</b>
    <ul>
        <li>Allen, 10th Grade <i class="text-evyellow">(Captain, Lead)</i></li>
        <li>Innaias, 11th Grade</li>
        <li>Erwin, 10th Grade</li>
        <li>Aaryan, 8th Grade</li>
        <li>Shaurya, 7th Grade</li>
    </ul>

    <b class="mt-4  text-xl">Programming</b>
    <ul>
        <li>William, 11th Grade <i class="text-evorange">(Lead)</i></li>
        <li>Michael, 10th Grade</li>
    </ul>

    <b class="mt-4 text-xl">Outreach</b>
    <ul>
        <li>Vedika, 10th Grade</li>
        <li>Kireeti, 10th Grade</li>
    </ul>

    <h1 class="text-3xl font-semibold mt-4">Upcoming Events</h1>
    <ExpandingHr --width=10em/>
    Escape Velocity currently does not have any scheduled events. Check back soon for the 2024-2025 Into the Deep schedule!

    <h1 class="text-3xl font-semibold mt-4">Past Results</h1>
    <ExpandingHr --width=10em/>
    <h2 class="text-xl font-bold">2023-2024 CENTERSTAGE</h2>
    <ul>
        <li><span class="text-evyellow">Semifinalist Alliance 2nd Pick</span> at Washington State Championship</li>
        <li><span class="text-evorange">Motivate Award 2nd Place</span> at Washington State Championship</li>
        <br>
        <li><b class="text-evyellow">Winning Alliance 1st Pick</b> at Pastuer Interleague</li>
        <li><b class="text-evorange">Inspire Award 2nd Place</b> at Pasteur Interleague</li>
        <li><b class="text-evorange">Motivate Award Winner</b> at Pasteur Interleague</li>
        <li><span class="text-evorange">Control Award 3rd Place</span> at Pasteur Interleague</li>
    </ul>

    <h2 class="text-xl font-bold mt-4">2022-2023 POWERPLAY</h2>
    <ul>
        <li><span class="text-evyellow">Semifinalist Alliance 1st Pick</span> at Washington State Championship</li>
        <br>
        <li><span class="text-evyellow">Finalist Alliance 1st Pick</span> at Pastuer Interleague</li>
        <li><b class="text-evorange">Inspire Award Winner</b> at Pasteur Interleague</li>
        <li><span class="text-evorange">Think Award 2nd Place</span> at Pasteur Interleague</li>
        <li><span class="text-evorange">Motivate Award 3rd Place</span> at Pasteur Interleague</li>
    </ul>
</PageWrapper>