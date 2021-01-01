import event from './common/event';
// mixin
import './common/mixins';

App({
    onLaunch(options) {
        console.log('APP => 加载小程序');
    },
    // 主题切换
    onThemeChange() {},
    // 全局数据
    globalData: {
        tip: 'App全局提示信息',
    },
    event: new event(),
})