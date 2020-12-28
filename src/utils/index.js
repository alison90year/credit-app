import { Toast } from 'antd-mobile'
import md5 from 'md5'
import {setUid, getUid, getToken} from '../utils/auth'
    // 91981059788
    // 917526812579
const fromHasEmpty = 'Please complete the form content!' //验证提示
const phoneIsEmpty = 'Phone number cannot be empty!'
const phoneIsRule = 'Phone number format is not correct!'
const productGreet = 'Please agree with the product description!'
const codeIsEmpty = 'verification code must be filled!'
const codeIsNotRight = 'Incorrect verification code!'
const emailIsEmpty = 'E-mail format is incorrect！'

const toast = (content,type,duration) => {
        if(type === 'success') {
            Toast.success(content,duration || 1)
        }else if(type === 'info') {
            Toast.info(content,duration || 1 )
        }else if(type === 'fail') {
            Toast.fail(content,duration = 3)
        }else if(type === 'loading') {
            Toast.loading(content,duration = 3)
        }
}
export const arrToObj = (item,pre) => {
    const childList = item.child
    const newArr = childList.filter(function (obj) {
        return obj.LoanPrice== pre.Disbursal && obj.Days == item.name;
    });
    return newArr[0]
}
export const createMd5 = (name,params) => {
      return md5(`/api${name}/${params}&key=085cab60e93ecd`)
}
export const createMd5NoApi = (name,params) => {
    console.log(`${name}/${params}&key=085cab60e93ecd`)
    return md5(`${name}/${params}&key=085cab60e93ecd`)
}
export const formartParamsToString= (data) => {
    const params = {
        Accounts:'123' , Birthday :'22',
        // NickName:'333' ,Compellation:'444' ,LogonPass  ,Gender:'24344' ,RegisterMachine ,Marital:'3434' ,Education:'3434' ,
        IFSCCode:'3434' ,BankName:'454545' ,Email:'34' ,BankAccountNo:'3434' ,EmploymentType:'3434',MoneySalary:'34343',MonthlyFamilyIncome:'54545',
        s:getToken('Token')
    }
    return params
}
export const formateData= (data,tagName) => {
    let dataInfo = {};
    data.forEach((item, index) => {
        let  name  = item[tagName];
        if (!dataInfo[name]) {
            dataInfo[name] = {
                name,
                child: []
            }
        }
        dataInfo[name].child.push(item);
    });
    let list = Object.values(dataInfo); // list 转换成功的数据
    return list
}
export const phoneCheck = (str) => {
        let reg = new RegExp(/^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/)
          if(str === ''){
              toast(phoneIsEmpty,'info')
              return false
          } else {
              if (!reg.test(str)) {
                  toast(phoneIsRule,'info')
                  return false
              } else {
                  return true
              }
      }
}

export const loginCheck = (phone,code,checked) => {
        if(!checked) {
            toast(productGreet,'info')
            return false
        }
        if(code === '') {
            toast(codeIsEmpty,'info')
            return  false
        } else {
            if(code.length !== 4) {
                toast('请获取验证码','info')
                return  false
            } else {
                if(phoneCheck(phone)) {
                    return true
                }
            }

        }

}
const EmailChek =(str) => {
     const reg = new RegExp(/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/)
     if(reg.test(str)) {
         return true
     } else {
         return false
     }
}

export const baseInputCheckisCompeted = (data) => {
    const {NameText,Birthday ,Gender ,Marital ,Education,Email } = data
      if(NameText == '' || Birthday == '' ||
          Gender == '' || Marital == '' ||
          Education == '' || Email == '') {
          toast(fromHasEmpty,'info')
          return false
      }else {
           if(!EmailChek(Email)) {
               toast(emailIsEmpty,'info')
               return false
           }else{
                return true
           }
      }
}
export const workInputCheckisCompeted = (data) => {
    const { EmploymentType ,MoneySalary ,MonthlyFamilyIncome } = data
    if(EmploymentType == '' || MoneySalary == '' || MonthlyFamilyIncome == '') {
        toast(fromHasEmpty,'info')
        return false
    } else {
        return true
    }
}

export const blankInputCheckisCompeted = (data) => {

    const {IFSCCode , BankName ,BankAccountNo } = data
      if(IFSCCode == '' || BankName == '' || BankAccountNo == '') {
          toast(fromHasEmpty,'info')
          return false
      } else {
          return true
      }
}

export const subInfoCheckisCompeted = (data) => {
    const {baseInfoCompeted ,workInfoCompeted ,blankInfoCompeted } = data
     if(baseInfoCompeted && workInfoCompeted && blankInfoCompeted) {
          return true
     } else {
          toast(fromHasEmpty,'info')
          return  false
     }
}

export const createCode= (codeLength = 4) => {
    var code='';
    var selectChar=Array("0","1","2","3","4","5","6","7","8","9");
    for(var i=0;i<codeLength;i++){
        var charIndex=Math.floor(Math.random()*9);
        code+= selectChar[charIndex];
    }
    if (code.length != codeLength) {
        createCode(codeLength);
    }
    return code
}
