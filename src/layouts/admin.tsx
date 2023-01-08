import type { LayoutProps } from 'src/types/layout';

const AdminLayout: LayoutProps = ({ children }) => {
  return <div>Admin: {children}</div>;
};
export default AdminLayout;
