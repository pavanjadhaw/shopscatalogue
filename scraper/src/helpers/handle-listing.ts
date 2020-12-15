import * as ora from 'ora';
import { uniqueUrlViolationMessage } from '../constants';
import { Site } from '../types';
import getSiteDescription from '../utils/get-site-description';
import createSite from './create-site';

async function handleListing(listing: Site): Promise<void> {
  const spinner = ora().start();

  // fetch sites description using scrapingbee
  spinner.start(`fetching more information for ${listing.url}`);
  const description = await getSiteDescription(listing.url);

  // make api request to save listing to database
  return await createSite({ ...listing, description })
    .then(res => {
      if (res.data && res.data.errors) {
        if (res.data.errors[0].message === uniqueUrlViolationMessage) {
          spinner.warn(`skipping, already exists ${listing.url}`);
        } else {
          spinner.fail(`unknown error while saving ${listing.url}`);
        }
      } else {
        spinner.succeed(`saved ${listing.url}`);
      }
    })
    .catch(() => {
      spinner.fail(`unknown error while saving ${listing.url}`);
      // spinner.fail(`error while saving ${listing.url}`);
    });
}

export default handleListing;
