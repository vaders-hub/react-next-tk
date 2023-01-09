import NavHeader from 'src/components/NavHeader';

import type { LayoutProps } from 'src/types/layout';

const AdminLayout: LayoutProps = ({ children }) => {
  return (
    <>
      <NavHeader />
      <div>Admin: {children}</div>
    </>
  );
};
export default AdminLayout;
