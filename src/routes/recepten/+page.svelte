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
            <h4>{recept.Naam}</h4>
            <p>{recept.korte_beschrijving}</p>
        </div>
    {/each}
</div>

<br><br><br><br><br><br><br><br><br><br><br>
<Footer></Footer>