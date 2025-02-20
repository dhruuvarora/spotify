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

