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

export async function delteRowFromID(id){
    const { error } = await supabase.from('Recepten')
                                        .delete()
                                        .eq('id', id)
}

export async function createRow(naam, msg){

    const {data,error} = await supabase.from("Recepten").insert([
        {
            Naam: naam,
            korte_beschrijving: msg
        }
    ]).select()


}

export async function updateRow(id, updateNaam, naam, updateMSG, msg ){

    console.log(id)
    console.log(updateNaam)
    console.log(naam)
    console.log(updateMSG)
    console.log(msg)

    if(updateNaam){
        const { error } = await supabase
            .from('Recepten')
            .update({ Naam: naam })
            .eq('id', id)
    }

    if(updateMSG){
        const { error } = await supabase
            .from('Recepten')
            .update({ korte_beschrijving: msg })
            .eq('id', id)
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