<script>
    /** @type {import('./$types').PageData} */
    export let data;

    import Navbar from '../navbar.svelte';
    import Footer from '../footer.svelte';
    import Header from '../header.svelte';
</script>

<Header></Header>
<Navbar></Navbar>

<form method="post" action='?/login'>
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