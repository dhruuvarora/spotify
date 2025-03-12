import {backendURL} from './config';

export const makeUnauthenticatedPOSTrequest = async(route , body) => {
    const response = await fetch(backendURL +route, {
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(body),
    });
    const formattedresponse = await response.json();
    return formattedresponse;
};

export const makeAuthenticatedPOSTRequest = async(route , body) => {

    const token = getToken();

    const response = await fetch(backendURL +route, {
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization" : `Bearer ${token}`,
        },
        body:JSON.stringify(body),
    });
    const formattedresponse = await response.json();
    return formattedresponse;
};

const getToken = () =>{
   
    const accessToken = document.cookie.replace(
         /(?:(?:^|.*;\s*)token\s* = \s*([^;]*).*$)|^.*$/,"$1"
    );
    return accessToken
}