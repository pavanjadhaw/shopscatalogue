import { Box, BoxProps } from '@chakra-ui/react';

function Highlight(props: BoxProps) {
  return (
    <Box
      backgroundImage={`url(/images/swash.png)`}
      backgroundRepeat="no-repeat"
      backgroundSize="15% 100%"
      {...props}
    />
  );
}

export default Highlight;
