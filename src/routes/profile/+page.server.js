import jwt from 'jsonwebtoken';
import {PRIVATE_JWT_KEY} from '$env/static/private';
import { getUserFromMail } from '../../lib/serverDB';


/** @type {import('./$types').PageServerLoad} */
export async function load({cookies}) {
    const user = await getUserFromCookie(cookies)

    console.log(user)
    return {
        email: user[0].email,
        recepten: user[0].fav_recepten
    }
};

function authToken(token){
    let user
    try{
        user = jwt.verify(token, PRIVATE_JWT_KEY)
    } catch{}
    return user
}

function authCookie(cookies){
    const token = cookies.get('account')
    if(token == undefined || token == null){
        return {
            succes: false,
            user: null
        }
    }

    const user = authToken(token)
    if(user == undefined || token == null){
        return {
            succes: false,
            user: null
        }
    }

    return{
        succes: true,
        user: user
    }
}

async function getUserFromCookie(cookies){
    const token = authCookie(cookies)
    const email = token.user.email;
    const user = await getUserFromMail(email)
    return user;
}