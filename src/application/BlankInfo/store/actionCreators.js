import * as actionTypes from './constants'
import { blankInputCheckisCompeted ,createMd5 } from '../../../utils/index'
import {getEditBlankInfo} from '../../../api/request'
import {getUid} from "../../../utils/auth";
import { initFacebookSdk } from '../../../api/facebookSdk'
export const changeInputValueDispatch = (data) => ({
    type:actionTypes.CHANGE_INPUT_VALUE,
    data
})
const isCompetedByBankInfo = (data) => ({
    type:actionTypes.CHECKE_INPUT_ISCOMPETED,
    data
})
export const checkInputIsCompetedDispatch = (data) => {
     return (dispatch) => {
            if(blankInputCheckisCompeted(data)) {
                dispatch(isCompetedByBankInfo(true))
                initFacebookSdk("StartTrial");
                const params = {
                    UserID:getUid(),
                    IFSCCode:data.IFSCCode,
                    BankName:data.BankName,
                    BankAccountNo:data.BankAccountNo,
                    s:createMd5('/account/editbankinfo',`userid=${getUid()}`)
                }
                getEditBlankInfo(params).then(res => {
                    if(res.code === 0){
                        data.history.push('/workInfo')
                    }
                })
            }
     }
}
