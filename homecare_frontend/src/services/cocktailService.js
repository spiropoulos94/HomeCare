// This is a mock service used in local development before actual backend creation

import { setupApiInstance } from './api';

const CocktailClient = setupApiInstance({
  baseURL: `http://localhost:3000`, // this is a proxy to the narrowin server
  headers: {
    'Content-Type': 'application/json'
  }
});

export const makeRequest = async (method, endpoint, bodyParams = {}, additionalParams = {}) => {
  try {
    const response = await CocktailClient.request({
      method: method,
      url: endpoint,
      data: bodyParams,
      ...additionalParams
    });

    const { status, data, error } = response;

    if (status === 200) {
      return data;
    } else {
      throw error;
    }
  } catch (error) {
    console.log('Error on', method, ' at ', endpoint, error);
    throw error; // Propagate the error for handling in the calling code
  }
};

export const getCocktails = async () => {
  const endpoint = 'api/json/v1/1/search.php?s=margarita';
  return await makeRequest('GET', endpoint);
};
