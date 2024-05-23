import bcrypt from 'bcrypt';
import {PRIVATE_PEPPER, PRIVATE_JWT_KEY} from '$env/static/private';
import { getHashFromUser, signUp } from '../../lib/serverDB';
import jwt from 'jsonwebtoken';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    return {};
};

/** @type {import('./$types').Actions} */
export const actions = {
    signup: async ({request}) => {
        const formData = await request.formData();
        const pass = formData.get('pass')
        const email = formData.get('email-log')


        const hash = await bcrypt.hash(pass + PRIVATE_PEPPER, 10)
        signUp(email, hash)
	},

    login: async ({request, cookies}) => {
        const formData = await request.formData();
        const pass = formData.get('pass')
        const email = formData.get('email-log')

        const hashDB = await getHashFromUser(email)

        const success = await bcrypt.compare(pass + PRIVATE_PEPPER, hashDB)

        if(success){
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
        return success
	}
}