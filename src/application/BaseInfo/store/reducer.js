import { fromJS } from 'immutable'
import  *  as actionTypes from './constants'
const defaultState = fromJS({
    Compellation:'',  // 0
    Birthday:'',  //01
    Gender:'', //02
    Marital:'', //03
    Education:'', //04
    Email:'' ,//05,
    isCompeted:false, //是否填写完基本信息并通过验证

})
export default (state = defaultState,action) => {
      switch (action.type) {
          case actionTypes.CHANGE_INPUT_VALUE:
              if(action.data.classFiy === 0) {
                  return state.set('Compellation',action.data.inputValue)
              }
              if(action.data.classFiy === 1) {
                  return state.set('Birthday',action.data.inputValue.join('-'))
              }
              if(action.data.classFiy === 2) {
                  return state.set('Gender',action.data.inputValue)
              }
              if(action.data.classFiy === 3) {
                  return state.set('Marital',action.data.inputValue.toString())
              }
              if(action.data.classFiy === 4) {
                  return state.set('Education',action.data.inputValue.toString())
              }
              if(action.data.classFiy === 5) {
                  return state.set('Email',action.data.inputValue)
              }
          case actionTypes.CHECKE_INPUT_ISCOMPETED:
              return state.set('isCompeted',action.data)
      }

      return state
}
