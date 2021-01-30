import  * as actionTypes from './constants'
import { Toast } from 'antd-mobile'
import {createMd5, workInputCheckisCompeted} from '../../../utils/index'
import {getUid} from "../../../utils/auth";
import {getEditWorkInfo} from "../../../api/request";
export const getWorkInputValueDispatch = (data) => ({
    type:actionTypes.GET_WORK_INPUT_VALUE,
    data
})

export const checkInputIsCompetedDispatch = (data) => {
    return (dispatch) => {
        if(workInputCheckisCompeted(data)) {
            const params = {
                UserID:getUid(),
                EmploymentType:data.EmploymentType,
                MoneySalary:data.MoneySalary,
                MonthlyFamilyIncome:data.MonthlyFamilyIncome,
                s:createMd5('/account/editworkinfo',`userid=${getUid()}`)
            }
            getEditWorkInfo(params).then(res => {
              if(res.code === 0){
                  Toast.success('Successfully modified',1,() => {
                      data.history.push('/myProfile')
                  })
              }
            })

        }
    }
}
