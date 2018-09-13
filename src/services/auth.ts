import {api} from './constants';

const authFetches = {
    loginFetch: (user: Headers) => {
        const options: RequestInit = {
            headers: user,
            method: "GET",
        };
        return fetch(api + '/api/login', options);
    },
    registerUserFetch: (user: string) => {
        const options: RequestInit = {
            body: user,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            method: "POST",
        };
        return fetch(api + '/api/register', options);
    }
};

export default authFetches