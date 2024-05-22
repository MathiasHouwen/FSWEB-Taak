/** @type {import('./$types').PageServerLoad} */
import { loadRecepten } from '$lib/serverDB'

export async function load({ params }) {
    const recepten = await loadRecepten();
    const recept = recepten.find((recept) => (recept.id).toString() === params.slug)
	return {
		recept
	};
}