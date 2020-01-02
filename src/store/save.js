
const  obj={
    set(key,value){
        localStorage.setItem(key,value); //保存
    },
    get(key){
        return  localStorage.getItem(key); //获取
    },
    remove(key){
        localStorage.removeItem(key); //删除
    }
};
export default obj;
