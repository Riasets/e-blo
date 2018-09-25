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
        (console as any).log(event);
        const options: RequestInit = {
            body: event.event,
            headers: {'token': event.token, 'Content-Type': 'application/x-www-form-urlencoded'},
            method: "POST",
        };
        return fetch(api + '/api/event', options);
    }
};

export default scheduleFetches;