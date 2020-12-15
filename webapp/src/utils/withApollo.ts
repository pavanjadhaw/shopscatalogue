import apolloClient from '../graphql/apolloClient';
import createWithApollo from './createWithApollo';

const withApollo = createWithApollo(apolloClient);

export default withApollo;
