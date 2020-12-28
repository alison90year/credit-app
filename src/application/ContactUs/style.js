import styled from 'styled-px2vw'

export const Content = styled.div`
   position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    .main {
       position: absolute;
       left: 0;
       right: 0;
       bottom: 0;
       top: 140px;
        background: linear-gradient(360deg, #EAF5F3 0%, #FFFFFF 100%);
        border-radius: 36px 36px 0px 0px;
         z-index: 10;
       .div-line{
            height: 2px;
            background: #D1D1D1;
            margin: 28px 40px;
          }
        .box {
           .title {
            padding: 60px 0 28px 38px;
            font-size: 40px;
            font-family: Roboto-Medium, Roboto;
            font-weight: 600;
          }
          
          .inner{
            padding: 0 58px 38px 38px;
            line-height: 56px;
            color: #666666;
            font-size: 28px;
            font-family: Roboto-Regular, Roboto;
            font-weight: 400;
          }
        }
    }
`
export const Header =styled.div`
   width: 100%;
   height: 172px;
   background:#00C48C;
   background-size: cover;
   .title {
     width: 100%;
     height: 90px;
     line-height: 90px;
     text-align: center;
     color:#FFFFFF;
     position: relative;
     font-size: 40px;
     .left-arrow {
       position: absolute;
       display: inline-block;
       width: 48px;
       height: 48px;
       left: 34px;
       top:50%;
       margin-top: -24px;
       background: url(${(props) => props.leftIcon}) no-repeat center center / 48px 48px;
     }
   }
`
