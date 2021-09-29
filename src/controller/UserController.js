import axios from 'axios';
import httpClient from './HttpClient';
import {configConstants} from './ConfigConstant';
const {urlApi, headers} = configConstants;
class UserController {
  constructor() {
    this.basePath = urlApi + '/login_mobile';
  }

  login = async formData => {
    console.log('datas', formData);

    const data = formData;

    return await axios
      .post(`${this.basePath}`, data, {headers})
      .then(res => {
        console.log('res urlapi', res);
        // console.log('res urlapi', result.response.data);
        // return result.response.data;
        return res.data;
      })
      .catch(error => {
        console.log('err', error.response.data);
        alert('error nih');
      });

    // try {
    //   const result = await httpClient.request({
    //     url: `/login_mobile`,
    //     // url: this.basePath,
    //     method: 'POST',
    //     data: {
    //       username: email,
    //       password,
    //       token: '',
    //       token_firebase: 'token test',
    //       device: 'ios',
    //       mac: 'mac test',
    //     },
    //   });
    //   console.log('result login api', result.user);
    //   return result.user;
    // } catch (error) {
    //   console.log('err', error);
    //   return Promise.reject(error);
    // }
  };

  logout = () => null;
}

export default new UserController();
