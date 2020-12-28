import React from "react";
import { Steps  } from 'antd-mobile'
import { Content ,SVGIcon} from './style'
import headerBg from '../../assets/submit-bg.svg'
import subinfoImg from '../../assets/baseinfo.svg'
import createStoreBg from '../../assets/classfiy-store.svg'
import { Header } from './style';
const renderStepsHtml = () => {
    const Step = Steps.Step;
    const steps = [{
        title: 'Submit Info',
        icon:<SVGIcon imgUrl={subinfoImg} className={'am-icon'} />,
        status:'finish'
    }, {
        title: 'Get credit score',
        icon:<SVGIcon imgUrl={createStoreBg} className={'am-icon'}  />,
        status:'finish',
    }, {
        title: 'Get Money',
        icon:<SVGIcon imgUrl={createStoreBg} className={'am-icon'} />,
        status:'process'
    }]
    return steps.map((s, i) => <Step key={i}
                                     className={'finish-active'}
                                     icon={s.icon} title={s.title} status={s.status} />);
}

class CreditCheck extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            seconds: 4,
            dlgTipTxt: ''
        };
    }
    componentDidMount() {
        let timer = setInterval(() => {
            this.setState((preState) =>({
                seconds: preState.seconds - 1,
                dlgTipTxt: `0${preState.seconds - 1}s即将进入页面browMoeny`,
            }),() => {
                if(this.state.seconds == 0){
                    clearInterval(timer);
                    this.props.history.push('/browMoeny')
                }
            });
        }, 1000)
    }

    render() {
         return (
             <Content>
                 <Header headerBg={ headerBg }>
                     <div className="title">
                     </div>
                 </Header>

                 <div className={'main'}>
                     <span className={'count-leave'}>{this.state.dlgTipTxt}</span>
                     <div className={'steps-box'}>
                         <Steps direction="horizontal">
                             { renderStepsHtml() }
                         </Steps>
                     </div>
                     <div className={'percenter-wrap'}>
                        <div className={'title'}>Intelligent risk control evaluation</div>
                         <div className={'radius-loan'}>
                            <span className={'num'}>100%</span>
                         </div>
                         <div className={'percenter-footer'}>
                             We are accessing your loan eligibility it
                             will take 3s .Please wait for the result</div>
                     </div>
                 </div>
             </Content>
         )
     }
}

export default CreditCheck
