<script>
    /** @type {import('./$types').PageData} */
    export let form;

    import Navbar from '../../navbar/navbar.svelte';
    import Footer from '../../footer.svelte';
    import Header from '../../header.svelte';
</script>

<Header></Header>
<Navbar></Navbar>

<div class="feedback">
    {#if form == undefined}
        form is undefined :C
    {:else if form.success == undefined}
        success is niet gedefinieerd
    {:else if form.success}
        gesaved
    {:else}
    - error {form.feedbackmsg}
    {/if}
</div>

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br><br><br>

<Footer></Footer>