import AdminLayout from 'src/layouts/admin';
import CounterComp from 'src/components/CounterComp';

const AdminPage = () => {
  return (
    <>
      <div>admin</div>
      <CounterComp />
    </>
  );
};
AdminPage.Layout = AdminLayout;

export default AdminPage;
