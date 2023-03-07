import MD5 from 'crypto-js/md5';
import { BASE_URL, PUBLIC } from '../constants/apiConstants';

export const getTimeStamp = () => {
  return Date.now().toString();
};

export const getHash = () => {
  const ts = getTimeStamp();
  const publicKey = process.env.REACT_APP_API_KEY_PUBLIC;
  const privateKey = process.env.REACT_APP_API_KEY_PRIVATE;
  return MD5(ts + privateKey + publicKey).toString();
};

export const getApiResource = async (res, queryData = '') => {
  const ts = getTimeStamp();
  const apiKey = process.env.REACT_APP_API_KEY_PUBLIC;
  const hash = getHash();
  const url = `${BASE_URL + PUBLIC + res}?ts=${ts}&apikey=${apiKey}&hash=${hash + queryData}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return false;
  }
};
