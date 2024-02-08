import CryptoJS from 'crypto-js';

const secretKey = process.env.REACT_APP_ENCRYPTION_KEY;

export const encryptValues = (values) => {
  const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(values), secretKey).toString();
  return encryptedData;
};

export const decryptValues = (queryText) => {
  const decryptedValues = JSON.parse(CryptoJS.AES.decrypt(queryText, secretKey).toString(CryptoJS.enc.Utf8));

  return decryptedValues;
};
