import axios from 'axios';
import { SHOPSCATALOGUE_API_ENDPOINT } from '../constants';

const shopsCatalogue = axios.create({
  baseURL: SHOPSCATALOGUE_API_ENDPOINT,
});

export default shopsCatalogue;
