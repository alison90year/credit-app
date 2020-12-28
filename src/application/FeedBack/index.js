import React from "react";
import { connect } from 'react-redux'
import { changeInputValueDispatch ,subMitInputBtnDispatch } from './store/actionCreators'
import {  TextareaItem } from 'antd-mobile';
import { Content ,Header} from "./style";
import { SubMitBtn } from '../../baseUI/CommonUI'
import leftIcon from '../../assets/left-arrow.svg'
const goBackInfo = (history) => {
       history.goBack()
}
class FeedBack extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.autoFocusInst.focus();
    }
    render() {
        return (
            <Content>
                <Header leftIcon={leftIcon}>
                    <div className="title">
                        FeedBack
                        <span className={'left-arrow'} onClick={() => goBackInfo(this.props.history)}></span>
                    </div>
                </Header>
                <div className={'main'}>
                    <div className={'tell-box'}>
                        <TextareaItem
                            ref={el => this.autoFocusInst = el}
                            placeholder={'Tell us something….'}
                            rows={5}
                            onChange={(val) => this.props.changeInputValue(val) }
                            count={100}
                            value={this.props.content}
                        />
                    </div>
                    <SubMitBtn onClick={() => this.props.subMitInputBtnDispatch(this.props)}>send message</SubMitBtn>
                </div>
            </Content>
        )
    }
}
const mapStateToProps = (state) => ({
        content:state.getIn(['feedBack','content']),
        accounts:state.getIn(['login','userInfo','Accounts'])
})
const mapStateToDispatch = (dispatch) => ({
    changeInputValue(val){
        dispatch(changeInputValueDispatch(val))
    },
    subMitInputBtnDispatch(props){
        dispatch(subMitInputBtnDispatch(props))
    }
})
export default connect(mapStateToProps,mapStateToDispatch)(React.memo(FeedBack))
