import { useAppSelector, useAppDispatch } from 'src/hooks/useRedux';
import { darkTheme, lightTheme } from 'theme/themes';
import { ThemeProvider, CssBaseline } from '@mui/material';
import NavHeader from 'src/components/NavHeader';

import type { LayoutProps } from 'src/types/layout';

const MainLayout: LayoutProps = ({ children }) => {
  const themeMode = useAppSelector(state => state.theme.mode);
  const savedTheme = themeMode ? darkTheme : lightTheme;
  return (
    <>
      <ThemeProvider theme={savedTheme}>
        <CssBaseline />
        <NavHeader />
        <div>
          Main:
          {children}
        </div>
      </ThemeProvider>
    </>
  );
};
export default MainLayout;
