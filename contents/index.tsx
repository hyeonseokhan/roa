export type Content = {
  name: string;
  slug: string;
  description?: string;
};

export const Contents: { name: string; contents: Content[] }[] = [
  {
    name: 'Calculator',
    contents: [
      {
        name: '골드 구매 계산기',
        slug: 'calculator',
        description: '골드 구매시 시세와 거래 수수료를 계산해 주는 도구',
      },
    ],
  },
];
