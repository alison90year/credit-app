import * as actionTypes from './contants'
import { subInfoCheckisCompeted } from '../../../utils/index'
import { initFacebookSdk } from '../../../api/facebookSdk'
// window.fbAsyncInit = function() {
//     FB.init({
//         appId      : '1515355465520643',
//         xfbml      : true,
//         version    : 'v9.0'
//     });
//     FB.AppEvents.logPageView();
// };
export const checkInputIsCompeted = (data) => ({
     type:actionTypes.CHECKE_INPUT_ISCOMPETED,
     data
})

export const checkInputIsCompetedDispatch = (data) => {
     return (dispatch) => {
            if(subInfoCheckisCompeted(data)){
                initFacebookSdk("complete_registration");
                dispatch(checkInputIsCompeted(true))
                data.history.push('/creditCheck')
            }
     }
}
