import { fromJS } from 'immutable'
import * as actionTypes from './constants'
const defaultState = fromJS({
  content:''
})
export default (state = defaultState ,action) => {
    switch (action.type){
        case actionTypes.CHANGE_INPUT_VALUE:
            return state.set('content',action.data)
        case actionTypes.SUBMIT_CLEAR_CONTENT:
            return state.set('content',action.data)
    }
    return state
}
