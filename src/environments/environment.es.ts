import { environmentBase } from './environmentBase';


export const environment = {
  ...environmentBase,
  production: false,
    api: {
      ...environmentBase.api,
        schema: 'http://',
        base: 'local.es.api.my-local-domain/',
    }
};
