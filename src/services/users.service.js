import {API_KEY} from '../constatns/api.keys';
import {getHttpsPersonsApiPath} from '../constatns/api.paths';

const httpsPersonsApiPath = getHttpsPersonsApiPath();
const apiToken = 'api_token=' + API_KEY;
const headers = new Headers({
    "Accept": "application/json",
    "Content-Type": "application/json"
});

export function getUsers (start, limit) {
    let requestUrl = httpsPersonsApiPath + '?' + apiToken;
    if (limit !== undefined && start !== undefined) {
        requestUrl = httpsPersonsApiPath + '?start=' + start + '&limit=' + limit + '&' + apiToken;
    }

    return fetch(requestUrl, {
        method: 'GET',
        headers: headers
    }).then(response => response.json());
}

export function saveUser(userDetails) {
    let requestUrl = httpsPersonsApiPath + '?' + apiToken;
    return fetch(requestUrl, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({...userDetails})
    })
}

export function deleteUser(userId) {
    return fetch(httpsPersonsApiPath + userId + apiToken, {
        method: 'DELETE',
    }).then(response => response.json());
}

export function updateUser(userId, updatedFields) {
    return fetch(httpsPersonsApiPath + userId + apiToken, {
        method: "PUT",
        headers: headers,
        body: JSON.stringify({...updatedFields})
    })
}