#!/usr/bin/env node
import * as cheerio from 'cheerio';
import * as ora from 'ora';
import { maxListings, selectors, shopsmallecommUrl } from './constants';
import handleListing from './helpers/handle-listing';
import scrapingBee from './services/scrapingbee';
import extractListing from './utils/extract-listing';

(async () => {
  const spinner = ora().start();
  spinner.info('booting up...');

  // local save of shopsmallecomm for testing (so we dont have to make exhaust scrapingbee api calls)
  // const html = fs.readFileSync(
  //   path.resolve(__dirname, '../../src/cache/out.html'),
  // );

  // fetch shopsmallecomm
  spinner.start('loading website into memory.');
  const html = await scrapingBee({
    params: {
      url: shopsmallecommUrl,
    },
  }).then(res => res.data);

  spinner.info('loaded website in memory.');
  spinner.info('parsing nodes, selecting all listings.');

  const $ = cheerio.load(html);
  const rawListings = $(selectors.listings).slice(0, maxListings);
  const parsedListings = rawListings.map(extractListing($)).get();

  spinner.info(`extracted ${maxListings} listings.`);

  for (const listing of parsedListings) {
    await handleListing(listing);
  }
})();
