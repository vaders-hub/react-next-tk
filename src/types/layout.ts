import { NextPage } from 'next';

import MainLayout from 'src/layouts/main';
import AdminLayout from 'src/layouts/admin';

import type { ReactElement } from 'react';

export type PageWithMainLayoutType = NextPage & { layout: typeof MainLayout };
export type PageWithAdminLayoutType = NextPage & { layout: typeof AdminLayout };
export type PageWithLayoutType = PageWithMainLayoutType | PageWithAdminLayoutType;
export type LayoutProps = ({ children }: { children: ReactElement }) => ReactElement;

export default PageWithLayoutType;
