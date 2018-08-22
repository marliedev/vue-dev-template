import axios from 'axios';
import { MainConfig } from '../config/main.config';

/**
 * File that wraps the axios library to shorten the way requests are made
 * Sets headers, uses dev or production URL and attaches JWT (if present in localstorage)
 *
 * Usage:
 *   import requestHelper from 'requestHelper';
 *   requestHelper().get('/login')
 *
 * The imported variable needs to be invoked because every time there needs to be the check if there is a jwt in localStorage
 */
export default () => {
    // Default headers
    const headers = {
        Accept: 'application/json'
    };
    // Simply return axios instance with that configuration
    return axios.create({
        baseURL: MainConfig.apiURL,
        headers
    });
};
