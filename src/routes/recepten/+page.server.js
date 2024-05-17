import {PUBLIC_KEY, PUBLIC_SERVER} from '$env/static/public';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(PUBLIC_SERVER, PUBLIC_KEY);

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const { data } = await supabase.from('Recepten').select('*');

    return {
        Recepten: data
    };
};