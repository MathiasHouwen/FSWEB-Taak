import { goto } from '$app/navigation';
import { loadRecepten } from '$lib/serverDB'
import { createRow, delteRowFromID, updateRow } from '../../lib/serverDB';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const data = await loadRecepten();

    return {
        Recepten: data
    };
};

/** @type {import('./$types').Actions} */
export const actions = {
    create: async ({request}) => {
        const formData = await request.formData();
        const naam = formData.get('naam')
        const msg = formData.get('msg')

        createRow(naam, msg)

	},
    
	delete: async ({request}) => {
        const formData = await request.formData();
        const id = formData.get('delteID')

        delteRowFromID(id)
	},

    update: async ({request}) => {
        const formData = await request.formData();
        const id = formData.get('updateID')
        const updateNaam = formData.get('updateNaam')
        const naam = formData.get('naam')
        const updateMSG = formData.get('updateMSG')
        const msg = formData.get('msg')

        updateRow(id, updateNaam, naam, updateMSG, msg )
	}
};