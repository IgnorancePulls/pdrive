import {API_KEY} from '../constatns/api.keys';
import {getHttpsPersonsApiPath} from '../constatns/api.paths';

const httpsPersonsApiPath = getHttpsPersonsApiPath();
const apiToken = 'api_token=' + API_KEY;
const headers = new Headers({
    "Accept": "application/json",
    "Content-Type": "application/json"
});

export function getUsers(start, limit) {
    let requestUrl = httpsPersonsApiPath + '?' + apiToken;
    if (limit !== undefined && start !== undefined) {
        console.log(limit)
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
    }).then(response => response.json());
}

export function deleteUser(userId) {
    let requestUrl = httpsPersonsApiPath + userId + '?' + apiToken;
    return fetch(requestUrl, {
        method: 'DELETE',
    }).then(response => response.json());
}

export function updateUser(userId, updatedFields) {
    let requestUrl = httpsPersonsApiPath + userId + '?' + apiToken;
    return fetch(requestUrl, {
        method: "PUT",
        headers: headers,
        body: JSON.stringify({...updatedFields})
    }).then(response => response.json());
}