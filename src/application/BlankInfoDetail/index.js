import React from "react";
import { connect } from 'react-redux'
import HeadTitle from '../../baseUI/Head'
import { Content , ShadowBox  ,SubMitBtn} from '../../baseUI/CommonUI'
import  InputItemText  from '../../baseUI/BaseInput'
import { changeInputValueDispatch ,checkInputIsCompetedDispatch } from './store/actionCreators'
import {getUser} from "../../utils/auth";

class BlankInfoDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titleName :'Blank Info'
        }
    }
    render(){
        const { titleName } = this.state
        const { history ,IFSCCode ,BankName ,BankAccountNo ,handleClickNextSubmit ,changeInputValue } = this.props
        return (
            <Content>
                <HeadTitle titleName={titleName} history={history} ></HeadTitle>
                <div className={'main'}>
                    <ShadowBox>
                            <InputItemText inputType={'number'} changeInputValue={changeInputValue} classFiy={0} inputValue={IFSCCode} title={'IFSC Code'} type={0} placeName ={'Please input'}>
                            </InputItemText>
                            <InputItemText changeInputValue={changeInputValue} classFiy={1} inputValue={BankName}  title={'Bank Name'} type={0}  placeName ={'Please input'}>
                            </InputItemText>
                            <InputItemText inputType={'bankCard'} changeInputValue={changeInputValue} classFiy={2} inputValue={BankAccountNo} title={'Bank  Account  No.'} type={0}  placeName ={'Please input'}>
                            </InputItemText>
                    </ShadowBox>
                    <SubMitBtn onClick={()=>handleClickNextSubmit(this.props)}>Comfirm</SubMitBtn>
                </div>
            </Content>
        )
    }
}
const mapSateToProps = (state) => ({
    IFSCCode:state.getIn(['blankInfoDetail','IFSCCode']) ||  getUser().IFSCCode,
    BankName:state.getIn(['blankInfoDetail','BankName']) ||  getUser().BankName,
    BankAccountNo:state.getIn(['blankInfoDetail','BankAccountNo']) || getUser().BankAccountNo,
})
const mapStateToDispatch = (dispatch) => ({
    changeInputValue(newValue,classFiy){
        dispatch(changeInputValueDispatch({inputValue:newValue,classFiy:classFiy}))
    },
    handleClickNextSubmit(props){
        dispatch(checkInputIsCompetedDispatch(props))
    }
})
export default connect(mapSateToProps,mapStateToDispatch)(React.memo(BlankInfoDetail))
