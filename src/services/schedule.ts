import { AuthFetch } from './instances';
import axios from 'axios';
import { encodeBody } from "../utils/encode";

const scheduleFetches = {
  getScheduleFetch: (token: Headers) => {
    const options: RequestInit = {
      headers: token,
    };
    return AuthFetch.get('/api/schedule', options);
  },
  postEventFetch: (event: any) => {
    (console as any).log(event);
    const options: any = {
      data: encodeBody(event.event),
      headers: { token: event.token, 'Content-Type': 'application/x-www-form-urlencoded' },
      url: 'http://localhost:8000/api/event',
      method: "POST",
    };
    return axios('/api/event', options);
  },
};
// TODO исправить инкод на обычный объект, думаю, можно вернуть как было
export default scheduleFetches;
