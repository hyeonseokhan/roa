import { ISeo } from '#/app/seo/ISeo';
import {seo} from '#/app/seo/Seo';

const PropertiesPayload: PropertiesPayload = {
  seo,
};

interface PropertiesPayload {
  seo: ISeo.Payload;
}

export default PropertiesPayload;
