
import styled from "styled-px2vw";
import danger from '../../assets/danger.svg'

export const Tips = styled.div`
  margin: 30px 40px;
  padding: 0 30px 22px 30px;
  line-height: 30px;
    background: #FFF6E1;
    border-radius: 20px;
    color: #F55200;
    font-size: 24px;
    .icon{
        display: inline-block;
        margin-right: 10px;
        width: 40px;
        height: 40px;
      background: url(${danger}) no-repeat center center / 40px 40px;
    }
    
`
