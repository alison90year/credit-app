import Cookies from 'js-cookie'
const TokenKey = 'Token'
const UidKey = 'x-uid'
const User = 'userInfo'
export function getToken() {
    return Cookies.get(TokenKey)
}
export function setToken(token) {
    return Cookies.set(TokenKey, token)
}
export function removeToken() {
    return Cookies.remove(TokenKey)
}

export function getUid() {
    return Cookies.get(UidKey)
}
export function setUid(uid) {
    return Cookies.set(UidKey, uid)
}
export function setUser(info) {
    return localStorage.setItem(User,JSON.stringify(info))
}
export function getUser() {
    return JSON.parse(localStorage.getItem(User)) || {}
}
export function removeUser(){
    localStorage.clear()
}
export function removeUid() {
    return Cookies.remove(UidKey)
}
