import axios from 'axios';
import { SCRAPINGBEE_API_KEY } from '../constants';

const scrapingBee = axios.create({
  baseURL: 'https://app.scrapingbee.com/api/v1',
  params: {
    api_key: SCRAPINGBEE_API_KEY,
  },
});

export default scrapingBee;
