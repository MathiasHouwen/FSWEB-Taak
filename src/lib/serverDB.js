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

export async function signUp(email, hash){
    const {data,error} = await supabase.from("Users").insert([
        {
            email: email,
            pass: hash
        }
    ]).select()
}

export async function getHashFromUser(email){
    let { data, error } = await supabase.from('Users')
        .select('pass')
        .eq('email', email)
    return data[0].pass
}

export async function getUserFromMail(email){
    let { data, error } = await supabase.from('Users')
        .select('*')
        .eq('email', email)
    return data
}