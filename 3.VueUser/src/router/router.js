import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Messages from '../pages/messages/list'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import payList from '../pages/pay'

import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import leibieList from '../pages/leibie/list'
import leibieDetail from '../pages/leibie/detail'
import leibieAdd from '../pages/leibie/add'
import fangyuanxinxiList from '../pages/fangyuanxinxi/list'
import fangyuanxinxiDetail from '../pages/fangyuanxinxi/detail'
import fangyuanxinxiAdd from '../pages/fangyuanxinxi/add'
import yuyuekanfangList from '../pages/yuyuekanfang/list'
import yuyuekanfangDetail from '../pages/yuyuekanfang/detail'
import yuyuekanfangAdd from '../pages/yuyuekanfang/add'
import dingdanxinxiList from '../pages/dingdanxinxi/list'
import dingdanxinxiDetail from '../pages/dingdanxinxi/detail'
import dingdanxinxiAdd from '../pages/dingdanxinxi/add'
import hetongxinxiList from '../pages/hetongxinxi/list'
import hetongxinxiDetail from '../pages/hetongxinxi/detail'
import hetongxinxiAdd from '../pages/hetongxinxi/add'
import weixiushenqingList from '../pages/weixiushenqing/list'
import weixiushenqingDetail from '../pages/weixiushenqing/detail'
import weixiushenqingAdd from '../pages/weixiushenqing/add'
import hetongzhongzhiList from '../pages/hetongzhongzhi/list'
import hetongzhongzhiDetail from '../pages/hetongzhongzhi/detail'
import hetongzhongzhiAdd from '../pages/hetongzhongzhi/add'
import weixiuqingkuangList from '../pages/weixiuqingkuang/list'
import weixiuqingkuangDetail from '../pages/weixiuqingkuang/detail'
import weixiuqingkuangAdd from '../pages/weixiuqingkuang/add'
import newstypeList from '../pages/newstype/list'
import newstypeDetail from '../pages/newstype/detail'
import newstypeAdd from '../pages/newstype/add'
import systemintroList from '../pages/systemintro/list'
import systemintroDetail from '../pages/systemintro/detail'
import systemintroAdd from '../pages/systemintro/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'messages',
					component: Messages
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'leibie',
					component: leibieList
				},
				{
					path: 'leibieDetail',
					component: leibieDetail
				},
				{
					path: 'leibieAdd',
					component: leibieAdd
				},
				{
					path: 'fangyuanxinxi',
					component: fangyuanxinxiList
				},
				{
					path: 'fangyuanxinxiDetail',
					component: fangyuanxinxiDetail
				},
				{
					path: 'fangyuanxinxiAdd',
					component: fangyuanxinxiAdd
				},
				{
					path: 'yuyuekanfang',
					component: yuyuekanfangList
				},
				{
					path: 'yuyuekanfangDetail',
					component: yuyuekanfangDetail
				},
				{
					path: 'yuyuekanfangAdd',
					component: yuyuekanfangAdd
				},
				{
					path: 'dingdanxinxi',
					component: dingdanxinxiList
				},
				{
					path: 'dingdanxinxiDetail',
					component: dingdanxinxiDetail
				},
				{
					path: 'dingdanxinxiAdd',
					component: dingdanxinxiAdd
				},
				{
					path: 'hetongxinxi',
					component: hetongxinxiList
				},
				{
					path: 'hetongxinxiDetail',
					component: hetongxinxiDetail
				},
				{
					path: 'hetongxinxiAdd',
					component: hetongxinxiAdd
				},
				{
					path: 'weixiushenqing',
					component: weixiushenqingList
				},
				{
					path: 'weixiushenqingDetail',
					component: weixiushenqingDetail
				},
				{
					path: 'weixiushenqingAdd',
					component: weixiushenqingAdd
				},
				{
					path: 'hetongzhongzhi',
					component: hetongzhongzhiList
				},
				{
					path: 'hetongzhongzhiDetail',
					component: hetongzhongzhiDetail
				},
				{
					path: 'hetongzhongzhiAdd',
					component: hetongzhongzhiAdd
				},
				{
					path: 'weixiuqingkuang',
					component: weixiuqingkuangList
				},
				{
					path: 'weixiuqingkuangDetail',
					component: weixiuqingkuangDetail
				},
				{
					path: 'weixiuqingkuangAdd',
					component: weixiuqingkuangAdd
				},
				{
					path: 'newstype',
					component: newstypeList
				},
				{
					path: 'newstypeDetail',
					component: newstypeDetail
				},
				{
					path: 'newstypeAdd',
					component: newstypeAdd
				},
				{
					path: 'systemintro',
					component: systemintroList
				},
				{
					path: 'systemintroDetail',
					component: systemintroDetail
				},
				{
					path: 'systemintroAdd',
					component: systemintroAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
