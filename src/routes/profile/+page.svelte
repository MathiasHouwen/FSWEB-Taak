<script>
    /** @type {import('./$types').PageData} */
    export let data;

    import Navbar from '../navbar.svelte';
    import Footer from '../footer.svelte';
    import Header from '../header.svelte';

    import { redirect } from '@sveltejs/kit';
    import { goto } from '$app/navigation';


    if(data == null){
        goto('/login')
    }

    if(data.email == null){ 
        alert("Nog niet ingelogd")
        goto('/login')
    }

</script>

<Header></Header>
<Navbar></Navbar>

{#if data == null || data.email == null}
<main class="profile">
    <h1>Hallo stranger</h1>
</main>
{:else}
<main class="profile">
    <h1>Hallo {data.email}</h1>
</main>
{/if}

<br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br>

<Footer></Footer>