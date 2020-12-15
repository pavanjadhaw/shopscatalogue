import { Box, chakra, Grid, Link } from '@chakra-ui/react';
import { default as NextLink } from 'next/link';
import CContainer from '../container';

function Navbar() {
  return (
    <Box
      as="nav"
      position="relative"
      zIndex={999}
      overflow="visible"
      paddingY={4}
      bgColor="white"
      shadow="0 0 2px 0 rgba(0,35,90,.08)"
    >
      <Grid
        as={CContainer}
        templateColumns="repeat(1, 1fr)"
        gap={3}
        alignItems="center"
        position="relative"
        marginX="auto"
        paddingY={2}
        paddingX={[4, 0]}
        maxW="62rem"
      >
        <Box>
          <NextLink href="/" passHref>
            <Link
              fontSize="2xl"
              fontWeight="bold"
              fontFamily="'Domine', serif"
              style={{ textDecoration: 'none' }}
            >
              <chakra.span
                color="gray.700"
                _hover={{
                  color: 'pink.600',
                }}
              >
                Shops
              </chakra.span>
              <chakra.span
                color="gray.600"
                _hover={{
                  color: 'pink.400',
                }}
              >
                Catalogue
              </chakra.span>
            </Link>
          </NextLink>
        </Box>
      </Grid>
    </Box>
  );
}

export default Navbar;
