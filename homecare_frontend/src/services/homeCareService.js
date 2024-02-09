import { setupApiInstance } from './api';
import patientsMockData from '../mockData/patients.json';
import reportsMockData from '../mockData/reports.json';

const BackendClient = setupApiInstance({
  baseURL: `https://localhost:8080`, // this is a proxy to the narrowin server
  headers: {
    'Content-Type': 'application/json'
  }
});

export const makeRequest = async (method, endpoint, bodyParams = {}, additionalParams = {}) => {
  try {
    const response = await BackendClient.request({
      method: method,
      url: endpoint,
      data: bodyParams,
      ...additionalParams
    });

    const { success, data, error } = response.data;

    if (success === 'true') {
      return data;
    } else {
      throw error;
    }
  } catch (error) {
    console.log(error, { method, endpoint, bodyParams, additionalParams });
    throw error; // Propagate the error for handling in the calling code
  }
};

export const getPatientsList = async (bodyParams = { test: '123' }) => {
  const endpoint = 'api/patients';
  return await makeRequest('POST', endpoint, bodyParams);
};

export const getPatientsMock = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(patientsMockData);
    }, 1000);
  });
};

export const getReportsMock = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(reportsMockData);
    }, 1000);
  });
};
