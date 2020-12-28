import styled from 'styled-px2vw'
import React from "react";
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    left: 0;
    top:0;
    bottom: 0;
    background: linear-gradient(360deg, #EAF5F3 0%, #FFFFFF 100%);
    .main {
       flex:1;
    }
`
export  const ShadowBox= styled.div`
   margin: 48px 40px 60px;
   padding: 20px 0 30px 0;
    background: #FFFFFF;
    box-shadow: 0px 4px 44px 0px rgba(202, 202, 202, 0.5);
    border-radius: 18px;
    background: #FFFFFF;
    overflow: hidden;
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



