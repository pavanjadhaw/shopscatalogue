import getSiteDescription from '../src/utils/get-site-description';

describe('getSiteDescription function', () => {
  // default timeout is 5000 which doesnt seem to be enough
  jest.setTimeout(30000);

  it('fetches site description from site metadata', () => {
    return getSiteDescription('https://www.houseofbijoux.co.uk').then(res =>
      expect(res).toBe(
        'The home of statement Jewellerry & Acessories for all.',
      ),
    );
  });
});
