export const getBearerToken = () => {    
    const token =  localStorage.getItem('twk_fwc');
    if(!token) {
        throw new Error('Token not found');
    }

    return{
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
}