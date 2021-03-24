import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 2KB83E3E0rp8f0AHVAzq7RbhZh98aJ3T_OZigyv2GZg',
  },
});
