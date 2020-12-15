import { Box, Flex, Link } from '@chakra-ui/react';
import { default as NextLink } from 'next/link';
import { useRouter } from 'next/router';

function Footer() {
  const { pathname } = useRouter();

  return (
    <Box
      as="footer"
      paddingY={6}
      bgColor="white"
      shadow="0 0 2px 0 rgba(0,35,90,.08)"
    >
      <Flex
        maxW="62rem"
        justify="flex-start"
        align="center"
        marginX="auto"
        paddingY={2}
        paddingX={4}
      >
        <Flex direction={['column', 'row']}>
          <NextLink href="/" passHref>
            <Link
              fontWeight="bold"
              fontFamily="'Domine', serif"
              color={pathname === '/' ? 'pink.600' : 'gray.600'}
              _notFirst={{
                marginLeft: [0, 4],
                marginTop: [4, 0],
              }}
              _hover={{
                color: 'pink.400',
              }}
            >
              Home
            </Link>
          </NextLink>

          <NextLink href="/categories" passHref>
            <Link
              fontWeight="bold"
              fontFamily="'Domine', serif"
              color={pathname === '/categories' ? 'pink.600' : 'gray.600'}
              _notFirst={{
                marginLeft: [0, 4],
                marginTop: [4, 0],
              }}
              _hover={{
                color: 'pink.400',
              }}
            >
              Categories
            </Link>
          </NextLink>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Footer;
