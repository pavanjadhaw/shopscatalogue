import { Box, BoxProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function Card(props: BoxProps) {
  return (
    <Box
      mt={8}
      mb={8}
      ml={4}
      mr={4}
      p={4}
      bgColor="white"
      rounded="xs"
      overflow="hidden"
      shadow="0 6px 18px 0 rgba(0,35,90,.08), 0 0 2px 0 rgba(0,35,90,.06)"
      {...props}
    />
  );
}

export function AnimatedCard(props: BoxProps) {
  const { ref, inView } = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.2, ease: 'easeInOut' }}
    >
      <Card {...props} />
    </motion.div>
  );
}
