import styled from 'styled-px2vw'
import ic_quest from '../../assets/ic_summary_pre.png'
import danger from "../../assets/danger.svg";

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
        bottom: 188px;
        top: 140px;
        background: #FFFFFF;
        border-radius: 36px 36px 0px 0px;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
        z-index: 10;
      .steps-box {
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
      .loan-amount {
           position: relative;
           &.unline:before{
              background: transparent;
           }
           .title {
              padding: 14px 0 15px 48px;
              font-size: 28px;
              color: #121619;
              font-weight: 600;
             .unit-symbol{
               color: #00C48C;
             }
           }
           &:before {
             content: '';
             position: absolute;
             height: 1px;
             background: #E8E8E8;
             left: 48px;
             right: 48px;
             top: 0;
           }
            &:after {
             content: '';
             position: absolute;
             height: 1px;
             background: #E8E8E8;
             left: 48px;
             right: 48px;
             bottom: 0;
           }
           .loan-list {
               display: flex;
               justify-content:flex-start;
               flex-wrap: wrap;
               padding-left: 58px;
               padding-right:38px;
               padding-bottom: 10px;
            .item {
               width: 272px;
               height: 70px;
               margin: 20px 0 10px 20px;
               line-height: 70px;
               background: rgba(255, 255, 255, 0);
               box-shadow: 0px 4px 44px 0px rgba(159, 159, 159, 0.14);
               border-radius: 16px;
               border: 1px solid #EFEFEF;
               text-align: center;
               &.active {
                  color: #00C48C;
                  border: 1px solid #00C48C;
               }
            }
           }
         }
         .loan-details{
           padding: 30px 76px 20px 76px;
           .d-item {
             display: flex;
             justify-content: space-between;
             height: 32px;
             line-height: 32px;
              padding: 20px 0 10px 0;
               font-size: 28px;
               font-family: Roboto-Medium, Roboto;
               font-weight: 500;
               color: #121619;
               .active{
                  color: #F55200;
               }
               .name {
                .question {
                   display: inline-block;
                   width: 36px;
                   height: 36px;
                   background: url(${ic_quest}) no-repeat center center / 36px 36px;
                   vertical-align: bottom;
                }
               }
           }
        }
      }
   `
export const SVGIcon = styled.span`
   display: inline-block;
   width: 48px;
   height: 48px;
   background: url(${(props) => props.imgUrl}) no-repeat left center / 48px 48px;
   border-radius: 50%;
   overflow: hidden;
`
export const NoticeIcon = styled.i`
   display: inline-block;
    height: 48px;
    width: 48px;
    background: url(${(props) => props.imgUrl}) no-repeat center center / 48px 48px;
`
export const HeaderNoticeBar =  styled.div`
      position: absolute;
      top: 60px;
      left: 30px;
      right: 38px;
      z-index: 100;
      .am-notice-bar{
         height: 90px;
         background: linear-gradient(130deg, #FFDC64 0%, #F58639 100%);
         box-shadow: 0px 4px 44px 0px #FFC291;
         border-radius: 8px;
          color: #ffff;
         .am-notice-bar-icon{
            margin-left: 5px;
         }
      }
`
export const Header =styled.div`
   width: 100%;
   height: 242px;
   background: url(${(props) => props.headerBg }) no-repeat left top;
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
        padding: 24px 54px 30px 38px;
        background: linear-gradient(310deg, #00B1B3 0%, #00EE62 100%);
        box-shadow: 0px 4px 44px 0px #6DD6B8;
        border-radius: 26px;  
        font-size: 34px;
        font-family: Roboto-Medium, Roboto;
        font-weight: 600;
        color: #E5FFD2;
        text-align: center;
        position: fixed;
        bottom: 120px;
        left: 36px;
        right: 36px;
        z-index: 100;
`


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
