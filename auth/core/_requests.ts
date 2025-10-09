import axios from "axios";
import Cookies from "js-cookie";
import { type UserModel } from "./_models";
import {
  GET_USER_BY_ACCESSTOKEN_URL,
  LOGIN_URL,
  REGISTER_URL,
  REFRESH_TOKEN,
  REQUEST_PASSWORD_URL,
} from "../../config/env";

// Server should return { message, user, accessToken, refreshToken }
export function login(user: any) {
  return axios.post(LOGIN_URL, user);
}

// Server should return { message, user }
export function register(user: any) {
  return axios.post(REGISTER_URL, user);
}

// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(email: string) {
  return axios.post<{ result: boolean }>(REQUEST_PASSWORD_URL, {
    email,
  });
}

export function getUserByToken(token: string) {
  return axios.post<{ valid: boolean; user: UserModel }>(
    GET_USER_BY_ACCESSTOKEN_URL,
    { token: token }
  );
}

export function refreshToken() {
  const refreshToken = Cookies.get("refreshtoken");
  return axios.post(REFRESH_TOKEN, { refreshToken });
}
