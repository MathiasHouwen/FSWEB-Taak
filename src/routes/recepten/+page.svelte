<script>
    /** @type {import('./$types').PageData} */
    export let data;

    import Navbar from "../navbar.svelte";
    import Footer from "../footer.svelte";
    import Header from "../header.svelte";
</script>

<Header></Header>
<Navbar></Navbar>

<main>
    <div class="container">
        <div class="item item1">Item 1</div>
        <div class="item item2">Item 2</div>
        <div class="item item3">Item 3</div>
        <div class="item item1">Item 4</div>
        <div class="item item2">Item 5</div>
        <div class="item item3">Item 6</div>
    </div>

    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>vv
</main>

<Footer></Footer>