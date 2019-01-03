import { AuthFetch, NoAuthFetch } from "./instances";
import { encodeBody } from "../utils/encode";

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
  registerUserFetch: (user: any) => {
    const body = encodeBody(user);
    return NoAuthFetch.post('/api/register', body);
  },
};

export default authFetches;
