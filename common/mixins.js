// mixins.js
let MixinsPage = Page;

Page = (options) => {
    let { mixins = [] } = options;
    let merge = new Merge();
    Reflect.deleteProperty(options, 'mixins');
    let pageOptions = mixins.length <= 0 ? options : merge.start(options, ...mixins);
    MixinsPage(pageOptions);
};

class Merge {
    constructor() {}
    combin(baseOptions, ...mixinsOptions) {
        let resultOptions = baseOptions;
        mixinsOptions.forEach(options => {
            resultOptions = Merge.recursive(resultOptions, options);
        });
        return resultOptions;
    }
    static isObject = (obj) => {
        return obj === Object(obj);
    }
    static isFunction = (fn) => {
        return typeof fn === 'function';
    }
    static recursive = (target, options) => {
        const targetOptions = target;
        for (let key in options) {
            if (targetOptions[key] === undefined) {
                targetOptions[key] = options[key];
            } else if (Merge.isFunction(targetOptions[key]) && Merge.isFunction(options[key])) {
                const originFunc = targetOptions[key];
                targetOptions[key] = function (...args) {
                    options[key].call(this, ...args);
                    return originFunc && originFunc.call(this, ...args);
                }
            } else if (Merge.isObject(options[key])) {
                Merge.recursive(targetOptions[key], options[key]);
            } else {
                targetOptions[key] = options[key];
            }
        }
        return targetOptions;
    }
}