import { chakra, Flex } from '@chakra-ui/react';
import { default as NextLink } from 'next/link';
import { AnimatedCard } from './card';

type CategoryCardProps = {
  title: string;
  slug: string;
  emoji: string;
};

function CategoryCard({ title, slug, emoji }: CategoryCardProps) {
  return (
    <AnimatedCard
      m={0}
      py={10}
      px={10}
      cursor="pointer"
      _hover={{
        transform: 'scale(1.1)',
        transitionDuration: '0.5s',
      }}
    >
      <NextLink href={`/category/${slug}`} passHref>
        <Flex>
          <chakra.h3
            fontSize="3xl"
            fontWeight="bold"
            fontFamily="'Domine', serif"
            color="gray.600"
          >
            <chakra.span aria-hidden m={2}>
              {emoji}
            </chakra.span>{' '}
            {title}
          </chakra.h3>
        </Flex>
      </NextLink>
    </AnimatedCard>
  );
}

export default CategoryCard;
