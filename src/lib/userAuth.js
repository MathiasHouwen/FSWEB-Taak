import jwt from 'jsonwebtoken';
import {PRIVATE_JWT_KEY} from '$env/static/private';
import { getUserFromMail } from './serverDB';

export function setCookie(email, cookies){
    const tokenValue = {email: email}
            const token = jwt.sign(tokenValue, PRIVATE_JWT_KEY)
            cookies.set('account', token, { 
                httpOnly: true,
                secure: true,
                path: '/',
                maxAge: 3600,
                sameSite: 'strict'
            });
}

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

export async function getUserFromCookie(cookies){
    const token = authCookie(cookies)
    const email = token.user.email;
    const user = await getUserFromMail(email)
    return user;
}