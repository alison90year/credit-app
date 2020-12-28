import styled from "styled-px2vw";

export const Content = styled.div`
  position: fixed;
  top:0;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  .main{
     flex: 1;
     padding-top: 140px;
     background: linear-gradient(360deg, #EAEFF5 0%, #FFFFFF 100%);
    .local-classfiy-wrap{
       margin-top: 46px;
       display: flex;
       justify-content: space-around;
    }
      .am-button {
        height: 108px;
        margin:50px 36px;
        background: linear-gradient(310deg, #00B1B3 0%, #00EE62 100%);
        box-shadow: 0px 2px 22px 0px #6DD6B8;
        color: #FFFFFF;
        font-size: 34px;
        border-radius: 26px;
     }
  }
`
export const Header  = styled.div`
   width: 100%;
   height: 634px;
   background: url(${(props) => props.imgUrl}) no-repeat;
   background-size: cover;
   border-bottom-right-radius:40px;
   border-bottom-left-radius:40px;
   position: relative;
   .header-people{
       height: 200px;
       width: 200px;
       background: url(${(props) => props.imgPeople }) no-repeat;
       background-size: cover;
       position: absolute;
       right: 0;
       top: -138px;
   }
   .title{
     padding-top: 36px;
     text-align: center;
     font-size: 28px;
     color: #121619;
   }
   .max-amount{
       padding: 16px 0 16px 0;
       text-align: center;
       color: #121619;
    .unit {
       font-size: 64px;
       }
       .amount-num {
        font-size: 76px;
        }
   }
   .amount-line{
        height: 3px;
        background: #979797;
        width: 100%;
        opacity: 0.3;
    }
    .choose-amount{
      text-align: center;
      padding-top: 18px;
      font-size: 26px;
      color: #96B0C7;
    }
    .amount-wrap-list{
       padding: 0 15px;
       display: flex;
       flex-wrap: wrap;
       justify-content: center;
       margin: 26px 0;
      .amount-item {
        width: 288px;
        padding: 24px 0 19px 0;
        border-radius: 36px;
        background:#D5F2EA ;
        margin: 0 6px 14px 6px;
        text-align: center;
        color: #11A77C;
        font-size: 26px;
        &.active{
          background: linear-gradient(270deg, #00E4C0 0%, #00C48C 100%);
          color: #FFFFFF;
        }
      }
    }
`
export const HeaderNoticeBar =  styled.div`
     position: absolute;
      top: -120px;
      left: 38px;
      width: 490px;
      height: 80px;
      .am-notice-bar{
         background: rgba(13, 80, 66, 0.55);
         border-radius: 15px;
          color: #ffff;
         .am-notice-bar-icon{
            margin-left: 5px;
         }
      }
`
export const LocalClassfiyItem = styled.div`
    display: flex;
    flex-direction: column;
    width: 190px;
    position: relative;
   .round-ui{
      height: 190px;
      width: 100%;
      border:1px dashed #979797;
      background: url(${(props) => props.imgUrl}) no-repeat center center / 190px 190px;
   }
   .c-text{
      color: #121619;
      line-height: 40px;
      font-size: 26px;
      text-align: center;
      white-space:nowrap;
   }
`
export const NoticeIcon = styled.i`
   display: inline-block;
    height: 48px;
    width: 48px;
    background: url(${(props) => props.imgUrl}) no-repeat center center / 48px 48px;
`
export const HeaderInfo =styled.div`
    height: 440px;
    background: #FFFFFF;;
    box-shadow: 0px 30px 60px 0px rgba(0, 0, 0, 0.08);
    border-radius: 20px;
    position: absolute;
    bottom:-100px;
    left: 38px;
    right: 38px;
`
export const ProductsDesc = styled.div`
    margin-top: 20px;
    padding-left: 64px;
    margin-left: 36px;
    height: 48px;
    line-height: 48px;
    background: url(${(props) => props.imgUrl}) no-repeat left center / 48px 48px;
    font-size: 28px;
    font-family: Roboto-Bold, Roboto;
    font-weight: bold;
    color: #121619;
`
export const Footer = styled.div`
   width: 100%;
   flex:  0 0 80px;
`
