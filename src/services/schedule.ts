import { AuthFetch } from './instances';

const scheduleFetches = {
  getScheduleFetch: (token: Headers) => {
    const options: RequestInit = {
      headers: token,
    };
    return AuthFetch.get('/api/schedule', options);
  },
  postEventFetch: (event: any) => {
    (console as any).log(event);
    const options: RequestInit = {
      body: event.event,
      headers: { token: event.token },
    };
    return AuthFetch.post('/api/event', options);
  },
};

export default scheduleFetches;
