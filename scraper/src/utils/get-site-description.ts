import * as cheerio from 'cheerio';
import { selectors } from '../constants';
import scrapingBee from '../services/scrapingbee';

const getSiteDescription = async (url: string): Promise<string> => {
  try {
    const html = await scrapingBee({
      params: {
        url,
      },
    }).then(response => response.data);

    const $ = cheerio.load(html);
    const description = $(selectors.description).attr('content');

    return description || '';
  } catch (error) {
    return '';
  }
};

export default getSiteDescription;
