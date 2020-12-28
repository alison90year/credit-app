import { fromJS } from 'immutable'

const defaultState = fromJS({
    tintColor:'#18A97D',
    selectedTab:'me',
    files:[{
        url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
        id: '2121',
    }, {
        url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
        id: '2122',
    }],
    multiple:false
})

export default (state = defaultState ,action) => {
    return state
}

