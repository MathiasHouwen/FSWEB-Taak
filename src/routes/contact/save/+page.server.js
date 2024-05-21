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
        const data = await request.formData();
        const naam = data.get('naam')
        const voornaam = data.get('voornaam')
        const email = data.get('email')
        const msg = data.get('msg')

        const gevonden = await supabase.from("form/contact").select("*")
                                 .eq("naam", naam)
                                 .eq("voornaam", voornaam)
                                 .eq("email", email)
                                 .eq("msg", msg)
        if (gevonden.data.length > 0) {
            return {
                success: 0
            }
        }
        else {
            const {data,error} = await db.from("form/contact").insert([
                {
                    naam: naam,
                    voornaam: voornaam,
                    email: email,
                    msg : msg
                }
            ]).select()
            return {
                success: 1
            }
        }
	}
};