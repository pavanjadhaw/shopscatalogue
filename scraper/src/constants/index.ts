export const maxListings = 20;

export const selectors: { [key: string]: string } = {
  listings: 'div.single__listing',
  category: 'h6.web__address',
  name: 'div.company__name > h3',
  url: 'a',
  description: `meta[name='description']`,
};

export const shopsmallecommUrl = 'https://shopsmallecomm.privy.com/';

export const uniqueUrlViolationMessage =
  'Uniqueness violation. duplicate key value violates unique constraint "site_url_key"';

export const SCRAPINGBEE_API_KEY = process.env.SCRAPINGBEE_API_KEY;
export const SHOPSCATALOGUE_API_ENDPOINT =
  process.env.SHOPSCATALOGUE_API_ENDPOINT;
