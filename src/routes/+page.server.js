import { loadRecepten, randomeRecept } from '../lib/serverDB';


/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const data = await loadRecepten();

    return {
        Recepten: data
    };
};