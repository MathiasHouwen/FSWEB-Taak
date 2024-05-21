import { saveToForm } from '$lib/serverDB'

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    return {};
};

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({request}) => {
        const formData = await request.formData();
        const naam = formData.get('naam')
        const voornaam = formData.get('voornaam')
        const email = formData.get('email')
        const msg = formData.get('msg')

        return saveToForm(naam, voornaam, email, msg)
	}
};