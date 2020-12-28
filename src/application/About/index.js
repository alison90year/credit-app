import React from "react";
import { connect } from 'react-redux'
import { Content } from './styled'
function About (props){
    return (
            <Content >
                <button onClick={ props.history.goBack }>发返回</button>
                <button onClick={() => props.history.push('/login')}>开始装逼</button>
            </Content>
    )
}
const mapStateToProps =(state) => ({
     aboutList:'3434343434ddddd'
})

export default connect(mapStateToProps)(React.memo(About))
