import axios, { AxiosResponse } from 'axios';

axios.defaults.baseURL = 'http://localhost:9000';
axios.interceptors.response.use((response) => {
  return response;
}, function (error) {
  // Set the error message
  error.message = error.response.data.message;
  return Promise.reject(error);
});

class HttpUtil {
  public getAsync<RES>(uri: string): Promise<RES> {
    return axios.get<RES, AxiosResponse<RES>>(uri)
      .then((res: AxiosResponse<RES>) => res.data);
  }

  public postAsync<REQ, RES>(uri: string, data?: REQ): Promise<RES> {
    return axios.post<REQ, AxiosResponse<RES>>(uri, data)
      .then((res: AxiosResponse<RES>) => res.data);
  }

  public deleteAsync<REQ, RES>(uri: string): Promise<RES> {
    return axios.delete<REQ, AxiosResponse<RES>>(uri)
      .then((res: AxiosResponse<RES>) => res.data);
  }
}

export default new HttpUtil();