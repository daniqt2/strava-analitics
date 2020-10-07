import axios from 'axios';
import { CLIENTSECRET } from '../config/constants';

class AuthService {
  login(c) {
    var authurl =
      'https://www.strava.com/oauth/token?client_id=40144' +
      '&client_secret=' +
      CLIENTSECRET +
      '&code=' +
      c +
      '&grant_type=authorization_code';
    return axios.post(authurl);
  }

  info(token) {
    var getUrl = 'https://www.strava.com/api/v3/athlete?access_token=' + token;
    return axios.get(getUrl, {
      headers: {
        accept: 'application/json',
        authorization: 'Bearer ' + token,
        activity: 'read_all'
      }
    });
  }

  activities(token) {
    return axios.get('https://www.strava.com/api/v3/athlete/activities?', {
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
  }
}

export default new AuthService();
