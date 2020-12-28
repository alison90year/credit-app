import React ,{lazy  } from "react";
const HomeComponent = lazy(() => import('../application/Home/'));
const MyComponent = lazy(() => import('../application/My/'))
const LegendComponent = lazy(() => import('../application/Legend/'));
const LoginComponent = lazy(() => import('../application/Login/'));
const SubmitInfoComponent = lazy(() => import('../application/SubmitInfo/'));
const BaseInfoComponent =  lazy(() => import('../application/BaseInfo'))
const WorkInfoComponent =  lazy(() => import('../application/WorkInfo'))
const BlankInfoComponent =  lazy(() => import('../application/BlankInfo'))
const MyProfileComponent =  lazy(() => import('../application/MyProfile'))
const BaseInfoDetailComponent =  lazy(() => import('../application/BaseInfoDetail'))
const WorkInfoDetailComponent =  lazy(() => import('../application/WorkInfoDetail'))
const BlankInfoDetailComponent =  lazy(() => import('../application/BlankInfoDetail'))
const ContactUsComponent =  lazy(() => import('../application/ContactUs'))
const FeedBackComponent =  lazy(() => import('../application/FeedBack'))
const CreditCheckComponent =  lazy(() => import('../application/CreditCheck'))
const BrowMoneyComponent =  lazy(() => import('../application/BrowMoney'))
const VipRecommendComponent =  lazy(() => import('../application/VipRecommend'))
const Error404 = lazy(() => import('../application/Error404/'));


export {
    HomeComponent,MyComponent,
    LegendComponent,LoginComponent,SubmitInfoComponent,
    BaseInfoComponent,WorkInfoComponent,BlankInfoComponent,
    MyProfileComponent,BaseInfoDetailComponent,
    WorkInfoDetailComponent,BlankInfoDetailComponent,
    BrowMoneyComponent,VipRecommendComponent,CreditCheckComponent,
    ContactUsComponent,FeedBackComponent,
    Error404
}
