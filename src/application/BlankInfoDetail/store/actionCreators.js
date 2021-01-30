import * as actionTypes from './constants'
import {blankInputCheckisCompeted, createMd5} from '../../../utils/index'
import {getUid} from "../../../utils/auth";
import {getEditBlankInfo} from "../../../api/request";
export const changeInputValueDispatch = (data) => ({
    type:actionTypes.CHANGE_INPUT_VALUE,
    data
})

export const checkInputIsCompetedDispatch = (data) => {
     return (dispatch) => {
            if(blankInputCheckisCompeted(data)) {
                const params = {
                    UserID:getUid(),
                    IFSCCode:data.IFSCCode,
                    BankName:data.BankName,
                    BankAccountNo:data.BankAccountNo,
                    s:createMd5('/account/editbankinfo',`userid=${getUid()}`)
                }
                getEditBlankInfo(params).then(res => {
                    if(res.code === 0){
                        data.history.push('/myProfile')
                    }
                })

            }
     }
}
