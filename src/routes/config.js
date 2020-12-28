
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
                },
                {
                    path:'/home',
                    component:HomeComponent,
                    exact: true,
                    sceneConfig: {
                        enter: 'from-right',
                        exit: 'to-right',
                    },
                },
                {
                    path:'/baseInfo',
                    component:BaseInfoComponent,
                    exact: true,
                    sceneConfig: {
                        enter: 'from-right',
                        exit: 'to-right',
                    },
                },
                {
                    path:'/workInfo',
                    component:WorkInfoComponent,
                    sceneConfig: {
                        enter: 'from-right',
                        exit: 'to-right',
                    },
                },
                {
                    path:'/blankInfo',
                    component:BlankInfoComponent,
                    exact: true,
                    sceneConfig: {
                        enter: 'from-right',
                        exit: 'to-right',
                    },
                },
                {
                    path:'/baseInfoDetail',
                    component:BaseInfoDetailComponent,
                    exact: true,
                    sceneConfig: {
                        enter: 'from-right',
                        exit: 'to-right',
                    },
                },
                {
                    path:'/workInfoDetail',
                    component:WorkInfoDetailComponent,
                    exact: true,
                    sceneConfig: {
                        enter: 'from-right',
                        exit: 'to-right',
                    },
                },
                {
                    path:'/blankInfoDetail',
                    component:BlankInfoDetailComponent,
                    exact: true,
                    sceneConfig: {
                        enter: 'from-right',
                        exit: 'to-right',
                    },
                },
                {
                    path:'/login',
                    component:LoginComponent,
                    sceneConfig: {
                        enter: 'from-right',
                        exit: 'to-right',
                    },
                },
                {
                    path:'/subInfo',
                    component:SubmitInfoComponent,
                    sceneConfig: {
                        enter: 'from-right',
                        exit: 'to-right',
                    },
                },
                {
                    path:'/myProfile',
                    component:MyProfileComponent,
                    sceneConfig: {
                        enter: 'from-bottom',
                        exit: 'to-bottom',
                    },
                },

                {
                    path:'/my',
                    component:MyComponent,
                    sceneConfig: {
                        enter: 'from-right',
                        exit: 'to-right',
                    },
                },
                {
                    path:'/contactUs',
                    component:ContactUsComponent,
                    sceneConfig: {
                        enter: 'from-bottom',
                        exit: 'to-bottom',
                    },
                },
                {
                    path:'/feedback',
                    component:FeedBackComponent,
                    sceneConfig: {
                        enter: 'from-bottom',
                        exit: 'to-bottom',
                    }
                },
                {
                    path:'/creditCheck',
                    component:CreditCheckComponent,
                    sceneConfig: {
                        enter: 'from-right',
                        exit: 'to-right',
                    }
                },
                {
                    path:'/browMoeny',
                    component:BrowMoneyComponent,
                    sceneConfig: {
                        enter: 'from-right',
                        exit: 'to-right',
                    }
                },
                {
                    path:'/vipRecommend',
                    component:VipRecommendComponent,
                    sceneConfig: {
                        enter: 'from-right',
                        exit: 'to-right',
                    }
                },
                {
                    path:'*',
                    component:Error404,
                }
]
