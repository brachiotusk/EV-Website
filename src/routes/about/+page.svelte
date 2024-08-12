<script>
    import ExpandingHr from "../../lib/ExpandingHR.svelte";
import Header from "../../lib/Header.svelte";

</script>
<Header></Header>

<div class="flex items-center align-middle flex-col justify-center text-center mx-auto mt-6 max-w-6xl">
    <h1 class="text-3xl font-semibold">Meet the Team</h1>
    <ExpandingHr --width=10em/>
    We are an 8 person FTC team from Bellevue, Washington. Here's everyone on the team!<br>
    <!-- make this section look prettier later -->

    <b class="mt-4 text-xl">Mechanical</b>
    <ul>
        <li>Allen Hwang, 10th Grade <i class="text-evyellow">(Captain, Lead)</i></li>
        <li>Innaias, 11th Grade</li>
        <li>Erwin, 10th Grade</li>
        <li>Aaryan, 8th Grade</li>
    </ul>

    <b class="mt-4  text-xl">Programming</b>
    <ul>
        <li>William Wang, 11th Grade <i class="text-evorange">(Lead)</i></li>
        <li>Michael Wang, 10th Grade</li>
    </ul>

    <b class="mt-4 text-xl">Outreach</b>
    <ul>
        <li>Vedika Hemani, 10th Grade</li>
        <li>Kireeti Kompella, 10th Grade</li>
    </ul>
</div>