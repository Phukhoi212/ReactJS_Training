

import axios from 'axios';

const baseUrl = 'https://itunes.apple.com/us/rss/topmovies/limit=50/json'

export default function callApi(endpoint, method = 'GET', body) {
    return axios({
        method: method,
        url: `${baseUrl}/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err);
    });
}