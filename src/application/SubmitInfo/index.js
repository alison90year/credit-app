import React from "react";
import { Steps  } from 'antd-mobile'
import { connect } from 'react-redux'
import { Content ,Header ,SubMitBtn ,SVGIcon ,InputStepItem} from './style'
import headerBg from '../../assets/submit-bg.svg'
import leftIcon from '../../assets/left-arrow.svg'
import subinfoImg from '../../assets/baseinfo.svg'
import createStoreBg from '../../assets/classfiy-store.svg'
import baseInfoImg from '../../assets/base-info.svg'
import rightArrowImg from '../../assets/sub-arrow-right.svg'
import workInfoImg from '../../assets/work.svg'
import blankInfoImg from '../../assets/blank.svg'
import successImg from '../../assets/success.svg'
import { checkInputIsCompetedDispatch } from './store/actionCreators'
const goBackInfo = (history) => {
    history.goBack()
}
const jumpToIndex = (props) => {
    const { history , path } = props
    history.push(path)
}
const renderStepsHtml = () => {
    const Step = Steps.Step;
    const steps = [{
        title: 'Submit Info',
        icon:<SVGIcon imgUrl={subinfoImg} className={'am-icon'} />,
        status:'finish'
    }, {
        title: 'Get credit score',
        icon:<SVGIcon imgUrl={createStoreBg} className={'am-icon'}  />,
        status:'process',
    }, {
        title: 'Get Money',
        icon:<SVGIcon imgUrl={createStoreBg} className={'am-icon'} />,
        status:'process'
    }]
    return steps.map((s, i) => <Step key={i}
                               className={'finish-active'}
                               icon={s.icon} title={s.title} status={s.status} />);
    }
const showCompetedHtml = (isCompeted) => {
        if(isCompeted) {
             return  <div className={'input-info-iscompeted'}>is competed</div>
        }else{
             return <div className={'input-info-default'}>
                    A  few details  about you
             </div>
        }
}
function SubmitInfo (props){
    const { baseInfoCompeted ,workInfoCompeted ,blankInfoCompeted ,handleClickNextSubmit } = props
    return (
           <Content>
               <Header headerBg={ headerBg } leftIcon={leftIcon} >
                   <div className="title">
                       Submit Info
                       <span className={'left-arrow'} onClick={() => goBackInfo(props.history) }></span>
                   </div>
               </Header>
               <div className={'main'}>
                    <div className={'steps-box'}>
                        <Steps direction="horizontal">
                           { renderStepsHtml() }
                        </Steps>
                    </div>
                   <div className={'border-line'}></div>
                   <div className={'user-write-steps'}>
                       <InputStepItem imgUrl={baseInfoImg} competed={successImg} rightArrowImg={rightArrowImg}
                                      onClick={() => jumpToIndex({history:props.history,path:'/baseInfo'})} >
                            <div className={'title'}>Basic Info</div>
                           {
                               showCompetedHtml(baseInfoCompeted)
                           }

                       </InputStepItem>
                           <InputStepItem imgUrl={workInfoImg} competed={successImg} rightArrowImg={rightArrowImg}
                                          onClick={() => jumpToIndex({history:props.history,path:'/workInfo'})} >
                           <div className={'title'}>Work Info</div>
                               {
                                   showCompetedHtml(workInfoCompeted)
                               }
                        </InputStepItem>
                       <InputStepItem imgUrl={blankInfoImg} competed={successImg} rightArrowImg={rightArrowImg}
                                      onClick={() => jumpToIndex({history:props.history,path:'/blankInfo'})} >
                           <div className={'title'}>Bank Info</div>
                           {
                               showCompetedHtml(blankInfoCompeted)
                           }
                       </InputStepItem>
                   </div>
                   <SubMitBtn onClick={()=>handleClickNextSubmit(props)}>Next</SubMitBtn>
               </div>
           </Content>
       )
}
const mapStateToProps = (state) => {
    return {
        baseInfoCompeted:state.getIn(['baseInfo','isCompeted']),
        workInfoCompeted:state.getIn(['workInfo','isCompeted']),
        blankInfoCompeted:state.getIn(['blankInfo','isCompeted']),
    }
}
const mapStateToDispatch = (dispatch) => ({
    handleClickNextSubmit(props){
        dispatch(checkInputIsCompetedDispatch(props))
    }
})

export default connect(mapStateToProps,mapStateToDispatch)(React.memo(SubmitInfo))
