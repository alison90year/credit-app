import styled from 'styled-px2vw'
import React from "react";
import {InputItem ,Picker} from "antd-mobile";
import rightIcon from '../../assets/baseright.svg'


export const InputItemTextWrap = styled.div`
   position: relative;
   padding-top: 10px;
   padding-bottom: 10px ;
   &:not(:last-child):before{
      content: '';
      position: absolute;
      left: 30px;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background: #E8E8EB;
      z-index: 1;
   }
   .am-picker-popup-header{
     
   }
   .am-list-item:not(:last-child) .am-list-line::after{
      background-color: transparent !important;
   }
   .am-input-control{
     padding-right: 20px;
   }
   .am-list-item .am-input-label{
        font-size: 26px;
        padding-right: 80px;
   }
    .am-list-item .am-input-control input{
      font-size: 26px;
      color: #B9D8BB;
    }
  `
const ChildItem = styled.div`
    display: flex;
    align-items: center;
    font-size: 26px;
    .left {
      display: inline-block;
      min-width: 165px;
      padding-left: 30px;
    }
    .right-icon{
        display: inline-block;
        width: 24px;
        height: 24px;
        background: url(${rightIcon}) no-repeat right center / 24px 24px;
        position: absolute;
        right: 30px;
    }
`
const  InputItemText = (props) => {
    const { title,type ,placeName , inputValue ,handleSelectText,cols,inputType ,data ,classFiy ,changeInputValue} = props
    const iconHtml = <img className={'right-icon'} src={rightIcon} />
    return (
        <InputItemTextWrap>
            {
                type === 1 ?
                    <Picker className={'pick-wrap'}
                            title={title}
                            extra={iconHtml}
                            value={[inputValue]}
                            okText={'Done'} cols={cols|| 1}
                            dismissText={'Cancel'}
                            onOk={(val) => handleSelectText ({inputValue:val,classFiy:classFiy})}
                            Done={'Cancel'} data={data}
                    >
                        <ChildItem>
                            <InputItem
                                value={inputValue}
                                editable={false}
                                type={inputType|| 'text'}
                                placeholder={ placeName }
                            >{title}</InputItem>
                            <span className={'right-icon'}></span>
                        </ChildItem>
                    </Picker>
                    :
                    <InputItem
                        className={'item'}
                        onChange={(e) => changeInputValue(e,classFiy)}
                        defaultValue={inputValue}
                        type={inputType|| 'text'}
                        placeholder={ placeName }
                    >{title}</InputItem>

            }
        </InputItemTextWrap>
    )
}


export default React.memo(InputItemText)
