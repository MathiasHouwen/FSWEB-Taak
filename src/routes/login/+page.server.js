/** @type {import('./$types').PageServerLoad} */
export async function load() {
    return {};
};

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({request}) => {
        const formData = await request.formData();
        const email = formData.get('email-log')
        const password = formData.get('pass')

        signUpUser(email, password)
	}
};