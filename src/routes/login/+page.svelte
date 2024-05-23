<script>
    /** @type {import('./$types').PageData} */
    export let form;

    import Navbar from '../navbar.svelte';
    import Footer from '../footer.svelte';
    import Header from '../header.svelte';


    
    if (typeof window !== 'undefined' && form !== null && form !== undefined) {
        if (form) {
            window.alert("hey ge bent ingeloged");
        } else {
            window.alert("Ongeldige login gegevens");
            console.log(form)
        }
    }

</script>

<Header></Header>
<Navbar></Navbar>

<form method="post" action='?/login' class="loginform">
    <label for="email-log">email</label><br>
    <input type="email" id="email-log" name="email-log" placeholder="email.."><br>

    <label for="pass">password</label><br>
    <input type="password" id="pass" name="pass" placeholder="password.."><br>

    <button type="submit">login</button>
    <button type="submit" formaction='?/signup'>SignUp</button>
</form>

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>


<Footer></Footer>