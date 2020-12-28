import styled from 'styled-px2vw'
import scoreImg from '../../assets/score_img.png'
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
        .count-leave{
          position: absolute;
          bottom: 100px;
          right: 38px;
          display: inline-block;
          height: 40px;
          width: 400px;
          font-size: 24px;
          line-height: 40px;
          text-align: center;
          color: red;
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
      .percenter-wrap {
          margin: 40px 46px 100px 46px;
          .title {
            font-size: 34px;
            font-family: Roboto-BlackItalic, Roboto;
            font-weight: 600;
            color: #121619;
            text-align: center;
          }
          .radius-loan {
            width: 100%;
            height: 600px;
             margin: 50px 0 100px 0;
             background: url(${scoreImg}) no-repeat center center / auto 600px;
             position: relative;
             .num {
               position: absolute;
                width: 124px;
                height: 60px;
                left: 50%;
                top:50%;
                margin-top: -30px;
                margin-left: -52px;
                font-size: 50px;
                font-weight: 600;
                color: #00C48C;
                text-shadow: 0px 4px 9px #FFFFFF;
             }
          }
          .percenter-footer {
            font-family: Roboto-Regular, Roboto;
            font-weight: 500;
             font-size: 24px;
             line-height: 38px;
             text-align: left;
             letter-spacing: 2px;
             color: #BDBDBD;
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
