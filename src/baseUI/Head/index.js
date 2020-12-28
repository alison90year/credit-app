import React from 'react';
import styled from 'styled-px2vw';
import LeftIcon from '../../assets/left.svg'
import {getUid} from "../../utils/auth";
const HeaderWrap = styled.div`
    position: relative;
    width: 100%;
    height: 90px;
    line-height: 90px;
    font-size: 40px;
    font-family: Roboto-Medium, Roboto;
    font-weight: 500;
    color: #1C1939;
    text-align: center;
    .icon-left {
      position: absolute;
      left: 34px;
      top: 50%;
      margin-top: -24px;
      width: 48px;
      height: 48px;
      background: url(${() => LeftIcon}) no-repeat center center / 48px 48px ;
    }
`
const jumpIndex = (props) => {
    const {  history } = props
    if(getUid() && history.location.pathname === '/baseInfo') {
        history.push('/browMoeny')
    }else{
        history.goBack()
    }
}
function Header(props)  {
    const { titleName  } = props
    return (
      <HeaderWrap>
          <span>{ titleName }</span>
          <span className={'icon-left'} onClick={() => jumpIndex(props) }></span>
      </HeaderWrap>
    );
}

export default React.memo(Header);
