import { selectors } from '../constants';
import { Site } from '../types';
import normalizeString from './normalize-string';

const extractListing = ($: cheerio.Root) => (
  _index: number,
  element: cheerio.Element,
): Site => {
  const current = $(element);
  const category = current.find(selectors.category).text();
  const name = current.find(selectors.name).text();
  const url = current.find(selectors.url).attr('href') as string;

  // normalizing category so that its easier to work with on client side.
  // /websites/category/cooking-and-food => should return all websites in cooking and food category
  const category_normalized = normalizeString(category);

  return {
    url,
    name,
    category,
    category_normalized,
    description: '',
  };
};

export default extractListing;
