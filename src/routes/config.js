
import {
    LegendComponent ,
    HomeComponent ,BlankInfoComponent,
    LoginComponent ,SubmitInfoComponent,BaseInfoComponent,
    WorkInfoComponent, MyProfileComponent,CreditCheckComponent,
    BaseInfoDetailComponent, BrowMoneyComponent,VipRecommendComponent,
    WorkInfoDetailComponent,FeedBackComponent,
    BlankInfoDetailComponent,ContactUsComponent,
    MyComponent ,Error404,
} from './page'


export default [
                {
                    path:'/',
                    exact:true,
                    component:LegendComponent,
                    sceneConfig: {
                        enter: 'from-right',
                        exit: 'to-right',
                    },
                    name:'login',
                    redirect:'/login',
                    meta:{require:false}
                },
                {
                    path:'/home',
                    component:HomeComponent,
                    exact: true,
                    sceneConfig: {
                        enter: 'from-right',
                        exit: 'to-right',
                    },
                    meta:{require:false}
                },
                {
                    path:'/baseInfo',
                    component:BaseInfoComponent,
                    exact: true,
                    sceneConfig: {
                        enter: 'from-right',
                        exit: 'to-right',
                    },
                    meta:{require:true}
                },
                {
                    path:'/workInfo',
                    component:WorkInfoComponent,
                    sceneConfig: {
                        enter: 'from-right',
                        exit: 'to-right',
                    },
                    meta:{require:true}
                },
                {
                    path:'/blankInfo',
                    component:BlankInfoComponent,
                    exact: true,
                    sceneConfig: {
                        enter: 'from-right',
                        exit: 'to-right',
                    },
                    meta:{require:true}
                },
                {
                    path:'/baseInfoDetail',
                    component:BaseInfoDetailComponent,
                    exact: true,
                    sceneConfig: {
                        enter: 'from-right',
                        exit: 'to-right',
                    },
                    meta:{require:true}
                },
                {
                    path:'/workInfoDetail',
                    component:WorkInfoDetailComponent,
                    exact: true,
                    sceneConfig: {
                        enter: 'from-right',
                        exit: 'to-right',
                    },
                    meta:{require:true}
                },
                {
                    path:'/blankInfoDetail',
                    component:BlankInfoDetailComponent,
                    exact: true,
                    sceneConfig: {
                        enter: 'from-right',
                        exit: 'to-right',
                    },
                    meta:{require:true}
                },
                {
                    path:'/login',
                    component:LoginComponent,
                    sceneConfig: {
                        enter: 'from-right',
                        exit: 'to-right',
                    },
                    meta:{require:false}
                },
                {
                    path:'/subInfo',
                    component:SubmitInfoComponent,
                    sceneConfig: {
                        enter: 'from-right',
                        exit: 'to-right',
                    },
                    meta:{require:true}
                },
                {
                    path:'/myProfile',
                    component:MyProfileComponent,
                    sceneConfig: {
                        enter: 'from-bottom',
                        exit: 'to-bottom',
                    },
                    meta:{require:true}
                },

                {
                    path:'/my',
                    component:MyComponent,
                    sceneConfig: {
                        enter: 'from-right',
                        exit: 'to-right',
                    },
                    meta:{require:true}
                },
                {
                    path:'/contactUs',
                    component:ContactUsComponent,
                    sceneConfig: {
                        enter: 'from-bottom',
                        exit: 'to-bottom',
                    },
                    meta:{require:true}
                },
                {
                    path:'/feedback',
                    component:FeedBackComponent,
                    sceneConfig: {
                        enter: 'from-bottom',
                        exit: 'to-bottom',
                    },
                    meta:{require:true}
                },
                {
                    path:'/creditCheck',
                    component:CreditCheckComponent,
                    sceneConfig: {
                        enter: 'from-right',
                        exit: 'to-right',
                    },
                    meta:{require:true}
                },
                {
                    path:'/browMoeny',
                    component:BrowMoneyComponent,
                    sceneConfig: {
                        enter: 'from-right',
                        exit: 'to-right',
                    },
                    meta:{require:true}
                },
                {
                    path:'/vipRecommend',
                    component:VipRecommendComponent,
                    sceneConfig: {
                        enter: 'from-right',
                        exit: 'to-right',
                    },
                    meta:{require:true}
                },
                {
                    path:'*',
                    component:Error404,
                    meta:{require:false}
                }
]
