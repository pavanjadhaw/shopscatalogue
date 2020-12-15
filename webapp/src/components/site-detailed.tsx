import {
  Box,
  Button,
  chakra,
  Flex,
  Heading,
  Icon,
  useClipboard,
} from '@chakra-ui/react';
import { default as NextLink } from 'next/link';
import React from 'react';
import { FiArrowUpRight, FiLink } from 'react-icons/fi';
import { Site } from '../generated/graphql';
import Highlight from './highlight';

type SiteDetailedProps = {
  site: Site;
};

function SiteDetailed({ site }: SiteDetailedProps) {
  const { hasCopied, onCopy } = useClipboard(site.url);

  return (
    <Flex mt={100} mb={100} direction="column" align="center" justify="center">
      <Flex width={['xs', '62rem']} direction="column" paddingX={2}>
        <Box my={[5, 10]}>
          <Highlight backgroundSize="20% 100%" backgroundPosition="0% 0%">
            <Heading
              fontSize="6xl"
              fontWeight="bold"
              fontFamily="'Domine', serif"
              color="gray.700"
            >
              {site.name}
            </Heading>
          </Highlight>

          <Flex align="center">
            <chakra.p
              mt={4}
              mb={4}
              fontSize="md"
              fontWeight="500"
              fontFamily="Poppins,sans-serif"
              color="gray.700"
            >
              {site.url}
            </chakra.p>

            {hasCopied ? (
              <chakra.span
                m={2}
                fontSize="sm"
                fontWeight="bold"
                onClick={onCopy}
                color="pink.500"
              >
                copied
              </chakra.span>
            ) : (
              <Icon
                m={2}
                size="sm"
                onClick={onCopy}
                as={FiLink}
                aria-label="copy url to clipboard"
                color="pink.500"
              />
            )}
          </Flex>

          <NextLink href={`/category/${site.category_normalized}`} passHref>
            <chakra.h6
              as="a"
              cursor="pointer"
              fontSize="md"
              fontWeight="bold"
              fontFamily="'Domine', serif"
              color="gray.600"
              _hover={{
                color: 'pink.500',
              }}
            >
              {site.category}
            </chakra.h6>
          </NextLink>

          <chakra.p
            my={20}
            fontSize="2xl"
            fontWeight="500"
            fontFamily="Poppins,sans-serif"
            color="gray.600"
            maxW="600px"
          >
            {site.description}
          </chakra.p>

          <NextLink href={site.url} passHref>
            <Button
              as="a"
              rightIcon={<FiArrowUpRight />}
              colorScheme="pink"
              size="lg"
              variant="outline"
              rounded="sm"
              _hover={{
                boxShadow: 'xl',
                transform: 'scale(1.1)',
              }}
            >
              shop now
            </Button>
          </NextLink>
        </Box>
      </Flex>
    </Flex>
  );
}

export default SiteDetailed;
