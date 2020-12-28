import React from "react";
import { connect } from "react-redux";
import HeadTitle from '../../baseUI/Head'
import {Content , ShadowBox  ,SubMitBtn } from '../../baseUI/CommonUI'
import {changeInputValueDispatch ,checkInputIsCompetedDispatch } from './store/actionCreators'
import  InputItemText  from '../../baseUI/BaseInput'
import { birthDayData ,GenderData , MaritalData ,EducationData  } from '../../api'
import {getUser} from "../../utils/auth";
class BaseInfoDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titleName : 'Basic Info ',
        }
    }
     render(){
        const { history ,handleSelectText ,handleClickNextSubmit ,Compellation,Birthday ,Gender ,Marital ,Education,Email ,changeInputValue} = this.props
         const { titleName} = this.state
         return (
             <Content>
                 <HeadTitle titleName={titleName} history={history} ></HeadTitle>
                 <div className={'main'}>
                     <ShadowBox>
                         <InputItemText key={4} title={'Name'} changeInputValue={changeInputValue} classFiy={0} inputValue={Compellation} type={0} placeName={'Please input Name'}>
                         </InputItemText>
                         <InputItemText cols={3} key={0} title={'Birthday'}  classFiy={1} inputValue={Birthday}  data={ birthDayData } handleSelectText={handleSelectText}  type={1}  placeName ={'Please choose'}>
                         </InputItemText>
                         <InputItemText key={1} title={'Gender'}  classFiy={2} inputValue={Gender} data={GenderData} handleSelectText={handleSelectText}  type={1}  placeName ={'Please choose'}>
                         </InputItemText>
                         <InputItemText key={2} title={'Marital'}  classFiy={3} inputValue={Marital} data={MaritalData} handleSelectText={handleSelectText}  type={1}  placeName ={'Please choose'}>
                         </InputItemText>
                         <InputItemText key={3} title={'Education'}  classFiy={4} inputValue={Education} data={EducationData} handleSelectText={handleSelectText}  type={1}  placeName ={'Please choose'}>
                         </InputItemText>
                         <InputItemText key={5} title={'E-mail'}  changeInputValue={changeInputValue} inputValue={Email} classFiy={5} type={0}  placeName ={'Please input your e-mail'}>
                         </InputItemText>
                     </ShadowBox>
                     <SubMitBtn onClick={() => handleClickNextSubmit(this.props)}>Comfirm</SubMitBtn>
                 </div>
             </Content>
         )
     }
}

const mapStateToProps = (state) => ({
    Compellation:state.getIn(['baseInfoDetail','Compellation']) || getUser().NickName,
    Birthday:state.getIn(['baseInfoDetail','Birthday'])|| getUser().Birthday,
    Gender:state.getIn(['baseInfoDetail','Gender']) || getUser().Gender,
    Marital:state.getIn(['baseInfoDetail','Marital']) ||  getUser().Marital,
    Education:state.getIn(['baseInfoDetail','Education'])  || getUser().Education,
    Email:state.getIn(['baseInfoDetail','Email'])  ||  getUser().Email,

})

const mapStateToDispatch = (dispatch) => ({
    handleSelectText(data){
        dispatch(changeInputValueDispatch(data))
    },
    changeInputValue(newValue,classFiy){
        dispatch(changeInputValueDispatch({inputValue:newValue,classFiy:classFiy}))
    },
    handleClickNextSubmit(props) {
        dispatch(checkInputIsCompetedDispatch(props))
    }
})

export default connect(mapStateToProps,mapStateToDispatch)(React.memo(BaseInfoDetail))
