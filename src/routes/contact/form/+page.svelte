<script>
    /** @type {import('./$types').PageData} */
    // data uit page.js (eventueel doorgelinkt vanuit page.server.js)
    // export let data;

    
	/** @type {import('./$types').ActionData} */
	// data uit actions van page.server.js
    export let form;

    let naam = "iemand"
    let achternaam = "iemand"
    let email = "example@gmail.com"
    let msg = "HIHIHIH"

    import Navbar from "../navbar.svelte";
    import Footer from "../footer.svelte";
    import Header from "../header.svelte";
</script>


<Header></Header>
<Navbar></Navbar>

<form method="POST" action="./contact/save">
    <input type="text" id="fname" name="firstname" placeholder="Your name.." bind:value="{naam}">
    <input type="text" id="lname" name="lastname" placeholder="Your last name.." bind:value="{achternaam}"><br>
    
    <input type="email" id="fmail" name="email" placeholder="email.." bind:value="{email}"><br>

    <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px" bind:value="{msg}"></textarea><br>
    <button>SUBMIT TO ME!</button>
</form>

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<Footer></Footer>