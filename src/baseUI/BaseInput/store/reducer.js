import {fromJS} from 'immutable'


const defaultState = fromJS({

})

export default (state = defaultState ,action) =>{
       switch (action.type) {
           case '34':
               return state.set('','22')
       }
       return state
}
