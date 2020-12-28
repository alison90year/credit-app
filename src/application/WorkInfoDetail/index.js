import React from "react";
import { connect } from 'react-redux'
import { EducationData ,SalaryData ,FamilyData} from '../../api'
import HeadTitle from '../../baseUI/Head'
import { Content, ShadowBox, SubMitBtn} from "../../baseUI/CommonUI";
import  InputItemText  from '../../baseUI/BaseInput'
import { getWorkInputValueDispatch ,checkInputIsCompetedDispatch} from './store/actionCreators'
import {getUser} from "../../utils/auth";
class WorkInfoDetail extends React.Component {
     constructor(props) {
         super(props);
         this.state = {
              titleName :'Work Info',
         }
     }
       render(){
         const { titleName } = this.state
         const { history ,handleClickNextSubmit,handleSelectText ,EmploymentType ,MoneySalary ,MonthlyFamilyIncome } = this.props
           return (
               <Content>
                   <HeadTitle titleName={titleName} history={history} ></HeadTitle>
                   <div className={'main'}>
                       <ShadowBox>
                           <InputItemText inputValue={EmploymentType} data={EducationData} handleSelectText={handleSelectText} classFiy={0} title={'Employment Type'} type={1} placeName ={'Please choose'}>
                           </InputItemText>
                           <InputItemText inputValue={MoneySalary} data={SalaryData} handleSelectText={handleSelectText} classFiy={1} title={'Your  Money Salary'} type={1}  placeName ={'Please choose'}>
                           </InputItemText>
                           <InputItemText inputValue={MonthlyFamilyIncome} data={FamilyData} handleSelectText={handleSelectText} classFiy={2} title={'Monthly  Family Income'} type={1}  placeName ={'Please choose'}>
                           </InputItemText>
                       </ShadowBox>
                       <SubMitBtn onClick={()=>handleClickNextSubmit(this.props)}>Comfirm</SubMitBtn>
                   </div>
               </Content>
           )
       }
}
const mapSateToProps = (state) => ({
    EmploymentType:state.getIn(['workInfoDetail','EmploymentType'])  || getUser().EmploymentType,
    MoneySalary:state.getIn(['workInfoDetail','MoneySalary'])  || getUser().MoneySalary,
    MonthlyFamilyIncome:state.getIn(['workInfoDetail','MonthlyFamilyIncome'])  || getUser().MonthlyFamilyIncome,
})
const mapStateToDispath = (dispatch) => ({
    handleSelectText(data){
        dispatch(getWorkInputValueDispatch(data))
    },
    handleClickNextSubmit(props){
            dispatch(checkInputIsCompetedDispatch(props))
    }
})
export default connect(mapSateToProps,mapStateToDispath)(React.memo(WorkInfoDetail))
