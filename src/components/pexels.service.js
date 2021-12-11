const restEndpoint = "https://api.pexels.com/v1/search?locale=pt-BR&query=";

export const searchApi = async (searchBy, quantity) => {
    const response = await fetch(restEndpoint + searchBy + '&per_page=' + quantity, {
        method: 'get',
        headers: new Headers({
            'Authorization': 'Bearer 563492ad6f91700001000001dac507b22f25415c861a3bd1f27322ea'
        })
    });
    return await response.json();
};
