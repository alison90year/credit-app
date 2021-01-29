import React from "react";
import { connect } from 'react-redux'
import { TabBar ,NoticeBar ,Button} from 'antd-mobile';
import { getAppLoanConfig } from '../../api/request'
import { configList } from '../../api/index'
import { Content ,Header ,HeaderInfo ,Footer ,HeaderNoticeBar ,NoticeIcon ,ProductsDesc ,LocalClassfiyItem} from './style'
import bg01 from '../../assets/home-header-bg.svg'
import bg02 from '../../assets/home-header-people.svg'
import me01 from '../../assets/me-default.svg'
import me02 from '../../assets/me-active.svg'
import home01 from '../../assets/home-default.svg'
import home02 from '../../assets/home-active.svg'
import noticeIcon from '../../assets/notice.svg'
import roundIcon from '../../assets/round.svg'
import cinfo from '../../assets/classfiy-info.svg'
import cstore from '../../assets/classfiy-store.svg'
import cmoney from '../../assets/classfiy-money.svg'
import {getUid, getUser} from "../../utils/auth";
import {createMd5, formateData} from "../../utils";
 class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            activeType:0,
            LoanPriceList:[],
            priceLoan:0
        }
        this.changeCheckBoxActive = this.changeCheckBoxActive.bind(this)
    }

     changeCheckBoxActive(index){
           this.setState({
               activeType:index
           },()=>{
               this.init()
           })
     }
     init(){
        const { activeType } = this.state
         const params = {
             userId:getUid(),
             s:createMd5('/getapploanconfig',`userId=${getUid()}`)
         }
         const LoanPriceList = formateData(configList,'LoanPrice')
             this.setState({
                 LoanPriceList:LoanPriceList,
                 priceLoan:LoanPriceList[activeType].name
             })
         // getAppLoanConfig(params).then(res => {
         //     const LoanPriceList = formateData(res.list,'LoanPrice')
         //     this.setState({
         //         LoanPriceList:LoanPriceList,
         //         priceLoan:LoanPriceList[activeType].name
         //     })
         // })
     }
     componentDidMount() {
         if(getUser()){
             this.props.history.push('/browMoeny')
              return
         }
        this.init()
     }
     render(){
        const { LoanPriceList , activeType ,priceLoan } = this.state
         const { isCompeted } = this.props
        return(
            <Content>
                <Header imgUrl={bg01} imgPeople={bg02}>
                    <HeaderInfo>
                        <div className={'header-people'}></div>
                        <HeaderNoticeBar className={'header-notice-bar'}>
                            <NoticeBar icon={<NoticeIcon imgUrl={noticeIcon} />} marqueeProps={{ loop: true, style: {color:'#FFFFFF'} }}>
                                The amout of INR 30000 recevied by 9***396 has arrvied ,Please check as soon as possible
                            </NoticeBar>
                        </HeaderNoticeBar>
                        <div className={'title'}>Maximum loan amount upto</div>
                        <div className={'max-amount'}>
                            <span className={'unit'}>￡</span>
                            <span className={'amount-num'}>{priceLoan}</span>
                        </div>
                        <div className={'amount-line'}></div>
                        <div className={'choose-amount'}>Choose Loan Amount  (      )：</div>
                        <div className={'amount-wrap-list'}>
                            {
                                LoanPriceList.map((item,index) => {
                                    return (
                                        <div key={index} className={['amount-item',index === activeType ? 'active':null].join(' ')}
                                             onClick={() => this.changeCheckBoxActive(index)}
                                        >{item.name}</div>
                                    )
                                })
                            }
                        </div>
                    </HeaderInfo>
                </Header>
                <div className={'main'}>
                    <ProductsDesc imgUrl={roundIcon}>
                        New  user inerest rate as low as 0% 60 days
                    </ProductsDesc>
                    <ProductsDesc imgUrl={roundIcon}>
                        Get loan quickly , securlely , simply
                    </ProductsDesc>
                    <div className={'local-classfiy-wrap'}>
                        <LocalClassfiyItem imgUrl={cinfo}>
                            <div className={'round-ui'}></div>
                            <div className={'c-text'}>Submit Info</div>
                        </LocalClassfiyItem>
                        <LocalClassfiyItem imgUrl={cstore}>
                            <div className={'round-ui'}></div>
                            <div className={'c-text'}>Get credit score</div>
                        </LocalClassfiyItem>
                        <LocalClassfiyItem imgUrl={cmoney}>
                            <div className={'round-ui'}></div>
                            <div className={'c-text'}>Get Money</div>
                        </LocalClassfiyItem>
                    </div>
                    <Button type="default" className={'btn'} onClick={()=> this.props.jumpToLoginPage()}>Apply</Button>
                </div>
                <Footer>
                    <TabBar
                        tintColor={this.props.tintColor}
                    >
                        <TabBar.Item
                            icon={{ uri: home01 }}
                            selectedIcon={{uri:home02}}
                            title="Home"
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
        )
    }

}
const mapStateToProps = (state) => {
    return {
        selectedTab:state.getIn(['home','selectedTab']),
        tintColor:state.getIn(['home','tintColor']),
    }
}
const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        jumpToLoginPage(){
                 if(!getUid()){
                     ownProps.history.push('/login')
                 }else{
                     ownProps.history.push('/browMoeny')
                 }

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

export default connect(mapStateToProps,mapDispatchToProps)(React.memo(Home))
