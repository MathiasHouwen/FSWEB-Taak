<script>
    /** @type {import('./$types').PageData} */
    
    export let data;

</script>


<ul>
    {#each data.Recepten as recept}
        <li>{recept.Naam}</li>
    {/each}
</ul>