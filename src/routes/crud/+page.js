/** @type {import('./$types').PageLoad} */
export async function load({data}) {
    console.log(data)
    return {Recepten: data.Recepten};
};