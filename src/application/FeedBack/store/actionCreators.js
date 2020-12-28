
import * as actionTypes from './constants'
import { getFeedBack } from '../../../api/request'
import {getUid} from "../../../utils/auth";
import {createMd5} from "../../../utils";
import {Toast} from "antd-mobile";
export const changeInputValueDispatch = (data) => ({
    type:actionTypes.CHANGE_INPUT_VALUE,
    data
})
export const submitClearContent = (data) => ({
    type:actionTypes.SUBMIT_CLEAR_CONTENT,
    data
})

export const subMitInputBtnDispatch = (data) => {
    return (dispatch) => {
        const params = {
            content:data.content,
            userId:parseInt(getUid()),
            accounts:data.accounts,
            s:createMd5('/feedback',`userId=${getUid()}`)
        }
        getFeedBack(params).then(res => {
            if(res.code === 0) {
                Toast.success('反馈成功',1,()=>{
                    dispatch(submitClearContent(''))
                    data.history.push('/myProfile')
                })

            }
        })

    }
}
