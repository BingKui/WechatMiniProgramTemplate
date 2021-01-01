// 基础环境相关方法整合，方便修改，排查问题

// 提示类
/**
 * 基础 Toast 提示
 * @param {String} title 提示内容
 */
export const showToast = (title) => {
    wx.showToast({
        title,
        icon: 'none',
        duration: 2000,
        mask: false,
    });
};

// 界面操作类

// 选择类

// 扩展类