import { IconButton, useColorMode } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDarkTheme = colorMode === 'dark';

  return (
    <IconButton
      variant="ghost"
      aria-label="dark mode toggle"
      icon={isDarkTheme ? <FaSun /> : <FaMoon />}
      onClick={toggleColorMode}
    />
  );
}

export default ThemeToggle;
