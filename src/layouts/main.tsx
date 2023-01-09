import NavHeader from 'src/components/NavHeader';

import type { LayoutProps } from 'src/types/layout';

const MainLayout: LayoutProps = ({ children }) => {
  return (
    <>
      <NavHeader />
      <div>
        Main:
        {children}
      </div>
    </>
  );
};
export default MainLayout;
