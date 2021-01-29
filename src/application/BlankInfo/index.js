import React from "react";
import { connect } from 'react-redux'
import HeadTitle from '../../baseUI/Head'
import { Content , ShadowBox  ,SubMitBtn} from '../../baseUI/CommonUI'
import  InputItemText  from '../../baseUI/BaseInput'
import { changeInputValueDispatch ,checkInputIsCompetedDispatch } from './store/actionCreators'
import { Tips } from './style'
import {getUser} from "../../utils/auth";

class BlankInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titleName :'Blank Info'
        }
    }
    componentDidMount() {
        console.log(getUser())
        if(!getUser()){
            this.props.history.push('/login')
        }
    }

    render(){
        const { titleName } = this.state
        const { history ,ifscCode ,bankName ,bankAccount ,handleClickNextSubmit ,changeInputValue } = this.props
        return (
            <Content>
                <HeadTitle titleName={titleName} history={history} ></HeadTitle>
                <div className={'main'}>
                    <ShadowBox>
                            <InputItemText inputType={'number'} changeInputValue={changeInputValue} classFiy={0} inputValue={ifscCode} title={'IFSC Code'} type={0} placeName ={'Please input'}>
                            </InputItemText>
                            <InputItemText changeInputValue={changeInputValue} classFiy={1} inputValue={bankName}  title={'Bank Name'} type={0}  placeName ={'Please input'}>
                            </InputItemText>
                            <InputItemText inputType={'bankCard'} changeInputValue={changeInputValue} classFiy={2} inputValue={bankAccount} title={'Bank  Account  No.'} type={0}  placeName ={'Please input'}>
                            </InputItemText>
                    </ShadowBox>
                    <Tips><span className={'icon'}></span>Please make sure that you have entered the corrent infomation,the money will  be disbursed to this bank  account.</Tips>
                    <SubMitBtn onClick={()=>handleClickNextSubmit(this.props)}>Next</SubMitBtn>
                </div>
            </Content>
        )
    }
}
const mapSateToProps = (state) => ({
    IFSCCode:state.getIn(['blankInfo','IFSCCode']),
    BankName:state.getIn(['blankInfo','BankName']),
    BankAccountNo:state.getIn(['blankInfo','BankAccountNo']),
})
const mapStateToDispatch = (dispatch) => ({
    changeInputValue(newValue,classFiy){
        dispatch(changeInputValueDispatch({inputValue:newValue,classFiy:classFiy}))
    },
    handleClickNextSubmit(props){
        dispatch(checkInputIsCompetedDispatch(props))
    }
})
export default connect(mapSateToProps,mapStateToDispatch)(React.memo(BlankInfo))
