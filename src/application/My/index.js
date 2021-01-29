import React from "react";
import { connect } from 'react-redux'
import { TabBar  ,Toast ,Modal} from 'antd-mobile';
import { Content ,Header ,Footer ,AvatarWrap ,ListItem} from './style'
import bg01 from '../../assets/home-header-bg.svg'
import bg02 from '../../assets/home-header-people.svg'
import me01 from '../../assets/me-default.svg'
import me02 from '../../assets/me-active.svg'
import home01 from '../../assets/home-default.svg'
import home02 from '../../assets/home-active.svg'
import avatar01 from '../../assets/avatar.png'
import arrowRight from '../../assets/arrow-right.svg'
import feedBack from '../../assets/feed-back.svg'
import myProfile from '../../assets/my-profile.svg'
import contactUs from '../../assets/contact-us.svg'
import logOut from '../../assets/log-out.svg'
import {getUid, getUser, removeUid, removeUser} from "../../utils/auth";
const alert = Modal.alert;


class My extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        if(!getUid()){
            Toast.info('Please Login',1,()=>{
                this.props.history.push('/login')
            })
        }
    }
    render() {
       return (
           <Content>
               <Header imgUrl={bg01} imgPeople={bg02}>
                   <AvatarWrap imgUrl={avatar01}>
                       <div className={'avatar-pic'}></div>
                       <div className={'avatar-text'}>{this.props.account}</div>
                   </AvatarWrap>
               </Header>
               <div className={'main'}>
                   {this.props.phone}
                   <div className={'list-wrap'}>
                       <ListItem className={'item'}
                                 leftIcon={myProfile}
                                 rightIcon={arrowRight}
                                 onClick={() => this.props.history.push('/myProfile')}
                       >
                           <span  className={'icon-left'}></span>
                           <span className={'title'}>My profile</span>
                           <span  className={'icon-right'}></span>
                       </ListItem>
                       <ListItem className={'item'}
                                 leftIcon={feedBack}
                                 rightIcon={arrowRight}
                                 onClick={() => this.props.history.push('/feedback')}
                       >
                           <span  className={'icon-left'}></span>
                           <span className={'title'}>Feedback</span>
                           <span  className={'icon-right'}></span>
                       </ListItem>
                       <ListItem className={'item'}
                                 leftIcon={contactUs}
                                 rightIcon={arrowRight}
                                 onClick={() => this.props.history.push('/contactUs')}
                       >
                           <span  className={'icon-left'}></span>
                           <span className={'title'}>Contact us</span>
                           <span  className={'icon-right'}></span>
                       </ListItem>
                       <ListItem className={'item'}
                                 leftIcon={logOut}
                                 rightIcon={arrowRight}
                                 onClick={() => this.props.clickLogOut (this.props)}

                       >
                           <span  className={'icon-left'}></span>
                           <span className={'title'}>Log out</span>
                           <span  className={'icon-right'}></span>
                       </ListItem>
                   </div>
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
        selectedTab:state.getIn(['my','selectedTab']),
        tintColor:state.getIn(['my','tintColor']),
        files:state.getIn(['my','files']),
        multiple:state.getIn(['my','multiple']),
        account:getUser()!=null?getUser().Accounts:'not login'
    }
}
const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        changeTabbarPath(path){
            if(ownProps.location.pathname === path)
            {
                return
            }
            ownProps.history.push(path)
        },
        clickLogOut(props){
            alert('Are you sure to exit', <div></div>, [
                { text: 'cancel', onPress: () => console.log('cancel') },
                { text: 'ok', onPress: () => {
                        if(getUid()){
                            Toast.info('exiting',2,() => {
                                removeUid()
                                removeUser()
                                props.history.push('/login')
                            })
                        }
                    } },
            ])

        },
        onChange(files, type, index){
            console.log(files,type)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(React.memo(My))
