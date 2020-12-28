import styled from 'styled-px2vw'

export const Content = styled.div`
   position: fixed;
   left: 0;
   top: 0;
   bottom: 0;
   width: 100%;
   background: #FFFFFF;
   display: flex;
   flex-direction: column;
   .main{
     flex: 1;
     overflow-y: scroll;
     -webkit-overflow-scrolling: touch;
     padding:0 36px;
   }
 `
export const DescText = styled.p`
    display: inline-block;
   line-height: 48px;
   height: 48px;
   color:#000000a6;
   font-size: 28px;
`
export const Header = styled.div`
     padding: 86px 0 62px 36px;
     font-size: 48px;
     text-align: left;
`
export const Footer = styled.div`
     flex:  0 0 108px;
     padding: 0 36px 108px 36px;
     .am-button {
        height: 100%;
        background: linear-gradient(310deg, #00B1B3 0%, #00EE62 100%);
        box-shadow: 0px 2px 22px 0px #6DD6B8;
        color: #FFFFFF;
        font-size: 34px;
        border-radius: 26px;
     }
`
