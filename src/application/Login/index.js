import React from "react";
import { InputItem  ,Checkbox ,Button ,Toast} from 'antd-mobile';
import * as  actionTypes from './store/actionCreators'
import { connect } from 'react-redux'
import phoneImg from '../../assets/phone.svg'
import lockImg from '../../assets/lock.svg'
import { Content , InputIcon} from './style'
import {getUser} from "../../utils/auth";
class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log(getUser())
        if(getUser()){
            this.props.history.push('/browMoeny')
        }
    }

    render() {
       const AgreeItem = Checkbox.AgreeItem;
       return (
           <Content>
               <div className={'title'}>SMS</div>
               <p className={'text'}>CODE  LOGIN</p>
               <div className={'login-wrap'}>
                   <div className={'input-phone-inner'}>
                       <InputItem
                           type="tel"
                           maxLength='12'
                           onChange={(e) => this.props.changeInputPhoneDispatch(e)}
                           placeholder="+91  phone number">
                           <InputIcon imgUrl={phoneImg} />
                       </InputItem>
                   </div>
                   <div className={'input-code-inner'}>
                       <InputItem
                           type='number'
                           maxLength='4'
                           value={this.props.code}
                           placeholder="Ent OTP">
                           <InputIcon imgUrl={lockImg} />
                       </InputItem>
                       <Button  className={'send-btn'} onClick={() => this.props.clickGetCodeByPhone(this.props.phone)}>Get OTP</Button>
                   </div>
                   <div className={'input-desc-gree'}>
                       <AgreeItem data-seed="logId"
                                  onChange={ (v) => this.props.greeCheckDispatch(v)}>
                           <a onClick={(e) => this.props.readPricacyeDispatch(e) }
                              className={'desc'} >I agree to terms and conditions
                               <span className={'desc-title'}>《Privacy Policy》</span>
                           </a>
                       </AgreeItem>
                   </div>
               </div>
               <div className={'login-submit-btn'} onClick={ () => this.props.checkLoginDispatch({...this.props }) }>Login to get loans</div>
           </Content>
       )
   }
}

const mapSateToProps = (state) => ({
    checked:state.getIn(['login','checked']),
    phone:state.getIn(['login','phone']),
    code:state.getIn(['login','code']),
    inputCode:state.getIn(['login','inputCode']),
    loginStatus:state.getIn(['login','loginStatus']),
})
const mapDispatchToProps = (dispatch) => {
      return {
          greeCheckDispatch(e){
                dispatch(actionTypes.changeGreeChecked(e.target.checked))
            },
          readPricacyeDispatch(e){
                e.preventDefault()
          },
          changeInputPhoneDispatch(phoneNum){
                 dispatch(actionTypes.changeInputPhone(phoneNum))
          },
          clickGetCodeByPhone(phone){
              dispatch(actionTypes.getCodeByPhone(phone))
          },
          checkLoginDispatch(data){
              const params = {
                  checked :data.checked,
                  phone:data.phone,
                  code:data.code,
                  history:data.history
              }
            dispatch(actionTypes.changeInputLogin(params))
          }
      }
}
export default connect(mapSateToProps, mapDispatchToProps )(React.memo(Login))
