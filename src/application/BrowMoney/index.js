import React from "react";
import { connect } from 'react-redux'
import {Steps, NoticeBar, Modal, Toast} from 'antd-mobile'
import {createMd5, formateData ,arrToObj ,createMd5NoApi} from '../../utils/index'
import { getAppLoanConfig } from '../../api/request'
import { Content ,SVGIcon ,SubMitBtn } from './style'
import headerBg from '../../assets/submit-bg.svg'
import subInfoImg from '../../assets/baseinfo.svg'
import createStoreBg from '../../assets/classfiy-store.svg'
import { Header ,Tips } from './style';
import { HeaderNoticeBar, NoticeIcon } from "./style";
import noticeIcon from "../../assets/notice.svg";
import {getUid, removeUid} from "../../utils/auth";
import { getPaySubmit } from '../../api/request'
import { initFacebookSdk } from '../../api/facebookSdk'
const alert = Modal.alert;
const renderStepsHtml = () => {
    const Step = Steps.Step;
    const steps = [{
        title: 'Submit Info',
        icon:<SVGIcon imgUrl={subInfoImg} className={'am-icon'} />,
        status:'finish'
    }, {
        title: 'Get credit score',
        icon:<SVGIcon imgUrl={createStoreBg} className={'am-icon'}  />,
        status:'finish',
    }, {
        title: 'Get Money',
        icon:<SVGIcon imgUrl={createStoreBg} className={'am-icon'} />,
        status:'finish'
    }]
    return steps.map((s, i) => <Step key={i}
                                     className={'finish-active'}
                                     icon={s.icon} title={s.title} status={s.status} />);
}

class BrowMoeny extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            priceActiveType:0,
            dayActiveType:0,
            LoanPriceList:[],
            DaysList:[],
            Disbursal:'',
            Interest:0,
            SecurityDeposit:0
        }
        this.handleChangePriceActive = this.handleChangePriceActive.bind(this)
        this.handleChangeDaysActive = this.handleChangeDaysActive.bind(this)
    }
    handleChangePriceActive (index,item){
        this.setState((pre) => {
            return {
                priceActiveType:index,
                Disbursal:item.name
            }
        },()=>{
            this.init()
        })
    }
    handleChangeDaysActive(index,item){
        this.setState((pre) => {
            return {
                dayActiveType:index,
            }
        },()=>{
             this.init()
        })
    }
    paySubmit(){

        const { isCompeted ,history} = this.props
        const params = {
            userId:getUid(),
            s:createMd5NoApi('/pay/submit',`userid=${getUid()}&amount=${this.state.Disbursal}`),
            amount:this.state.SecurityDeposit
        }
        if(!isCompeted){
            alert('Do you want to perfect your information', <div></div>, [
                { text: 'cancel', onPress: () => {
                        initFacebookSdk('Subscribe')
                        getPaySubmit(params).then(res => {
                            if(res.code === 0){
                                window.location.href= res.msg
                            }
                        })
                    } },
                { text: 'ok', onPress: () => {
                        history.push('/baseInfoDetail')
                    } },
            ])
            return false
        }
        getPaySubmit(params).then(res => {
            if(res.code === 0){
                window.location.href= res.msg
            }
        })
    }
    init(){
        const { dayActiveType ,priceActiveType} = this.state
        const params = {
            userId:getUid(),
            s:createMd5('/getapploanconfig',`userId=${getUid()}`)
        }
        getAppLoanConfig(params).then(res => {
            const LoanPriceList = formateData(res.list,'LoanPrice')
            const DaysList = formateData(res.list,'Days')
            const priceName = LoanPriceList[priceActiveType].name
            const pre = {
                Disbursal:priceName,
            }
            const Data = arrToObj(DaysList[dayActiveType],pre)
            this.setState({
                LoanPriceList,
                DaysList,
                Disbursal:priceName,
                Interest:Data.Interest,
                SecurityDeposit:Data.SecurityDeposit,
            })
        })

    }
    componentDidMount() {
        if(!getUid()) {
            this.props.history.push('/')
        }else{
            this.init()
        }
     }

    render() {
        const { priceActiveType ,LoanPriceList ,DaysList ,dayActiveType ,Disbursal ,Interest ,SecurityDeposit} = this.state
         return (
             <Content>
                 <Header headerBg={ headerBg }>
                     <div className="title">
                     </div>
                     <HeaderNoticeBar className={'header-notice-bar'}>
                         <NoticeBar icon={<NoticeIcon imgUrl={noticeIcon} />} marqueeProps={{ loop: true, style: {color:'#FFFFFF'} }}>
                             The amout of INR 30000  recevied by 9***396 has arrvied ,Please check as soon as possible
                         </NoticeBar>
                     </HeaderNoticeBar>
                 </Header>
                 <div className={'main'}>
                     <div className={'steps-box'}>
                         <Steps direction="horizontal">
                             { renderStepsHtml() }
                         </Steps>
                     </div>
                     <div className={'loan-amount'}>
                         <div className={'title'}>Loan Amount （  <span className={'unit-symbol'}>￡</span> ）</div>
                         <div className={'loan-list'}>
                             {
                                 LoanPriceList.map((item ,index) => {
                                     return (
                                         <div key={index} onClick={()=> this.handleChangePriceActive(index,item)} className={`item ${priceActiveType === index ? 'active': ''}`}>{item.name}</div>
                                     )
                                 })
                             }
                         </div>
                     </div>
                     <div className={'loan-amount unline'}>
                         <div className={'title'}>Term (days)</div>
                         <div className={'loan-list'}>
                             {
                                 DaysList.map((item,index) => {
                                     return (
                                         <div key={index} onClick={()=> this.handleChangeDaysActive(index,item)} className={`item ${dayActiveType === index ? 'active': ''}`}>{item.name}</div>
                                     )
                                 })
                             }
                         </div>
                     </div>
                     <div className={'loan-details'}>
                            <div className={'d-item'}>
                                <div className={'name'}>Disbursal</div>
                                <div className={'moeny'}>￡ {Disbursal}</div>
                            </div>
                         <div className={'d-item'}>
                             <div className={'name'}>Interest</div>
                             <div className={'moeny'}>￡ {Interest}</div>
                         </div>
                         <div className={'d-item'}>
                             <div className={'name'}>Repayment  <span className={'active'}>({SecurityDeposit})</span></div>
                             <div className={'moeny'}>￡ { parseInt(Disbursal-Interest-SecurityDeposit)}</div>
                         </div>
                         <div className={'d-item'}>
                             <div className={'name'}>Security Deposit<span className={'question'}></span></div>
                             <div className={'moeny'}>￡ {SecurityDeposit}</div>
                         </div>
                     </div>
                     <Tips><span className={'icon'}></span>Please make sure that you have entered the corrent infomation,the money will  be disbursed to this bank  account.</Tips>
                 </div>
                 <SubMitBtn onClick={() => this.paySubmit()}>Borrow  Money</SubMitBtn>
             </Content>
         )
     }

}

const mapStateToProps = (state)=>({
     isCompeted:state.getIn(['subInfo','isCompeted'])
})
export default connect(mapStateToProps,null)(React.memo(BrowMoeny))
