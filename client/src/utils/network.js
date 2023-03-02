import MD5 from 'crypto-js/md5';
import { BASE_URL, PUBLIC } from '../constants/apiConstants';

const getHash = (ts, privateKey, publicKey) => {
  return MD5(ts + privateKey + publicKey).toString();
};

export const getApiResource = async (res, queryData = '') => {
  const ts = Date.now().toString();
  const apiKey = process.env.REACT_APP_API_KEY_PUBLIC;
  const privateKey = process.env.REACT_APP_API_KEY_PRIVATE;
  const hash = getHash(ts, privateKey, apiKey);
  const url = `${BASE_URL + PUBLIC + res}?ts=${ts}&apikey=${apiKey}&hash=${hash + queryData}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
    return false;
  }
};
