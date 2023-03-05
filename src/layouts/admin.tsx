import NavHeader from 'src/components/NavHeader';
import { darkTheme } from 'theme/themes';
import { ThemeProvider, CssBaseline } from '@mui/material';

import type { LayoutProps } from 'src/types/layout';

const AdminLayout: LayoutProps = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <NavHeader />
        <div>Admin: {children}</div>
      </ThemeProvider>
    </>
  );
};
export default AdminLayout;
