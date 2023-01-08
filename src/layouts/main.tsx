import type { LayoutProps } from 'src/types/layout';

const MainLayout: LayoutProps = ({ children }) => {
  return (
    <div>
      Main:
      {children}
    </div>
  );
};
export default MainLayout;
