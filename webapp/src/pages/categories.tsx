import { Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import Head from 'next/head';
import CategoryCard from '../components/category-card';
import Highlight from '../components/highlight';
import { categories } from '../constants';
import metadata from '../constants/metadata.json';

function Categories() {
  return (
    <>
      <Head>
        <title key="title">All categories {metadata.titleSuffix}</title>
        <meta name="description" content={metadata.description} />
      </Head>

      <Flex
        mt={100}
        mb={100}
        direction="column"
        align="center"
        justify="center"
      >
        <Flex width={['xs', '62rem']} direction="column" paddingX={2}>
          <Highlight backgroundSize="20% 50%" backgroundPosition="0% 50%">
            <Heading
              my={[5, 10]}
              fontSize="4xl"
              fontWeight="bold"
              fontFamily="'Domine', serif"
              color="gray.600"
            >
              Categories
            </Heading>
          </Highlight>

          <Flex mb={100} mt={100}>
            <SimpleGrid columns={[1, 2]} spacing={10}>
              {categories.map(category => (
                <CategoryCard key={category.slug} {...category} />
              ))}
            </SimpleGrid>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default Categories;
