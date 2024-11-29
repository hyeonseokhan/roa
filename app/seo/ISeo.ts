import { NextSeoProps } from 'next-seo';
import { StaticImageData } from 'next/image';

export declare namespace ISeo {
  export interface Payload {
    headTitle: string;
    favicon: StaticImageData;
    props: NextSeoProps;
  }
}
