import { Flex, FlexProps } from '@chakra-ui/react';
import { default as MasnoryContainer } from 'react-masonry-css';

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

function Masnory({ children, ...rest }: FlexProps) {
  return (
    <Flex mt={100} mb={100} {...rest}>
      <MasnoryContainer
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {children}
      </MasnoryContainer>
    </Flex>
  );
}

export default Masnory;
