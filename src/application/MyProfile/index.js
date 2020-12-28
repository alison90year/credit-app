import React from "react";
import { connect } from 'react-redux'
import { Content ,Header ,InputStepItem} from './style'
import headerBg from '../../assets/submit-bg.svg'
import leftIcon from '../../assets/left-arrow.svg'
import baseInfoImg from '../../assets/base-info.svg'
import rightArrowImg from '../../assets/sub-arrow-right.svg'
import workInfoImg from '../../assets/work.svg'
import blankInfoImg from '../../assets/blank.svg'
import successImg from '../../assets/success.svg'
const goBackInfo = (history) => {
    history.goBack()
}
const jumpToIndex = (props) => {
    const { history , path } = props
    history.push(path)
}

const showCompetedHtml = () => {
             return <div className={'input-info-default'}>
                       A  few details  about you
              </div>
}
function SubmitInfo (props){
    return (
           <Content>
               <Header headerBg={ headerBg } leftIcon={leftIcon} >
                   <div className="title">
                       My Profile
                       <span className={'left-arrow'} onClick={() => goBackInfo(props.history) }></span>
                   </div>
               </Header>
               <div className={'main'}>
                   <div className={'user-write-steps'}>
                       <InputStepItem imgUrl={baseInfoImg} competed={successImg} rightArrowImg={rightArrowImg}
                                      onClick={() => jumpToIndex({history:props.history,path:'/baseInfoDetail'})} >
                            <div className={'title'}>Basic Info</div>
                           {
                               showCompetedHtml()
                           }

                       </InputStepItem>
                           <InputStepItem imgUrl={workInfoImg} competed={successImg} rightArrowImg={rightArrowImg}
                                          onClick={() =>  jumpToIndex({history:props.history,path:'/workInfoDetail'})} >
                           <div className={'title'}>Work Info</div>
                               {
                                   showCompetedHtml()
                               }
                        </InputStepItem>
                       <InputStepItem imgUrl={blankInfoImg} competed={successImg} rightArrowImg={rightArrowImg}
                                      onClick={() => jumpToIndex({history:props.history,path:'/blankInfoDetail'})} >
                           <div className={'title'}>Bank Info</div>
                           {
                               showCompetedHtml()
                           }
                       </InputStepItem>
                   </div>

               </div>
           </Content>
       )
}
const mapStateToProps = (state) => {
    return {

    }
}
const mapStateToDispatch = (dispatch) => ({

})

export default connect(mapStateToProps,mapStateToDispatch)(React.memo(SubmitInfo))
