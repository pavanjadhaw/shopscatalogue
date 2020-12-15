import { Button, chakra, HStack, IconButton } from '@chakra-ui/react';
import { default as NextLink } from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';
import { Site } from '../generated/graphql';
import { AnimatedCard } from './card';

function SiteCard({
  id,
  category,
  name,
  description,
  url,
  category_normalized,
}: Site) {
  return (
    <AnimatedCard>
      <NextLink href={`/category/${category_normalized}`}>
        <chakra.h6
          mt={4}
          cursor="pointer"
          fontSize="sm"
          fontWeight="bold"
          fontFamily="'Domine', serif"
          color="gray.500"
          _hover={{
            color: 'pink.400',
          }}
        >
          {category}
        </chakra.h6>
      </NextLink>

      <NextLink href={`/site/${id}`} passHref>
        <chakra.h3
          fontSize="xl"
          fontWeight="bold"
          fontFamily="'Domine', serif"
          color="gray.600"
          cursor="pointer"
          _hover={{
            color: 'pink.600',
          }}
        >
          {name}
        </chakra.h3>
      </NextLink>

      <chakra.p
        mt={2}
        fontSize="sm"
        fontWeight="500"
        fontFamily="Poppins,sans-serif"
        color="gray.600"
      >
        {description}
      </chakra.p>

      <HStack spacing={3} justify="flex-end" mt={4}>
        <NextLink href={`/site/${id}`} passHref>
          <Button
            as="a"
            // icon={<IoInformationOutline />}
            aria-label="visit site"
            colorScheme="cyan"
            size="xs"
            variant="outline"
            rounded="sm"
            _hover={{
              boxShadow: 'xl',
              transform: 'scale(1.2)',
              transition: '0.1s',
            }}
          >
            more info
          </Button>
        </NextLink>

        <NextLink href={url} passHref>
          <IconButton
            as="a"
            icon={<FiArrowUpRight />}
            aria-label="visit site"
            colorScheme="pink"
            size="xs"
            variant="outline"
            rounded="sm"
            _hover={{
              boxShadow: 'xl',
              transform: 'scale(1.2)',
              transition: '0.1s',
            }}
          >
            shop now
          </IconButton>
        </NextLink>
      </HStack>
    </AnimatedCard>
  );
}

export default SiteCard;
