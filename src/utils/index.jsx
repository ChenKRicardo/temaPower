export const isFalsy = (value) =>value === 0? false :!value
//一个！求反 2个！！转布尔
//在一个函数里，改变传入的对象本身是不好的
export const cleanObject = (object)=>{
    //等价于 Object.assign({},object)
    const result = {...object}
    Object.keys(result).forEach(key=>{
        const value = object[key]
        if(isFalsy(value)){
            delete result[key]
            //删除null和undefined值,因为传递参数有可能为空这类情况
            //!null = true(假值)
        }
    })
    return result
}