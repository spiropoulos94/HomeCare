import CryptoJS from 'crypto-js';

const secretKey = process.env.REACT_APP_ENCRYPTION_KEY;

export const generateHash = (values) => {
  const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(values), secretKey).toString();
  return encryptedData;
};
