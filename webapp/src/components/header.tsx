import { Flex, FlexProps, Heading } from '@chakra-ui/react';
import Highlight from './highlight';

function Header(props: FlexProps) {
  return (
    <Flex
      mt={100}
      mb={100}
      direction="column"
      align="center"
      justify="center"
      {...props}
    >
      <Flex width={['xs', '62rem']} direction="column" paddingX={2}>
        <Highlight backgroundSize="20% 50%" backgroundPosition="0% 50%">
          <Heading
            my={[5, 10]}
            maxW="800px"
            fontSize={['4xl', '6xl']}
            fontWeight="bold"
            fontFamily="'Domine', serif"
            color="gray.600"
            {...props}
          />
        </Highlight>
      </Flex>
    </Flex>
  );
}

export default Header;
