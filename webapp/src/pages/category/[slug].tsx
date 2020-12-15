import { useRouter } from 'next/dist/client/router';
import SitesByCategory from '../../components/sites-by-category';
import withApollo from '../../utils/withApollo';

const CategoryPage = () => {
  const {
    query: { slug },
  } = useRouter();

  return <SitesByCategory slug={slug as string} />;
};

export default withApollo({ ssr: true })(CategoryPage);
