import Link from 'next/link';
import { useState } from 'react';
import { store, wrapper } from 'src/configs/store';
import { useAppSelector, useAppDispatch } from 'src/hooks/useRedux';
import { useRouter } from 'next/router';
import { toggle } from 'src/features/common/themeSlice';

import Switch from '@mui/material/Switch';

const NavHeader = () => {
  const dispatch = useAppDispatch();
  const themeMode = useAppSelector(state => state.theme.mode);

  const switchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(toggle());
  };

  return (
    <>
      <Link href='/'>Home</Link>
      <Link href='/dashboard'>Admin</Link>
      <Switch checked={themeMode} onChange={switchHandler} />
    </>
  );
};

export default NavHeader;
