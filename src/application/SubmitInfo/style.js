import styled from 'styled-px2vw'


export const Content = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
    .main {
       position: absolute;
       left: 0;
       right: 0;
       bottom: 0;
       top: 140px;
        background: linear-gradient(360deg, #EAF5F3 0%, #FFFFFF 100%);
        border-radius: 36px 36px 0px 0px;
        z-index: 10;
        .user-write-steps{
          padding-bottom: 60px;
        }
        .steps-box {
          margin-top: 30px;
          padding: 52px 20px 56px 20px ;
           .am-steps-item-tail:after{
                height: 6px;
             }
             .am-steps-item-finish .am-steps-item-title{
                color: #00C48C;
              }
              .am-steps-item-finish .am-steps-item-tail:after , .am-steps-item-finish .am-icon{
                background-color: #00C48C;
              }
              //等待
              .am-steps-item-process .am-steps-item-title{
                 color: #D5F2EA;
              }
             .am-steps-item-process .am-icon{
                  opacity: 0.2;
              }
              .am-steps-item-process .am-steps-item-tail:after
              {
                background-color: #D5F2EA;
              }
              //失败
               .am-steps-item-error .am-steps-item-tail:after {
                  background-color: #f4333c ;
               }
            .am-steps-item-content{
             .am-steps-item-title{
                font-size: 26px;
                font-family: Roboto-Medium, Roboto;
                font-weight: 500;
             }
          }
        }
        .border-line{
           height: 1px;
           background: #D2D1D7;
           margin: 0 80px 0 80px;
        }
    }
`
export const Header =styled.div`
   width: 100%;
   height: 172px;
   background: url(${(props) => props.headerBg }) no-repeat left -60px;
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

export const SubMitBtn = styled.div`
       margin: 0 88px 0 88px;
        padding: 24px 54px 30px 38px;
        background: linear-gradient(310deg, #00B1B3 0%, #00EE62 100%);
        box-shadow: 0px 4px 44px 0px #6DD6B8;
        border-radius: 26px;  
        font-size: 34px;
        font-family: Roboto-Medium, Roboto;
        font-weight: 600;
        color: #E5FFD2;
        text-align: center;
`
export const SVGIcon = styled.span`
   display: inline-block;
   width: 48px;
   height: 48px;
   background: url(${(props) => props.imgUrl}) no-repeat left center / 48px 48px;
   border-radius: 50%;
   overflow: hidden;
`
export const InputStepItem = styled.div`
    position: relative;
    padding: 0 70px;
   .title {
      padding: 40px 0 30px 70px;
      font-size: 28px;
      font-weight: 500;
      color: #121619;
      background: url(${(props) => props.imgUrl}) no-repeat left center / 40px 48px;
   }
   .input-info-iscompeted {
      padding: 0 30px 48px 70px;
      background: url(${(props) => props.competed}) no-repeat right top / 48px 48px;
      font-size: 26px;
      color: #B9D8BB;
      &:before {
         content: '';
         position: absolute;
         height: 1px;
         left:140px;
         right: 70px;
         bottom: 0;
         background: #D2D1D7;
      }
   }
   .input-info-default{
      padding: 0 30px 48px 70px;
      background: url(${(props) => props.rightArrowImg}) no-repeat right top / 48px 48px;
      font-size: 26px;
      color: #B9D8BB;
      &:before {
         content: '';
         position: absolute;
         height: 2px;
         left:140px;
         right: 70px;
         bottom: 0;
         background: #D2D1D7;
      }
   }
`
