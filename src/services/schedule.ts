import {api} from "./constants";

const scheduleFetches = {
    getScheduleFetch: (token: Headers) => {
        const options: RequestInit = {
            headers: token,
            method: "GET"
        };
        return fetch(api + '/api/schedule', options);
    },
    postEventFetch: (event: any) => {
        const options: RequestInit = {
            headers: event.token,
            body: event.event,
            method: "POST",
        };
        return fetch(api + '/api/event', options);
    }
};

export default scheduleFetches;