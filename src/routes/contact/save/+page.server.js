import {PUBLIC_KEY, PUBLIC_SERVER} from '$env/static/public';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(PUBLIC_SERVER, PUBLIC_KEY);

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

        const {data,error} = await supabase.from("form").insert([
            {
                naam: naam,
                voornaam: voornaam,
                email: email,
                msg : msg
            }
        ]).select()
        console.log(error)
        return {
            success: 1,
            feedbackmsg: error
        }
	}
};