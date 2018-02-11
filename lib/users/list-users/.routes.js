import {GET} from 'rafter/lib/common/router/route-method-constants';

export default [
    {
        endpoint: `/v1/users`,
        controller: 'listUsersController',
        action: 'listUsers',
        method: GET,
    },
];