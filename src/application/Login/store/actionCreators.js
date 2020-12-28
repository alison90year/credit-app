import * as actionTypes from './constants'
import { fromJS } from 'immutable'
import { Toast } from 'antd-mobile'
import { loginCheck ,phoneCheck ,createCode,createMd5 } from '../../../utils/index'
import {getUser, setUid, setUser} from '../../../utils/auth'
import { getUserInfoHttp } from '../../../api/request'

export const changeGreeChecked = (data) => ({
     type:actionTypes.GREE_CHECKED,
      data
})
export const getCodeByPhoneAction = (data) =>({
      type:actionTypes.GET_CODE_BY_PHONE,
      data
})
export const getCodeByPhone = (phone) => {
     return (dispatch) => {
        if(phoneCheck(phone)){
            //随机生成4位验证码
            let code = createCode(4)
            Toast.info('Please Waitting...',4,() => {
                dispatch(getCodeByPhoneAction(code))
            })
        }
     }
}

export const changeInputPhone = (data) => ({
     type:actionTypes.CHANGE_INPUT_PHONE,
     data
})

export const changeInputLogin = (data) => {
    return (dispatch) => {
        const { phone,code,checked ,history } = data
        if(loginCheck(phone,code,checked)) {
            let key= createMd5('/account/login',`userName=${phone}&pwd=${code}`)
            let params = {
                userName:phone,
                pwd:code,
                s:key
            }
            getUserInfoHttp(params).then(res => {
                console.log(res)
                if(res.code === 0){
                    Toast.success('login success',1,()=> {
                        //保存userid 到本地
                        setUid(res.data.UserID)
                        setUser(res.data)
                        //保存个人信息到redux
                        dispatch(changeInputLoginAction(res.data))
                        //改变登陆状态
                        dispatch(changeLoginStatusAction(true))
                        if(!getUser().LastLogonMobile){  //第一次注册
                            history.push('/baseInfo')
                        }else{
                            //跳转到基本信息
                            history.push('/browMoeny')
                        }
                    })
                }
            }).catch(err => {
                 console.log(err)
            })
        }
    }
}

export const changeLoginStatusAction = (data) => ({
    type:actionTypes.CHANGE_LOGIN_STATUS,
    data:fromJS(data)
})
export const changeInputLoginAction = (data) => ({
    type:actionTypes.CHECK_INPUT_LOGIN,
    data:fromJS(data)
})


