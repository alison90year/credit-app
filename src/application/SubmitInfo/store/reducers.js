import {fromJS} from 'immutable'
import * as actionTypes from './contants'
const defaultState = fromJS({
    isCompeted:false
})

export default (state = defaultState ,action) => {
        switch (action.type){
            case actionTypes.CHECKE_INPUT_ISCOMPETED:
                return state.set('isCompeted',action.data)
        }
         return state
}
