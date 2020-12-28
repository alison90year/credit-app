import styled from 'styled-px2vw'

export const Content = styled.div`
  position: fixed;
  left: 0;
  top:0;
  bottom: 0;
  width: 100%;
  background: linear-gradient(360deg, #EAF5F3 0%, #FFFFFF 100%);
 .title {
    margin: 148px 28px 0 28px ;
    font-size: 82px;
    text-align: center;
 }
 
 .text {
    display: block;
    padding: 20px 0 8px 0;
    font-size: 30px;
    color: #121619;
    text-align: center;
    position: relative;
    &:before{
       content: '';
       position: absolute;
       width: 24px;
       height: 10px;
       background-color: #00C48C;
       left: 50%;
       bottom: -12px;
       margin-left: -12px;
       border-radius: 6px;
    }
 }
 .login-wrap {
       margin: 110px 88px 88px 88px  ;
       position: relative;
       .input-phone-inner{
        display: flex;
        align-items: center;
        justify-content: start;
        width: 100%;
        height: 118px;
        margin-bottom: 20px;
        background: #FFFFFF;
        box-shadow: 0px 14px 128px 0px rgba(0, 0, 0, 0.07);
        border-radius: 26px;
        border: 1px solid #ECEBED;
        overflow: hidden;
        .am-list-item.am-input-item{
           width: 100%;
           height: 100%;
        }
        .am-list-item .am-input-control input{
           font-size: 26px;
           padding-left: 46px;
        }
        .am-list-item .am-input-label.am-input-label-5{
          width: 26px;
        }
       }
       .input-code-inner{
         display: flex;
        align-items: center;
        justify-content: start;
        width: 100%;
        height: 118px;
        margin-bottom: 20px;
        background: #FFFFFF;
        box-shadow: 0px 14px 128px 0px rgba(0, 0, 0, 0.07);
        border-radius: 26px;
        border: 1px solid #ECEBED;
        overflow: hidden;
        position: relative;
        .am-list-item.am-input-item{
           width: 100%;
           height: 100%;
           margin-right: 202px;
        }
        .am-list-item .am-input-control input{
           font-size: 26px;
           padding-left: 46px;
        }
        .am-list-item .am-input-label.am-input-label-5{
          width: 26px;
        }
    
}
        .send-btn {
            position: absolute;
            height: 120px;
            line-height: 120px;
            text-align: center;
            width: 240px;
            right: 0;
            background: #00C48C;
            border-radius: 26px;
            font-family: Roboto-Medium, Roboto;
            font-weight: 500;
            color: #FFFFFF;
            font-size: 28px;
        }
       .input-desc-gree{
          margin: 36px 0 64px 0;
          width: 100%;
          height: 118px;
          .am-checkbox-agree{
           padding-top: 8px;
          }
          .am-checkbox.am-checkbox-checked .am-checkbox-inner{
             background: #00C48C;
             border-color:#00C48C;
          }
          .desc{
            color: #BDBDBD;
            font-size: 22px;
            .desc-title{
            color: #00C48C;
            }
          }
       }
       }
    .login-submit-btn{
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
    }
`

export const InputIcon = styled.div`
   width: 100%;
   height: 44px;
   background: url(${(props) => props.imgUrl}) no-repeat center center / 100% 44px ;
`
