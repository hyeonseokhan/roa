export type Content = {
  name: string;
  slug: string;
  description?: string;
};

export const Contents: { name: string; apps: Content[] }[] = [
  {
    name: 'Calculator',
    apps: [
      {
        name: '골드구매 계산기',
        slug: 'gold-calculator',
        description: '골드 구매시 시세와 거래 수수료를 계산해 주는 도구',
      },
    ],
  },
];
