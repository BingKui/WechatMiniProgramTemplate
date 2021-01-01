import { IS_DEV } from '../config';

// 测试环境 domain
const DEV_DOMAIN = 'https://dev.com';
// 线上环境 domain
const PROD_DOMAIN = 'https://prod.com';

// 根据配置返回相应的 domain
export const ENV_DOAMIN = IS_DEV ? DEV_DOMAIN : PROD_DOMAIN;