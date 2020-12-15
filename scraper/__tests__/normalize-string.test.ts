import normalizeString from '../src/utils/normalize-string';

describe('normalizeString function', () => {
  it('normalizes string', () => {
    expect(normalizeString('House of Bijoux')).toBe('house-of-bijoux');
  });
});
