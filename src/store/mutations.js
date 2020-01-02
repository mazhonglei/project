import obj from './save'
const mutations={
    add(state,n){
        state.count+=n;
    },
    reduce(state,n){
        state.count-=n;
    },
    addType(state,type){
        state.types=type;
    },
    headShow(state){
        state.headerShow=true;
    },
    hideShow(state){
        state.headerShow=false;
    },
    addCity(state,citys){
        state.city=citys;
        obj.set('head',state.city);
       /* localStorage.setItem('head',citys)*/
    }
};
export default mutations;



