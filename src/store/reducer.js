import { combineReducers } from 'redux-immutable'
import { reducer as homeReducer } from '../application/Home/store'
import { reducer as myReducer } from '../application/My/store'
import { reducer as submitInfoReducer } from '../application/SubmitInfo/store'
import { reducer as loginReducer  } from '../application/Login/store'
import { reducer as baseInfoReducer} from '../application/BaseInfo/store'
import {reducer as workInfoReducer } from '../application/WorkInfo/store'
import { reducer as blankInfoReducer } from '../application/BlankInfo/store'
import { reducer as myProfileReducer } from '../application/MyProfile/store'
import { reducer as baseInfoDetailReducer } from '../application/BaseInfoDetail/store'
import { reducer as blankInfoDetailReducer } from '../application/BlankInfoDetail/store'
import { reducer as workInfoDetailReducer } from '../application/WorkInfoDetail/store'
import { reducer as feedBackReducer } from '../application/FeedBack/store'
const reducer =  combineReducers({
    home:homeReducer,
    my:myReducer,
    subInfo:submitInfoReducer,
    login:loginReducer,
    baseInfo:baseInfoReducer,
    workInfo:workInfoReducer,
    blankInfo:blankInfoReducer,
    myProfile:myProfileReducer,
    baseInfoDetail:baseInfoDetailReducer,
    blankInfoDetail:blankInfoDetailReducer,
    workInfoDetail:workInfoDetailReducer,
    feedBack:feedBackReducer
})

export default reducer
