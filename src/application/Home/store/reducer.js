import { fromJS } from 'immutable'

const defaultState = fromJS({
    tintColor:'#18A97D',
    selectedTab:'home',

})

export default (state = defaultState , action) => {

    return state
}
