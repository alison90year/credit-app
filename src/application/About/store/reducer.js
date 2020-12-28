import { fromJS } from 'immutable';
const defaultState = fromJS({
    name:'dsd3334545s4444d'
})

export default (state = defaultState,action) => {
    if(action.type === 'get_about_func'){
        return state.set('name',action.data)
    }
    return state
}
