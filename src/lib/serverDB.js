import {PUBLIC_KEY, PUBLIC_SERVER} from '$env/static/public';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(PUBLIC_SERVER, PUBLIC_KEY);

export async function loadRecepten(){
    const { data } = await supabase.from('Recepten').select('*');

    return data;
}

export async function saveToForm(naam, voornaam, email,  msg){
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

export async function signUpUser(email, password){
    let { data, error } = await supabase.auth.signUp({
        email: email,
        password: password
    })
}

export async function logInUser(email, password){
    let { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    })
}