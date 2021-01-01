
import { ENV_DOAMIN } from '/constants/domain';

export default {
    register: ENV_DOAMIN + '/api/user/register',
    login: ENV_DOAMIN + '/api/user/login',
    userInfo: ENV_DOAMIN + '/api/user/info',
};