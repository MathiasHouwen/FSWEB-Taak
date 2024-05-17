import {PUBLIC_KEY, PUBLIC_SERVER} from '$env/static/public';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(PUBLIC_SERVER, PUBLIC_KEY);

export async function loadRecepten(){
    const { data } = await supabase.from('Recepten').select('*');

    return data;
}