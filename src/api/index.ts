import axios, { AxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL: "https://63583d4bc27556d2893a7d6f.mockapi.io/api/",
  timeout: 1000,
});

export function getApi(url: string, config: AxiosRequestConfig = {}) {
  return instance.get(url, config);
}

export function postApi(
  url: string,
  data: any,
  config: AxiosRequestConfig = {},
) {
  return instance.post(url, { ...data }, config);
}

export function deleteApi(url: string, config: AxiosRequestConfig = {}) {
  return instance.delete(url, config);
}
