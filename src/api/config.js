import axios from 'axios'
import QS from 'qs'
import { Toast } from 'antd-mobile';
let baseUrl = ''
if(process.env.NODE_ENV === 'development'){
    baseUrl = 'http://154.92.18.244:803/'
}else{
    baseUrl = 'http://154.92.18.244:803/'
}
//axios的实例以及拦截器配置
const service = axios.create({
    baseURL:baseUrl,
    timeout: 5000,
       headers:{
           'Content-Type':'application/x-www-form-urlencoded'
       }
});
// 添加请求拦截器
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
})

//响应请求
service.interceptors.response.use(
    res =>  {
        const response = res.data
        return responseCodeHandle(response)
    }, error => {
      return  Toast.offline('network Disconnected',2)
    }
)
function responseCodeHandle(res) {
    if (res.code === 0 ) {
        return res
    } else {
        if (res.code === 1) {
            Toast.offline( 'network Disconnected',2)
            return res
        }
        return Promise.reject(new Error( res))
    }
}
function get(url, params) {
    return new Promise((resolve, reject) => {
        service
            .get(url, {
                params: params
            })
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}

function post(url, params) {
    service.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
    return new Promise((resolve, reject) => {
        service
            .post(url, params)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}



export {
    get,post
}
