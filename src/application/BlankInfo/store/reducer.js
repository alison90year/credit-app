import {fromJS} from 'immutable'
import * as actionTypes from './constants'
const defaultSate = fromJS({
    IFSCCode:'',
    BankName:'',
    BankAccountNo:'',
    isCompeted:false, //是否填写完基本信息并通过验证
})

export default (state = defaultSate ,action ) => {
     switch (action.type) {
         case actionTypes.CHANGE_INPUT_VALUE:
             if(action.data.classFiy === 0) {
                 return state.set('IFSCCode',action.data.inputValue)
             }
             if(action.data.classFiy === 1) {
                 return state.set('BankName',action.data.inputValue)
             }
             if(action.data.classFiy === 2) {
                 return state.set('BankAccountNo',action.data.inputValue)
             }
         case actionTypes.CHECKE_INPUT_ISCOMPETED:
             return state.set('isCompeted',action.data)
     }
     return state
}
