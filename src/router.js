  import Vue from 'vue'
  import Router from 'vue-router'
 /* import classIndex from './views/class/classIndex'*/
  const classIndex=()=>import('./views/class/classIndex');
  import classDetail from'./views/class/classDetail'
  import classFree from'./views/class/classFree'
  import todo from'./views/class/todo'
  import classJoin from "./views/class/classJoin";
  import classJoinDetail from "./views/class/classJoinDetail";
  import user from "./views/user/user";
  import userDetail from "./views/user/userDetail";
  import userList from "./views/user/userList";
  import userNum from './views/user/userNum';
  import userImg from './views/user/userImg';
  import userCommit from './views/user/userCommit';
  import checkBox from './views/user/checkBox';
  import loadMore from './views/user/loadMore';
  import cityList from './views/user/cityList';
  import history from './views/user/history';
  import preview from './views/user/preview';
  import login from './views/user/login';
  import map from './views/user/map';
  import element from './views/user/element-ui';
  Vue.use(Router);

  const router= new Router({
    mode:'history',
    /*linkActiveClass:'active'指定路由的类名*/
    routes: [
      {
        path:'/',
        redirect:'/classIndex',
        meta:{
          title:'首页'
        }
      },
      {
        path:'*',
        redirect:'/classIndex'
      },
      {
        path:'/classIndex',
        name:'classIndex',
        component:classIndex,
        meta:{
          title:'首页',
          showFooter:true
        }
      },
      {
        path:'/userCommit',
        name:'userCommit',
        component:userCommit
      },
      {
        path:'/todo',
        name:'todo',
        component:todo
      },
      {
        path:'/checkbox',
        name:'checkBox',
        component:checkBox
      },
      {
        path: '/classDetail',
        name: 'classDetail',
        component:classDetail,
        meta:{
          showFooter:true
        }
      },
      {
        path: '/userNum',
        name: 'userNum',
        component:userNum
      },
      {
        path: '/loadMore',
        name: 'loadMore',
        component:loadMore
      },
      {
        path: '/element',
        name: 'element',
        component:element
      },
      {
        path: '/cityList',
        name: 'cityList',
        component:cityList,
        meta:{
          title:'城市列表'
        }
      },
      {
        path: '/history',
        name: 'history',
        component:history,
        meta:{
          title:'历史记录'
        }
      },
      {
        path: '/preview',
        name: 'preview',
        component:preview,
        meta:{   //（元数据）描述数据的数据
          title:'缩略图'
        }
      },

      {
            path: '/classFree',
            name: 'classFree',
            component:classFree,
        meta:{
          showFooter:true
        }
        },
      {
        path: '/classJoin',
        name: 'classJoin',
        component:classJoin
      },
      {
        path: '/classJoin1',
        name: 'classJoin1',
        component:classJoin
      },
      {
        path: '/classJoinDetail',
        name: 'classJoinDetail',
        component:classJoinDetail
      },
      {
        path: '/user',
        name: 'user',
        component:user,
        children:[
          {
            path: 'userDetail',
            name: 'userDetail',
            component:userDetail,
          },
          {
            path: 'userList',
            name: 'userList',
            component:userList,
          }
        ]
      },
      {
        path: '/userImg',
        name: 'userImg',
        component:userImg
      },
      {
        path: '/login',
        name: 'login',
        component:login
      },
      {
        path: '/map',
        name: 'map',
        component:map
      },
    ]
  })
  //beforeEach前置钩子 路由跳转之前,必须要调用next()
  router.beforeEach((to,from,next)=>{
    document.title=to.matched[0].meta.title;
    next();
    console.log('111');
  })
  //afterEach后置钩子 路由跳转之后,不需要调用next()
  router.afterEach((to,from)=>{
    console.log('222');
  })
  export default router;
/*
去哪里?<router-link to='/classFree'></router-link>
导航:在router.js中配置路由
去了干嘛?获取路由参数拼接到url发起请求
* */
