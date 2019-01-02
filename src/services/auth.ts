import { AuthFetch, NoAuthFetch } from "./instances";

const authFetches = {
  loginFetch: (user: Headers) => {
    const options: RequestInit = {
      headers: user,
    };
    return NoAuthFetch.get('/api/login', options);
  },
  refreshTokenFetch: (token: string) => {
    const options: RequestInit = {
      headers: { token },
    };
    return AuthFetch.get('/api/refresh', options);
  },
  registerUserFetch: (user: string) => {
    const options: RequestInit = {
      body: user,
    };
    return NoAuthFetch.post('/api/register', options);
  },
};

export default authFetches;
