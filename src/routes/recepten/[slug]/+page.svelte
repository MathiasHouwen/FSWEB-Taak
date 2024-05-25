<script>
    /** @type {import('./$types').PageData} */
    export let data;

    import Navbar from "../../navbar/navbar.svelte";
    import Footer from "../../footer.svelte";
    import Header from "../../header.svelte";

    console.log(data)
    console.log(data.recept.ingrediënten)

    let count =0;
</script>

<Header></Header>
<Navbar></Navbar>

<main class="recept">
    <h1>{data.recept.Naam}</h1>
    <p>{data.recept.korte_beschrijving}</p>
    
    <div class="main-info">
        <span>{data.recept.tijdsduur}min</span>
        {#each data.recept.atributen as atribute}
            <span>{atribute}</span>
        {/each}
    </div>
    
    <br>
    
    <div id="lijsten">
        <ul>
            {#each data.recept.ingrediënten as ing, index}
                <li>{ing} {data.recept.hoeveelheden[index]}{data.recept.eenheid[index]}</li>
            {/each}
        </ul>
        
        <br>
        
        <ol>
            {#each data.recept.stappen as stap}
                <li>{stap}</li>
            {/each}
        </ol>
    </div>

    <img src="{data.recept.afbeelding}" alt="">

</main>

<Footer></Footer>