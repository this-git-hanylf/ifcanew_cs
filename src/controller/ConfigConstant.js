import {API_URL} from '@env';
import {sessions} from '../helpers';

getToken();
export const configConstants = {
  urlApi: API_URL,
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
    token: '',
  },
  headersMultiple: {
    'Content-Type': 'multipart/form-data',
  },
};

async function getToken() {
  configConstants.headers.token = await sessions.getSess('@Token');
}

console.log('configConstants', configConstants.headers);
