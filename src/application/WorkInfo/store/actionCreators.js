import  * as actionTypes from './constants'
import {createMd5, workInputCheckisCompeted} from '../../../utils/index'
import { getEditWorkInfo} from '../../../api/request'
import {getUid} from "../../../utils/auth";
export const getWorkInputValueDispatch = (data) => ({
    type:actionTypes.GET_WORK_INPUT_VALUE,
    data
})

export const isCompetedByWorkInfo = (data) => ({
     type:actionTypes.CHECKE_INPUT_ISCOMPETED,
     data
})
export const checkInputIsCompetedDispatch = (data) => {
    return (dispatch) => {
        if(workInputCheckisCompeted(data)) {
                dispatch(isCompetedByWorkInfo(true))
                const params = {
                    UserID:parseInt(getUid()),
                    EmploymentType:data.EmploymentType,
                    MoneySalary:data.MoneySalary,
                    MonthlyFamilyIncome:data.MonthlyFamilyIncome,
                    s:createMd5('/account/editworkinfo',`userid=${getUid()}`)
                }
                   getEditWorkInfo(params).then(res => {
                       data.history.push('/subInfo')
                    })

        }
    }
}
