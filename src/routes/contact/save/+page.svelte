<script>
    /** @type {import('./$types').PageData} */
    export let form;
</script>

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