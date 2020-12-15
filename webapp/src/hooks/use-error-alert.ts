import { useToast } from '@chakra-ui/react';

function useErrorAlert() {
  const toast = useToast();

  const showErrorAlert = error => {
    if (error) {
      toast({
        title: 'Something went wrong.',
        description: error.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return showErrorAlert;
}

export default useErrorAlert;
