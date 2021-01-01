class event{
    constructor(){
        this.msg = {} //首先创建一个集合用来储存所有订阅的事件
    }

    /**
     * subscribe 用来订阅要回调的事件
     * @param {*} key 事件的标识符
     * @param {*} fn  回调函数
     */
    addListener(key, fn){
        if(typeof fn != 'function') return //订阅事件不是函数直接返回
        if(!this.msg[key]) this.msg[key] = [] //不存在的事件创建
        this.msg[key].push(fn)   //添加函数到事件集合中。
    }

    /**
     * 发布事件方法，用来通知订阅的事件
     */
    trigger(){
        //可能会疑问，为什么这里没有key值。
        //下面这样获取arguments中的第一个值就是key
        let key = Array.prototype.shift.call(arguments)
        let callBack = this.msg[key]
        if(!callBack || !callBack.length) return //集合为空就返回
        //来了，这是重点。
        callBack.forEach(item=>{
            item.apply(this,arguments) //遍历集合下的每个函数，依次将arguments回调给函数
            //其实，这里写成 item.apply(null,arguments) 也行，我们需要的仅仅是arguments
        })
    }

    /**
     * 事件删除，传入key值（fn选填）
     * @param {*} key
     * @param {*} fn
     */
    removeListener(key,fn){
        let fns = this.msg[key]
        if(!fns || !fns.length) return //空的话返回
        if(!fn) delete this.msg[key]  //fn不填的话直接把这个集合删了
        else{
            for(let i=0;i<fns.length;i++){
                let _item = fns[i]
                if(_item === fn || _item.fn === fn){
                    fns.splice(i,1)  //遍历集合，如果相同的话，splice
                    break
                }
            }
        }
    }
}

export default event