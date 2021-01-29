import  *  as actionTypes from './constants'
import {baseInputCheckisCompeted, createMd5} from '../../../utils/index'
import { getUid } from "../../../utils/auth";
import { Toast } from "antd-mobile";
import {getEditBaseInfo} from "../../../api/request";
export const changeInputValueDispatch = (data) => ({
 type:actionTypes.CHANGE_INPUT_VALUE,
 data
})

export const checkInputIsCompetedDispatch = (data) => {
   return (dispatch) => {
      if(baseInputCheckisCompeted(data)) {
         //验证通过
          const params = {
              UserID:parseInt(getUid()),
              s:createMd5('/account/editbasicinfo',`userid=${getUid()}`),
              Compellation:data.Compellation,
              Gender:data.Gender === 'Female' ? 1 :0,
              Email:data.Email,
              Birthday:data.Birthday,
              Marital:data.Marital,
              Education:data.Education
          }
          //验证通过
          getEditBaseInfo(params).then(res => {
             if(res.code === 0){
                 Toast.success('Successfully modified',1,() => {
                     data.history.push('/myProfile')
                 })
             }
          })
      }
   }
}

