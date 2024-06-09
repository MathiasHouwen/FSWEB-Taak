<script>
    /** @type {import('./$types').PageData} */
    // data uit page.js (eventueel doorgelinkt vanuit page.server.js)
    // export let data;

    
	/** @type {import('./$types').ActionData} */
	// data uit actions van page.server.js

    import Navbar from "../navbar/navbar.svelte";
    import Footer from "../footer.svelte";
    import Header from "../header.svelte";
</script>
  

<Header></Header>
<Navbar></Navbar>

<main class="contact">
    <form method="POST" action="./contact/save">
        <div class="name-fields">
            <input type="text" id="voornaam" name="voornaam" placeholder="voornaam..">
            <input type="text" id="naam" name="naam" placeholder="Your last name..">
        </div>
        
        <input type="email" id="email" name="email" placeholder="email.."><br>
    
        <textarea id="msg" name="msg" placeholder="Write something.." style="height:200px"></textarea><br>
        <button type="submit">SUBMIT TO ME!</button>
    </form>
</main>

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<Footer></Footer>