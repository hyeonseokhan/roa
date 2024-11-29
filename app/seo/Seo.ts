import { ISeo } from '#/app/seo/ISeo';
import favicon from '#/asset/favicon.ico';

const title = '성남이들의 로스트아크 게임 도구';
const description = '로스트아크 게임 유저의 편의를 위한 게임 도구 웹사이트';

export const seo: ISeo.Payload = {
  favicon,
  headTitle: title,
  props: {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'profile',
      profile: {
        firstName: '현석',
        lastName: '한',
        username: 'Hyeonseok Han',
        gender: 'male',
      },
    },
  },
};
