import { get,post } from './config'

export const getUserInfoHttp = (params) => {
    return get("api/account/login",params);
};
export const getEditBaseInfo = (params) => {
    return post("/api/account/editbasicinfo",params);
};
export const getEditBlankInfo = (params) => {
    return post("/api/account/editbankinfo",params);
};

export const getEditWorkInfo = (params) => {
    return post("/api/account/editworkinfo",params);
};
export const getFeedBack = (params) => {
    return get("/api/feedback",params);
};

export const getAppLoanConfig = (params) => {
    return get("/api/getapploanconfig",params);
};
export const getMallConfig = (params) => {
    return get("/api/getmallconfig",params);
};
export const getPaySubmit = (params) => {
    return get("/pay/submit",params);
};
