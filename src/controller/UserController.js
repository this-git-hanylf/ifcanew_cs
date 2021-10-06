import axios from 'axios';
import httpClient from './HttpClient';
import {configConstants} from './ConfigConstant';
const {urlApi, headers} = configConstants;
class UserController {
  constructor() {
    this.basePath = urlApi + '/login_mobile';
  }

  login = async formData => {
    // console.log('datas', formData);

    const data = formData;

    return await axios
      .post(`${this.basePath}`, data, {headers})
      .then(res => {
        // console.log('res urlapi', res);
        // console.log('res urlapi', result.response.data);
        // return result.response.data;
        return res.data;
      })
      .catch(error => {
        console.log('err', error.response.data);
        alert('error nih');
      });
  };

  logout = () => null;
}

export default new UserController();
