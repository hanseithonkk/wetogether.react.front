import axios from 'axios';

export const API_SUFFIX = {
  BASEURL: 'http://211.108.8.208:3000',
  USERS: 'users',
  GROUPS: 'groups',
};

export const instance = axios.create({
  baseURL: API_SUFFIX.BASEURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
