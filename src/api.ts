import axios from 'axios';

const API_URL = 'http://18.130.69.29';

export const fetcher = (method: Method, endpoint: string, data: {} = {}) =>
  new Promise((resolve, reject) => {
    const url = API_URL + endpoint;
    axios({
      method,
      url,
      data,
    })
      .then((res) => {
        console.log({ res });
        resolve(res?.data);
      })
      .catch((err) => {
        console.error({ err });
        reject(err);
      });
  });

export const fetcherWithToken = (
  method: Method,
  endpoint: string,
  data: {} = {},
) => {
  const authToken = localStorage.getItem('authToken');

  return new Promise((resolve, reject) => {
    const url = API_URL + endpoint;
    axios({
      method,
      url,
      data,
      headers: {
        Authorization: `JWT ${authToken}`,
      },
    })
      .then((res) => {
        console.log({ res });
        resolve(res?.data);
      })
      .catch((err) => {
        console.error({ err });
        reject(err);
      });
  });
};
type Method = 'GET' | 'POST' | 'PUT';
