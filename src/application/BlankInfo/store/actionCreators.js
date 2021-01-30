import * as actionTypes from './constants'
import { blankInputCheckisCompeted ,createMd5 } from '../../../utils/index'
import {getEditBlankInfo} from '../../../api/request'
import {getUid} from "../../../utils/auth";
import '../../../api/facebookSdk'
window.fbAsyncInit = function() {
    FB.init({
        appId      : '1515355465520643',
        xfbml      : true,
        version    : 'v9.0'
    });
    FB.AppEvents.logPageView();
};
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
                FB.AppEvents.logEvent("StartTrial");
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
