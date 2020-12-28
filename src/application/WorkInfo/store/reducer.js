import { fromJS } from 'immutable'
import * as actionTypes from './constants'
const defaultState = fromJS({
    EmploymentType:'',
    MoneySalary:'',
    MonthlyFamilyIncome:'',
    isCompeted:false
})

export default (state = defaultState ,action ) => {
    switch (action.type) {
        case actionTypes.GET_WORK_INPUT_VALUE:
            if(action.data.classFiy === 0) {
                return state.set('EmploymentType',action.data.inputValue.toString())
            }
            if(action.data.classFiy === 1) {
                return state.set('MoneySalary',action.data.inputValue.toString())
            }
            if(action.data.classFiy === 2) {
                return state.set('MonthlyFamilyIncome',action.data.inputValue.toString())
            }
        case actionTypes.CHECKE_INPUT_ISCOMPETED:
            return state.set('isCompeted',action.data)
    }
    return state
}
