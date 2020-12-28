import React from "react";
import { connect } from 'react-redux';
import { Button } from 'antd-mobile';
import { Content ,Header ,Footer ,DescText} from './styled'
function Legend(props){
    return (
        <Content>
          <Header className={'header'}>
              Permission
          </Header>
            <div className={'main'}>
                <DescText>To assess your eligibility and facilitate fast disbursement of your loan
                    application, we need permissions to access your Phone, Photo and the
                    Others.
                    Others
                    Allow camera to capture images of documents and pictures of yourself
                    for loan application. Allow storage to upload documents and pictures
                    for loan application.Allow the application to collect a list of installed
                    apps in your device for credit profile enrichment.
                    Device
                    Collect and monitor specific information about your device including
                    your hardware model, operating system and version, unique device
                    identifier, wi-fi information,mobil e network information to uniquely
                    identify the devices and ensure that unauthorised devices are not able
                    to act on your behalf help ing us to prevent frauds.
                    Photo
                    Collect images information to detect references and to auto fill data
                    during loan application process.</DescText>
            </div>
            {props.name}
            <Footer>
                <Button type="default" className={'btn'} onClick={props.goHomePage}>Apply</Button>
            </Footer>
        </Content>
    )
}

const mapStateToProps = (state) => {
    return {
    }
}
const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        goHomePage(){
            ownProps.history.push('/home')
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Legend)
