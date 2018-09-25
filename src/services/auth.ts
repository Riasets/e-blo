import {api} from './constants';

const authFetches = {
    loginFetch: (user: Headers) => {
        const options: RequestInit = {
            headers: user,
            method: "GET",
        };
        return fetch(api + '/api/login', options);
    },
    refreshTokenFetch: (token: string) => {
        const options: RequestInit = {
            headers: {'token': token},
            method: "GET"
        };
        return fetch(api + '/api/refresh', options);
    },
    registerUserFetch: (user: string) => {
        const options: RequestInit = {
            body: user,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            method: "POST",
        };
        return fetch(api + '/api/register', options);
    },
};

export default authFetches