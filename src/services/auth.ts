import {api} from './constants';

const authFetches = {
    loginFetch: (user: Headers) => {
        const options: RequestInit = {
            headers: user,
            method: "GET",
        };
        (console as any).log(options);
        (console as any).log(user);
        return fetch(api + '/api/login', options);
    },
    registerUserFetch: (user: FormData) => {
        const options: RequestInit = {
            body: user,
            method: "POST",
        };
        return fetch(api + '/api/register', options);
    }
};

export default authFetches