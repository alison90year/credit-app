import {fromJS} from 'immutable'
import * as actionTypes from './constants'
const defaultSate = fromJS({
    IFSCCode:'',
    BankName:'',
    BankAccountNo:'',
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
     }
     return state
}
