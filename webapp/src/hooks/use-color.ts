import { useColorModeValue } from '@chakra-ui/react';

function useColor() {
  const bg = useColorModeValue('gray.100', 'gray.900');
  const color = useColorModeValue('gray.900', 'gray.100');

  return [bg, color];
}

export default useColor;
