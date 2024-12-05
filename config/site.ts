export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: '로스트아크 게임 도구',
  description: '성남출신 겜돌이가 사용하는 로스트아크 도구 모음 사이트',
  categories: [
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
  ],
};