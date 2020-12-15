import * as cheerio from 'cheerio';
import * as fs from 'fs';
import * as path from 'path';
import { selectors } from '../src/constants';
import extractListing from '../src/utils/extract-listing';

describe('extract listing function', () => {
  it('extracts individual listing', () => {
    // local clone of shopsmall site
    const html = fs.readFileSync(
      path.resolve(__dirname, '../src/cache/out.html'),
    );
    const $ = cheerio.load(html);

    const rawListings = $(selectors.listings).slice(0, 1);
    const parsedListings = rawListings.map(extractListing($)).get();

    expect(parsedListings[0]).toStrictEqual({
      category: 'Clothing',
      category_normalized: 'clothing',
      description: '',
      name: 'Cottontail Bow & Co.',
      url: 'https://www.cottontailbowco.com',
    });
  });
});
