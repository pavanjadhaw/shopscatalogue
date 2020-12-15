import axios from 'axios';

const shopsCatalogue = axios.create({
  baseURL: 'https://shopscatalogue.herokuapp.com/v1/graphql',
});

export default shopsCatalogue;
