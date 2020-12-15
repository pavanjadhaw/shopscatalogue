import { AxiosPromise } from 'axios';
import shopsCatalogue from '../services/shopscatalogue';
import { Site } from '../types';

const createSite = ({
  url,
  name,
  description,
  category,
  category_normalized,
}: Site): AxiosPromise => {
  return shopsCatalogue({
    method: 'post',
    data: {
      query: `
        mutation CreateSite {
          insert_site_one(object: {category: "${category}", category_normalized: "${category_normalized}", description: "${description}", name: "${name}", url: "${url}"}) {
            category
            category_normalized
            description
            id
            name
            url
          }
        }
        `,
    },
  });
};

export default createSite;
