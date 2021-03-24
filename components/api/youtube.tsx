import axios from 'axios';

const KEY = 'AIzaSyCp3_sarjQzTWLhTG5OAZ--CYJGOX45fSU';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 25,
    key: KEY,
  },
});
