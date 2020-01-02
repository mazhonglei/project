import Toast from './Toast'
const obj={};
obj.install=function (Vue) {
    //1.创建组件构造器
    const toastConstructor=Vue.extend(Toast);
    //2.通过new的方式 根据组件构造器创建出组件对象
    const toast=new toastConstructor();
    //3.将组件对象手动挂载到一个元素上
    toast.$mount(document.createElement('div'));
    //Toast.$el对应的就是div
    document.body.appendChild(toast.$el);
    Vue.prototype.$toast=toast;
};
export default obj;
