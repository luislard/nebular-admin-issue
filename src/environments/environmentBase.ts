export const environmentBase = {
    production: false,
    api: {
        schema: 'http://',
        base: 'my-local-domain/',
        version: '1.0',
        endpoints: {
            check_login: '/users/check_login',
            register: '/users/register',
        }
    }
  };
  