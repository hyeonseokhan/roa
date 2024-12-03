// import { getCategories } from '#/app/api/categories/getCategories';
// import { ClickCounter } from '#/ui/click-counter';
// import { TabGroup } from '#/ui/tab-group';
import React from 'react';

const title = '골드구매 계산기';

export const metadata = {
  title,
  openGraph: {
    title,
  },
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="space-y-9">{children}</div>;
}
