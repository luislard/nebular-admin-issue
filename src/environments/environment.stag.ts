import { environmentBase } from './environmentBase';


export const environment = {
    ...environmentBase,
    production: true,
    api: {
        ...environmentBase.api,
        schema: 'https://',
        base: 'staging.api.my_domain.com',
    },
};
