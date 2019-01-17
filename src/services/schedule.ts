import { AuthFetch } from './instances';
// import axios from 'axios';
import { encodeBody } from "../utils/encode";

const scheduleFetches = {
  getScheduleFetch: (token: Headers) => {
    const options: RequestInit = {
      headers: token,
    };
    return AuthFetch.get('/api/schedule', options);
  },
  postEventFetch: (event: any) => {
    const headers = {
      token: event.token,
    };
    const body = encodeBody(event.event);
    return AuthFetch.post(
      '/api/event',
      body,
      { headers });
  },
};
export default scheduleFetches;
