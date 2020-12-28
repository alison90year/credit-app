import React from "react";
import {connect} from "react-redux";
import {getMallConfig} from '../../api/request'
import {  ListView ,TabBar } from 'antd-mobile';
import { Content ,ItemCard} from './style'
import headerBg from '../../assets/vipbg.png'
import { Header ,Footer } from "./style";
import leftIcon from '../../assets/left-arrow.svg'
import home01 from "../../assets/home-default.svg";
import home02 from "../../assets/home-active.svg";
import me01 from "../../assets/me-default.svg";
import me02 from "../../assets/me-active.svg";
import daiImmg from  '../../assets/daikuan.png'
import {getUid} from "../../utils/auth";
import {createMd5} from "../../utils";


const goBackInfo = (history) => {
    history.goBack()
}
class CreditCheck extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data:[],
        };
    }

    init(){
        const params = {
            userId:getUid(),
            s:createMd5('/getmallconfig',`userId=${getUid()}`)
        }
        getMallConfig(params).then(res => {
             this.setState({
                 data:res.list
             })
        })

    }
    componentDidMount() {
        this.init()
    }
  render() {
        const { data } = this.state
      return (
          <Content>
              <Header headerBg={ headerBg } leftIcon={ leftIcon }>
                  <div className="title">
                      Vip Recommend
                      <span className={'left-arrow'} onClick={() => goBackInfo(this.props.history) }></span>
                  </div>
              </Header>
              <div className={'main'}>
                  {
                      data.map(item => {
                          return (
                              <ItemCard key={item.ID} className={'item-card'}  daiImmg={item.ResourceURL || daiImmg }>
                                  <div className={'title'}>{item.Title}</div>
                                  <div className={'up-inner'}>
                                      <div className={'days-box'}>
                                          <div className={'month'}>{item.Tenure}</div>
                                          <div className={'tenure'}>{item.Interest} /Month</div>
                                      </div>
                                      <div className={'max-Tenure-box'}>
                                          <div className={'max-title'}>Tenure</div>
                                          <div className={'money-num'}>Interst</div>
                                      </div>
                                  </div>
                                  <div className={'down-inner'}>
                                      <div className={'max-name'}>MAX AMOUNT (   )</div>
                                      <div className={'max-money'}>{item.MaxAmount}</div>
                                  </div>
                                  <a className={'toplay-btn'} href={item.LinkURL}>To APPLY</a>
                                  <div className={'hot-tag'}></div>
                              </ItemCard>
                          )
                      })
                  }

              </div>
              <Footer>
                  <TabBar
                      tintColor={this.props.tintColor}>
                      <TabBar.Item
                          icon={{ uri: home01 }}
                          selectedIcon={{uri:home02}}
                          title="home"
                          key="home"
                          selected={this.props.selectedTab === 'home'}
                          onPress={() => this.props.changeTabbarPath('/home')}
                      >
                      </TabBar.Item>
                      <TabBar.Item
                          icon={{ uri: me01 }}
                          selectedIcon={{ uri: me02 }}
                          title="Me"
                          key="me"
                          selected={this.props.selectedTab === 'me'}
                          onPress={() => this.props.changeTabbarPath('/my')}
                      >
                      </TabBar.Item>
                  </TabBar>
              </Footer>
          </Content>
          );
  }
}

const mapStateToProps = (state) => {
    return {
        selectedTab:'home',
        tintColor:'#18A97D',
    }
}
const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        jumpToLoginPage() {
            ownProps.history.push('/login')
        },
        changeTabbarPath(path){
            if(ownProps.location.pathname === path)
            {
                return
            }
            ownProps.history.push(path)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(React.memo(CreditCheck))

