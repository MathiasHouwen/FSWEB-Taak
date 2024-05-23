import { getUserFromCookie } from '../../lib/userAuth'

/** @type {import('./$types').PageServerLoad} */
export async function load({cookies}) {

    const token = cookies.get('account')
    if(token == undefined || token == null){
        return {
            email: null,
            recepten: null
        }
    }

    const user = await getUserFromCookie(cookies)

    return {
        email: user[0].email,
        recepten: user[0].fav_recepten
    }
};