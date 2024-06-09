<script>
    /** @type {import('./$types').PageData} */
    export let data;

    import Navbar from "../navbar/navbar.svelte";
    import Footer from "../footer.svelte";
    import Header from "../header.svelte";
</script>

<Header></Header>
<Navbar></Navbar>

<main>

    <!-- DELETE -->
    <div class="delte">
        <form method="POST" action='?/delete'>
            <label>
                ID to remove
                <input type="number" id="delteID" name="delteID">
            </label>
            <button type="submit" >EXPLODE</button>
        </form>
    </div>

    <!-- CREATE -->
    <div class="create">
        <form method="POST" action='?/create'>
            <span>create new row</span>
            <input type="text" id="naam" name="naam" placeholder="naam..">
            <input type="text" id="msg" name="msg" placeholder="beschrijving..">
            <button type="submit" >CREATE!</button>
        </form>
    </div>

    <!-- UPDATE -->
    <div class="update">
        <form method="POST" action='?/update'>
            <span>update</span>
            <label>
                ID to update
                <input type="number" id="updateID" name="updateID">

                <input type="checkbox" id="updateNaam" name="updateNaam">
                <input type="text" id="naam" name="naam">

                <input type="checkbox" id="updateMSG" name="updateMSG">
                <input type="text" id="msg" name="msg">

            </label>
            <button>update!</button>
        </form>
    </div>

    <!-- READ -->
    <table>
        <tr>
            <th>ID</th>
            <th>Naam</th>
            <th>korte_beschrijving</th>
        </tr>
    
        {#each data.Recepten as recept}
        <tr>
            <td>{recept.id}</td>
            <td>{recept.Naam}</td>
            <td>{recept.korte_beschrijving}</td>
        </tr>
        {/each}
    </table>
</main>

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<Footer></Footer>