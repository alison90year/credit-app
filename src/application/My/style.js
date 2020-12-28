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
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
      background: linear-gradient(360deg, #EAEFF5 0%, #FFFFFF 100%);
      .list-wrap{
        padding-top: 140px;
      }
  }
`
export const ListItem = styled.div`
    margin: 16px 30px 32px 32px;
    padding: 20px 32px 20px 32px;
    background-color: #FFFFFF;
    border-radius: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .icon-left {
          display: inline-block;
          width: 96px;
          height: 96px;
          flex: 0 0 96px;
          background: url(${(props) => props.leftIcon }) no-repeat center center / 96px 96px;
    }
     .icon-right {
          display: inline-block;
          width: 32px;
          height: 32px;
          flex: 0 0 32px;
          background: url(${(props) => props.rightIcon }) no-repeat center center / 32px 32px;
    }
    .title{
        flex: 1;
        padding-left: 32px;
        font-size: 32px;
        font-family: Roboto-Medium, Roboto;
        font-weight: 600;
        color: #121619;
    }
`
export const Header  = styled.div`
   width: 100%;
   height: 360px;
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
`
export const AvatarWrap = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
     bottom: -150px;
     left: 50%;
     margin-left: -100px;
     z-index: 10;
    .avatar-pic{
     width: 140px;
     height: 158px;
     border-radius: 40px;
     border: 6px solid #FFFFFF;
     background: url(${(props) => props.imgUrl }) no-repeat center center / 160px 160px;
     margin: 0 auto;
  }
  .avatar-text{
       font-size: 36px;
        font-family: Roboto-Medium, Roboto;
        font-weight: 500;
        color: #121619;
         line-height: 42px;
         line-height: 42px;
         padding: 24px 0;
        text-align: center;
  }
`
export const Footer = styled.div`
   width: 100%;
   flex:  0 0 80px;
`
