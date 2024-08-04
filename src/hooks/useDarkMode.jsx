import { useMediaQuery } from 'react-responsive';

function useDarkMode() {
  const isDarkMode = useMediaQuery({ query: '(prefers-color-scheme: dark)' });
  return isDarkMode;
}

export default useDarkMode;