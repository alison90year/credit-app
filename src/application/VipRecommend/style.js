import styled from 'styled-px2vw'
import hotImg from '../../assets/tags_hot.png'
export const Content = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:  #00000014;
  .main {
       position: absolute;
       left: 40px;
       right: 40px;
       bottom: 80px;
       top: 200px;
       background-color:rgb(245, 245, 249);
       overflow-y: scroll;
       -webkit-overflow-scrolling: touch;
       z-index: 1;
       border-radius: 20px;
       overflow-x: hidden;
       .am-list-view-scrollview{
         border:none !important;
         margin: 0 !important;
          background-color:rgb(245, 245, 249);
           border-radius: 20px;
          .am-list-body{
                background-color:rgb(245, 245, 249);
                border-radius: 20px;
                overflow-x: hidden;
          }
          .list-view-section-body{
               background-color:rgb(245, 245, 249);
          }
            .am-list-body::before{
                background-color: transparent;
            }
       }
  }
   `

export const ItemCard = styled.div`
      position: relative;
      width: 100%;
      box-shadow: 0px 60px 120px 0px rgba(0, 0, 0, 0.08);
      border-radius: 20px;
      background-color: #FFFFFF;
      .title{
          padding: 42px 0 34px 112px;
          font-weight: 600;
          font-size: 40px;
          background: url(${(props) => props.daiImmg}) no-repeat 24px center / 48px 48px;
      }
      .up-inner{
          position: relative;
        .days-box {
             display: flex;
             padding: 0 32px 14px 32px;
             justify-content: space-between;
             font-weight: 600;
             font-size: 28px;
         }
         .max-Tenure-box{
            display: flex;
            padding: 0 128px 14px 38px;
            justify-content: space-between;
            color: #B1B1B5;
            font-size: 28px;
         }
          &:before{
            content: '';
            position: absolute;
            bottom: 0;
            left: 38px;
            right: 38px;
            height: 1px;
            background: #E8E8E8;
          }
          &:after{
            content: '';
            position: absolute;
            height: 40px;
            width: 2px;
            top:50%;
            margin-top: -20px;
            left: 50%;
            margin-left: -1px;
            background: #E8E8E8;
          }
      }
      .down-inner {
         .max-name {
             padding: 26px 0 12px 40px;
             color: #B1B1B5;
             font-size: 24px;
         } 
         .max-money {
            padding: 0 0 40px 34px;
            color: #00C48C;
            font-size: 54px;
            font-weight: 500;
         }
      }
      .hot-tag {
         position: absolute;
         right: 0;
         top:0;
         display: inline-block;
         width: 88px;
         height: 60px;
         background: url(${hotImg}) no-repeat center center / 88px 60px;
      }
      .toplay-btn{
        position: absolute;
        bottom: 40px;
        right: 30px;
        display: inline-block;
        width: 196px;
        height: 80px;
        line-height: 80px;
        color:#FFFFFF;
        background:#065B8E;
        border-radius: 40px;
        text-align: center;
      }

`
export const Footer = styled.div`
   width: 100%;
   flex:  0 0 80px;
   position: absolute;
   left: 0;
   bottom: 0;
   z-index:100;
`

export const Header =styled.div`
   width: 100%;
   height: 440px;
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
