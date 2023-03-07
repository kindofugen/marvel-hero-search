import axios from 'axios';
import { AUTH_HOST, AUTH_PORT } from '../../constants/apiConstants';

export const instance = axios.create({
  baseURL: `${AUTH_HOST + AUTH_PORT}/api`,
  timeout: 1000,
  headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
});
