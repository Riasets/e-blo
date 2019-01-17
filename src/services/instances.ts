import axios from 'axios';
import { api } from "./constants";

export const NoAuthFetch = axios.create({
  baseURL: api,
});

NoAuthFetch.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export const AuthFetch = axios.create({
  baseURL: api,
});

AuthFetch.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// AuthFetch.defaults.headers['X-custom-header'] = 'token';
