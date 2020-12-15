import { Button, chakra, Flex, HStack, Input } from '@chakra-ui/react';
import { default as NextLink } from 'next/link';
import React, { useState } from 'react';
import { FiArrowLeft, FiArrowRight, FiHome } from 'react-icons/fi';
import { limit } from '../constants';
import { Site } from '../generated/graphql';
import Highlight from './highlight';
import Masnory from './masnory';
import SiteCard from './site-card';

const search = (str, match) => str.toLowerCase().includes(match.toLowerCase());

type SitesListProp = {
  sites: Site[];
  count?: number;
  page?: number;
  prefix: string;
  loading: boolean;
};

function SitesList({
  sites = [],
  loading,
  count = 0,
  page,
  prefix,
}: SitesListProp) {
  const [match, setMatch] = useState('');

  let next;
  const maxPage = count / limit;
  if (page < maxPage) {
    next = (
      <HStack spacing={4}>
        {page > 1 && (
          <NextLink href={`${prefix}/${page - 1}`} passHref>
            <Button
              as="a"
              leftIcon={<FiArrowLeft />}
              variant="ghost"
              colorScheme="pink"
              bgColor="white"
              shadow="md"
              _hover={{
                shadow: 'xl',
                transform: 'scale(1.1)',
              }}
            >
              Previous Page
            </Button>
          </NextLink>
        )}
        <NextLink href={`${prefix}/${page + 1}`} passHref>
          <Button
            as="a"
            rightIcon={<FiArrowRight />}
            variant="ghost"
            colorScheme="pink"
            shadow="md"
            bgColor="white"
            _hover={{
              shadow: 'xl',
              transform: 'scale(1.1)',
            }}
          >
            Next Page
          </Button>
        </NextLink>
      </HStack>
    );
  } else {
    next = !loading && (
      <>
        <Highlight>
          <chakra.p
            fontSize="2xl"
            fontWeight="bold"
            fontFamily="'Domine', serif"
            color="gray.600"
            maxW={['300px', '600px']}
          >
            You have reached the end of the internet
          </chakra.p>
        </Highlight>
        <HStack spacing={4} mt={10}>
          <NextLink href={`/sites/page/${page - 1}`} passHref>
            <Button
              as="a"
              leftIcon={<FiArrowLeft />}
              colorScheme="cyan"
              size="md"
              variant="ghost"
              shadow="md"
              bgColor="white"
              _hover={{
                shadow: 'xl',
                transform: 'scale(1.1)',
              }}
            >
              Previous
            </Button>
          </NextLink>

          <NextLink href="/" passHref>
            <Button
              as="a"
              rightIcon={<FiHome />}
              colorScheme="pink"
              size="md"
              variant="ghost"
              shadow="md"
              bgColor="white"
              _hover={{
                shadow: 'xl',
                transform: 'scale(1.1)',
              }}
            >
              Home
            </Button>
          </NextLink>
        </HStack>
      </>
    );
  }

  return (
    <Flex mt={100} mb={100} direction="column" align="center" justify="center">
      <Flex width={['xs', '62rem']} direction="column" paddingX={2}>
        <Input
          value={match}
          onChange={e => setMatch(e.target.value)}
          id="match"
          type="text"
          size="lg"
          height="60px"
          placeholder="Search"
          shadow="0 6px 18px 0 rgba(0,35,90,.08), 0 0 2px 0 rgba(0,35,90,.06)"
          outline="none"
          border="none"
          _focus={{
            shadow:
              '0 6px 18px 0 rgba(0,35,90,.08), 0 0 2px 0 rgba(0,35,90,.06)',
            outline: 'none',
            border: 'none',
          }}
        />

        <Highlight
          mt={4}
          p={4}
          backgroundSize="100% 40%"
          backgroundPosition="0% 60%"
          alignSelf="flex-end"
          _hover={{
            transform: 'scale(1.1)',
          }}
        >
          <NextLink href="/categories" passHref>
            <chakra.a
              fontSize="lg"
              p={4}
              fontWeight="bold"
              fontFamily="'Domine', serif"
              color="gray.600"
            >
              Categories
            </chakra.a>
          </NextLink>
        </Highlight>
      </Flex>

      <Masnory mt={4}>
        {sites
          .filter(({ name }) => search(name, match))
          .map(site => (
            <SiteCard key={site.id} {...site} />
          ))}
      </Masnory>

      {next}
    </Flex>
  );
}

export default SitesList;
