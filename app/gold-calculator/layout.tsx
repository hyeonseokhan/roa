import React from 'react';
import { HistoryProvider } from '#/app/gold-calculator/calculator-context';

const title = '골드구매 계산기';

export const metadata = {
  title,
  openGraph: {
    title,
    images: ["https://cdn.rloa.gg/icons/gold.png"]
  },
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HistoryProvider>{children}</HistoryProvider>;
}
