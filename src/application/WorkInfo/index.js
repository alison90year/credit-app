import React from "react";
import { connect } from 'react-redux'
import { EducationData ,SalaryData ,FamilyData} from '../../api'
import HeadTitle from '../../baseUI/Head'
import { Content, ShadowBox, SubMitBtn} from "../../baseUI/CommonUI";
import  InputItemText  from '../../baseUI/BaseInput'
import { getWorkInputValueDispatch ,checkInputIsCompetedDispatch} from './store/actionCreators'
class WorkInfo extends React.Component {
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
                       <SubMitBtn onClick={()=>handleClickNextSubmit(this.props)}>Next</SubMitBtn>
                   </div>
               </Content>
           )
       }
}
const mapSateToProps = (state) => ({
    EmploymentType:state.getIn(['workInfo','EmploymentType']),
    MoneySalary:state.getIn(['workInfo','MoneySalary']) ,
    MonthlyFamilyIncome:state.getIn(['workInfo','MonthlyFamilyIncome']),
})
const mapStateToDispath = (dispatch) => ({
    handleSelectText(data){
        dispatch(getWorkInputValueDispatch(data))
    },
    handleClickNextSubmit(props){
        dispatch(checkInputIsCompetedDispatch(props))
    }
})
export default connect(mapSateToProps,mapStateToDispath)(React.memo(WorkInfo))
