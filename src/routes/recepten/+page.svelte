<script>
    /** @type {import('./$types').PageData} */
    
    export let data;

    import Navbar from "../navbar.svelte";
    import Footer from "../footer.svelte";
    import Header from "../header.svelte";

</script>


<Header></Header>
<Navbar></Navbar>

<div class="container">
    {#each data.Recepten as recept}
        <div class="item">
            <img src="{recept.afbeelding}" alt="{recept.Naam}" class="food-image">
            <h4>{recept.Naam}</h4>
            <p>{recept.korte_beschrijving}</p>
            <a href="/recepten/{recept.id}">Click me!</a>
        </div>
    {/each}
</div>

<Footer></Footer>