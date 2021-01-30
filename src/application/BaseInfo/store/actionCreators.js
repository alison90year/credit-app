import  *  as actionTypes from './constants'
import { baseInputCheckisCompeted ,createMd5 } from '../../../utils/index'
import { getEditBaseInfo } from '../../../api/request'
import {getToken, getUid} from "../../../utils/auth";
export const changeInputValueDispatch = (data) => ({
 type:actionTypes.CHANGE_INPUT_VALUE,
 data
})
const isCompetedByBaseInfo = (data) => ({
    type:actionTypes.CHECKE_INPUT_ISCOMPETED,
    data
})
export const checkInputIsCompetedDispatch = (data) => {
   return (dispatch) => {
      if(baseInputCheckisCompeted(data)) {
          const params = {
              UserID:getUid(),
              s:createMd5('/account/editbasicinfo',`userid=${getUid()}`),
              Compellation:data.Compellation,
              Gender:data.Gender === 'Male' ? 0 :1,
              Email:data.Email,
              Birthday:data.Birthday,
              Marital:data.Marital,
              Education:data.Education
          }
          dispatch(isCompetedByBaseInfo(true))
         //验证通过
          getEditBaseInfo(params).then(res => {
              if(res.code === 0){
                  data.history.push('/blankInfo')
              }
          })
      }
   }
}

