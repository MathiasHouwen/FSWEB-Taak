<script>
    import Navbar from "./navbar.svelte";
    import Footer from "./footer.svelte";
    import Header from "./header.svelte";

    export let data;    
    let element = data.Recepten[(Math.floor(Math.random() * data.Recepten.length))]

</script>

<Header></Header>
<Navbar></Navbar>

<main>

    <div class="headerImage">
        <h1>HomePage</h1>
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img src="cookingpot.jpg" alt="picture of pot" id="homepageImg" width=100%>
    </div>
    <br>
    <p>
        Welkom bij Cook-EZ! <br>
        Superleuk dat je hier bent! Of je nou een doorgewinterde keukenprins of -prinses bent, of net begint met koken, je zit hier helemaal goed voor lekkere recepten en kookinspiratie. <br>
        We delen hier van alles, van klassieke gerechten die iedereen kent en liefheeft, tot nieuwe recepten die je zeker eens moet proberen. Koken is voor ons niet alleen een manier om te eten, maar ook om plezier te hebben en mooie momenten te delen met anderen. <br>
        Dus trek je schort aan, zet je favoriete muziek op en ga aan de slag met onze recepten. We kunnen niet wachten om te zien wat voor lekkers jij gaat maken! <br>
        Veel kookplezier en eet smakelijk!
        Mathias C: , tesktje gemaakt door ChatGPT
    </p>
    <br>

    <div class="ReceptVanDeDag">
        <h2>Recept van de dag!</h2>
        <h2>{element.Naam}</h2>
        <p>{element.korte_beschrijving}</p>
    </div>

</main>

<Footer></Footer>