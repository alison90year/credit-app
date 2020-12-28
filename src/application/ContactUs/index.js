import React from "react";
import { connect } from 'react-redux'
import { Content ,Header} from "./style";
import leftIcon from '../../assets/left-arrow.svg'
const goBackInfo = (history) => {
    history.goBack()
}
function ContactUs (props){
    return (
        <Content>
            <Header  leftIcon={leftIcon} >
                <div className="title">
                    Contact us
                    <span className={'left-arrow'} onClick={() => goBackInfo(props.history)}></span>
                </div>
            </Header>
            <div className={'main'}>
               <div className={'box'}>
                   <div className={'title'}>Refund Instructions</div>
                   <div className={'inner'}>
                       If you apply for 5 loan products and can’t make any payment,
                       please provide a screenshot of the loan and email to online customer service.
                       coolcashservice@hotmail.com
                   </div>
               </div>
                   <div className={'div-line'}>
                   </div>
                   <div className={'box'}>
                       <div className={'title'}>Online Service</div>
                       <div className={'inner'}>
                           Service time：10:00 a.m.-18:00 <br/>
                           p.m. coolcashservice@hotmail.com
                       </div>
                   </div>

            </div>
        </Content>
    )
}

export default connect()(React.memo(ContactUs))
