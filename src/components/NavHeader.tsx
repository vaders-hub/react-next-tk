import Link from 'next/link';
import { useRouter } from 'next/router';

const NavHeader = () => {
  return (
    <>
      <Link href='/'>Home</Link>
      <Link href='/dashboard'>Admin</Link>
    </>
  );
};

export default NavHeader;
