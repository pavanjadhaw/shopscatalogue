import normalizeString from '../utils/normalize-string';

export const limit = 20;

const categoryTitles = [
  { title: 'Arts & Crafts', emoji: '🎨' },
  { title: 'Clothing', emoji: '👗' },
  { title: 'Health & Beauty', emoji: '💊' },
  { title: 'Jewelry', emoji: '💍' },
  { title: 'Sports & Fitness', emoji: '⚽' },
  { title: 'Home Goods', emoji: '🍅' },
  { title: 'Electronics', emoji: '💻' },
  { title: 'Food & Beverages', emoji: '🍸' },
  { title: 'Other', emoji: '🌱' },
];

export const categories = categoryTitles.map(category => ({
  ...category,
  slug: normalizeString(category.title),
}));

export const categoriesMap = categories.reduce(
  (acc, { slug, ...rest }) => ({ ...acc, [slug]: rest }),
  {},
);
