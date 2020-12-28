import { fromJS } from 'immutable'
import * as actionTypes from './constants'
import {getUser} from "../../../utils/auth";
const defaultState = fromJS({
    userInfo:getUser() || {},
    checked:false,
    phone:'',
    loginStatus:false,
    code:'',
})
export default (state = defaultState,action) => {
  switch (action.type) {
      case actionTypes.GREE_CHECKED:
          return state.set('checked',action.data)
      case actionTypes.CHANGE_INPUT_PHONE:
          return  state.set('phone',action.data)
      case actionTypes.GET_CODE_BY_PHONE:
          return  state.set('code',action.data)
      case actionTypes.CHECK_INPUT_LOGIN:
          return  state.set('userInfo',action.data)
      case actionTypes.CHANGE_LOGIN_STATUS:
          return state.set('loginStatus',action.data).set('phone','').set('code','')
  }
   return state
}

