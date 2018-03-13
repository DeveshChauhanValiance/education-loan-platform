import React from 'react';
const SMSTemplate1 = () => ({
  render() {
    return (
      <div>
        {this.props.BankName} offers education loans at minimum interest rates. SMS {this.props.getFromLocal("sms")} to {this.props.getFromLocal("number1")} or call {this.props.getFromLocal("number2")}
      </div>
    )
  }
})

const SMSTemplate2 = () => ({
  render() {
    return (
      <div>
        Education first, EMIs later. Avail hassle-free education loans from {this.props.BankName} and give shape to your dreams.
        SMS {this.props.getFromLocal("sms")} to {this.props.getFromLocal("number1")} or call {this.props.getFromLocal("number2")}
      </div>
    )
  }
})

const SMSTemplate3 = () => ({
  render() {
    return (
      <div>
        Money should never be a barrier to education.
        Avail special discounts on education loans from {this.props.BankName}. SMS {this.props.getFromLocal("sms")} to {this.props.getFromLocal("number1")} or call {this.props.getFromLocal("number2")}
      </div>
    )
  }
})

const SMSTemplate4 = () => ({
  render() {
    return (
      <div>
        {this.props.BankName} provides education loan to students for studies in India and abroad. SMS {this.props.getFromLocal("sms")} to {this.props.getFromLocal("number1")} or call {this.props.getFromLocal("number2")}
      </div>
    )
  }
})

const SMSTemplate5 = () => ({
  render() {
    return (
      <div>
        Knowledge is free but education is not. Fulfill your dreams with education loans from {this.props.BankName}.
        Quick approval. SMS {this.props.getFromLocal("sms")} to {this.props.getFromLocal("number1")}
      </div>
    )
  }
})

export default class SMSTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      BankName: "ICICI Bank"
    }
  }

  getFromLocal = (key) => {
    return localStorage.getItem(key);
  }

  render () {
        if(this.props.templateNo === 0) {
            return (
                <div>
                </div>
            )
        } else if(this.props.templateNo === 1) {
            return <SMSTemplate1 BankName={this.state.BankName} getFromLocal={this.getFromLocal}/>
        } else if(this.props.templateNo === 2) {
            return <SMSTemplate2 BankName={this.state.BankName} getFromLocal={this.getFromLocal}/>
        } else if(this.props.templateNo === 3) {
            return <SMSTemplate3 BankName={this.state.BankName} getFromLocal={this.getFromLocal}/>
        } else if(this.props.templateNo === 4) {
            return <SMSTemplate4 BankName={this.state.BankName} getFromLocal={this.getFromLocal}/>
        } else if(this.props.templateNo === 5) {
            return <SMSTemplate5 BankName={this.state.BankName} getFromLocal={this.getFromLocal}/>
        }
    }
}