import React from "react";
import { Button } from 'antd-mobile'
import PropTypes from 'prop-types'
import { phoneCheck } from '../../utils/index'
class SendVerifyCode extends React.Component {
      constructor(props) {
          super(props);
          this.state = {
               count:0,
              counting:false
          }
      }
      componentWillReceiveProps(nextProps, nextContext) {
          //根据父组件传过来的验证结果，判断是否启用倒计时
          if(nextProps.isSend) {
              this.send()
              nextProps.onSuccessSend()
          }

      }
      setInterval = () => {
          /*此处正是定时器运用的巧妙之处，以及对定时器返回值的理解程度体现
22         定时器必须在一个函数中赋值给一个属性，在state中赋值就不行，定时器会自执行,
23         因此必须在一个不会自动执行的函数中把定时器ID赋值给一个变量保存
24         此ID可以作为clearInterval()的参数，用于清除定时器*/
          this.timer = setInterval(this.countDown, 1000)
      }
      send = () => {
          this.setState( { counting:true,count:60 })
          this.setInterval()
      }
      countDown = () => {
          const { count } = this.state
          if( count === 1) {
              this.clearInterval()
              this.setState({
                  counting:false,
                  count:0
              })
          } else {
              this.setState({counting: true, count: count - 1 })
          }
      }
     clearInterval = () =>{
              clearInterval(this.timer)
       }
      phone = () => {
          //验证手机号是否符合规则,符合规则就设置props.isSend为true，启用定时器，否则提示错误信
          const { phone } = this.props
            if(phoneCheck(phone)){
                this.props.onHandlePhone(phone)
                this.send()
            }
          console.log(this.props)

      }
      componentWillUnmount() {
          this.clearInterval();
      }

      render() {
          let { count ,counting } = this.state
          return (
              <Button
              disabled={counting}
              className={'send-btn'}
              onClick={this.phone}
              >{ counting ?`${parseInt(count) < 10 ? `0${count}` : count } 后获取`:'发送验证码' }</Button>
          )
      }
}
    SendVerifyCode.proTypes = {
        isSend:PropTypes.bool.isRequired,
        onHandlePhone:PropTypes.func.isRequired,
        onSuccessSend:PropTypes.func.isRequired,
        phone:PropTypes.number.isRequired
    }
    export default SendVerifyCode
