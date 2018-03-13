import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
const SMSTemplate1 = () => ({
  render() {
    return (
      <div>

        {this.props.BankName} offers education loans at minimum interest rates.

        <br/>
        SMS 
        
        <FormGroup className={"template__inputs"}>
          <Input type="text" placeholder="INT" onBlur={(event) => { this.props.setToLocal("sms", event) }}/>
        </FormGroup>

        to

        <FormGroup className={"template__inputs"}>
          <Input type="text" placeholder="NUMBER" onBlur={(event) => { this.props.setToLocal("number1", event) }}/>
        </FormGroup>

        or call

        <FormGroup className={"template__inputs"}>
          <Input type="text" placeholder="NUMBER" onBlur={(event) => { this.props.setToLocal("number2", event) }}/>
        </FormGroup>

      </div>
    )
  }
})

const SMSTemplate2 = () => ({
  render() {
    return (
      <div>
        
        Education first, EMIs later. Avail hassle-free education loans from {this.props.BankName} and give shape to your dreams.

        <br/>
        SMS
        
        <FormGroup className={"template__inputs"}>
          <Input type="text" placeholder="INT" onBlur={(event) => { this.props.setToLocal("sms", event) }}/>
        </FormGroup>
        
        to

        <FormGroup className={"template__inputs"}>
          <Input type="text" placeholder="NUMBER" onBlur={(event) => { this.props.setToLocal("number1", event) }} />
        </FormGroup>
        
        or call

        <FormGroup className={"template__inputs"}>
          <Input type="text" placeholder="NUMBER" onBlur={(event) => { this.props.setToLocal("number2", event) }} />
        </FormGroup>

      </div>
    )
  }
})

const SMSTemplate3 = () => ({
  render() {
    return (
      <div>

        Money should never be a barrier to education.
        Avail special discounts on education loans from {this.props.BankName}.

        <br/>
        SMS

        <FormGroup className={"template__inputs"}>
          <Input type="text" placeholder="INT" onBlur={(event) => { this.props.setToLocal("sms", event) }} />
        </FormGroup>

        to

        <FormGroup className={"template__inputs"}>
          <Input type="text" placeholder="NUMBER" onBlur={(event) => { this.props.setToLocal("number1", event) }} />
        </FormGroup>

        or call

        <FormGroup className={"template__inputs"}>
          <Input type="text" placeholder="NUMBER" onBlur={(event) => { this.props.setToLocal("number2", event) }} />
        </FormGroup>

      </div>
    )
  }
})

const SMSTemplate4 = () => ({
  render() {
    return (
      <div>

        {this.props.BankName} provides education loan to students for studies in India and abroad.

        <br/>
        SMS

        <FormGroup className={"template__inputs"}>
          <Input type="text" placeholder="INT" onBlur={(event) => { this.props.setToLocal("sms", event) }} />
        </FormGroup>

        to

        <FormGroup className={"template__inputs"}>
          <Input type="text" placeholder="NUMBER" onBlur={(event) => { this.props.setToLocal("number1", event) }} />
        </FormGroup>

        or call

        <FormGroup className={"template__inputs"}>
          <Input type="text" placeholder="NUMBER" onBlur={(event) => { this.props.setToLocal("number2", event) }} />
        </FormGroup>

      </div>
    )
  }
})

const SMSTemplate5 = () => ({
  render() {
    return (
      <div>

        Knowledge is free but education is not. Fulfill your dreams with education loans from {this.props.BankName}.
        Quick approval.

        <br/>
        SMS 

        <FormGroup className={"template__inputs"}>
          <Input type="text" placeholder="INT" onBlur={(event) => { this.props.setToLocal("sms", event) }} />
        </FormGroup>

        to

        <FormGroup className={"template__inputs"}>
          <Input type="text" placeholder="NUMBER" onBlur={(event) => { this.props.setToLocal("number1", event) }} />
        </FormGroup>

      </div>
    )
  }
})

export default class SMSTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      BankName : "ICICI Bank"
    }
  }
  render () {
        if(this.props.templateNo === 0) {
            return (
                <div>
                </div>
            )
        } else if(this.props.templateNo === 1) {
            return <SMSTemplate1 BankName={this.state.BankName} setToLocal={this.props.setToLocal}/>
        } else if(this.props.templateNo === 2) {
            return <SMSTemplate2 BankName={this.state.BankName} setToLocal={this.props.setToLocal}/>
        } else if(this.props.templateNo === 3) {
            return <SMSTemplate3 BankName={this.state.BankName} setToLocal={this.props.setToLocal}/>
        } else if(this.props.templateNo === 4) {
            return <SMSTemplate4 BankName={this.state.BankName} setToLocal={this.props.setToLocal}/>
        } else if(this.props.templateNo === 5) {
            return <SMSTemplate5 BankName={this.state.BankName} setToLocal={this.props.setToLocal}/>
        }
    }
}