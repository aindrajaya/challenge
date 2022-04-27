import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth/';

/**
 * 6. Ini merupakan function untuk melakukan HTTP Request POST untuk menambahkan username, email, dan password
 *    user baru menuju API yang sudah dibuat.
 */
const register = (username, email, password) => {
  return axios.post(API_URL + 'signup', {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + 'signin', {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem('user');
};

export default {
  register,
  login,
  logout,
};
