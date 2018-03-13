import React from 'react';
const MailTemplate1 = () => ({
  render() {
    return (
      <div>
        <div>
          <p><strong>Subject: One loan that pays you back</strong></p>
          <p>Dear,</p>
          <p>There is a difference between education and quality education. While education will take you places,
          quality education will bring the world to you. 
          {this.props.BankName} offers easy to apply education loans for students that help them build a successful career. 
          Whatever be the status of your admission or your financial condition, there is always a student loan can apply for.
          If you choose quality education over education, write back to us. </p>
        </div>
        <br/>
        <div>
          <ul style={{"float": "left"}}>
            <li>100% Education Loans</li>
            <li>No pre-closure charges</li>
            <li>1 Day* Loan Sanction</li>
            <li>Customized Loans</li>
            <li>Easy repayment options</li>
          </ul>

          <ul style={{"float": "right"}}>
            <li>No limit on loans</li>
            <li>Lowest rate of interest</li>
            <li>Minimal documentation</li>
            <li>Simple process</li>
            <li>Study anywhere in the world</li>
          </ul>
        </div>
        <br/>
        <div style={{"clear": "both"}}>
          <p>If you wish to know about {this.props.BankName} education loans, reply to this email.</p>
        </div>
        <br/>
        <div>
          <a href={this.props.getFromLocal("link")}>Apply now</a>
        </div>
        <br/>
        <div>
          <p>
          Redargs<br/>
          Education Loan Counselor<br/>
          {this.props.BankName}
          </p>
        </div>
      </div>
    )
  }
})

const MailTemplate2 = () => ({
  render() {
    return (
      <div>
        <div>
            <p><strong>Subject: Pay us when you earn</strong></p>
            <p>Dear,</p>
            <p>
                Education is a journey, not a destination. And every successful journey has several milestones of small victories.
                If you are looking to pursue higher education in India or abroad, these small victories make a lot of difference. 
                {this.props.BankName} offers education loans that will help you achieve these small victories and build a successful career.
                Education loans are not a liability, it is an investment that pays you back in the longer run.
                It provides you with the flexibility to build a career without worrying about the financial hurdles.
                Students across the world opt for loans to further their studies.
                It is a simple, easy tool to continue your dream of pursuing a quality education.
                Here are some key benefits of availing an education loan:
            </p>
            </div>
            <br/>
            <div>
              <ul style={{"float": "left"}}>
                <li>Study now and pay the loan when you start earning</li>
                <li>Study anywhere in the world</li>
                <li>Choose the best courses from the best<br/>
                universities without worrying about<br/>
                financial constraints</li>
                <li>Build your career</li>
              </ul>

              <ul style={{"float": "right"}}>
                <li>Easy repayment options</li>
                <li>Zero financial burden</li>
                <li>Loans customized to meet your requirements</li>
                <li>Financial independence</li>
                <li>No burden on family</li>
                <li>Quick approvals so that you do not dropout</li>
              </ul>
            </div>
            <br/>
            <div style={{"clear": "both"}}>
              <p>If you wish to know about {this.props.BankName} education loans, reply to this email.</p>
            </div>
            <br/>
            <div>
              <a href={this.props.getFromLocal("link")}>Apply now</a>
            </div>
            <br/>
            <div>
              <p>
              Redargs<br/>
              Education Loan Counselor<br/>
              {this.props.BankName}
              </p>
        </div>
      </div>
    )
  }
})

const MailTemplate3 = () => ({
  render() {
    return (
      <div>
        <div>
          <p><strong>Subject: Study anywhere in the world without paying a penny</strong></p>
          <p>Dear,</p>
          <p>
            Quality education comes at a cost. Some of the world’s best colleges are too heavy on the wallet.
            Not all meritorious students land up with scholarships as well.
            How do you ensure that you continue your studies without worrying about the money? 
            {this.props.BankName} introduces students loan scheme that is hassle-free,
            reliable and is designed to ensure that you continue education wherever you want and when you want.
            Our education loans will take care of all your tuition fee, accommodation fee,
            travel expenses and everything else that you require to complete your education in your dream college or university.
           </p>
        </div>
        <br/>
        <div style={{"clear": "both"}}>
          <p>If you wish to know about {this.props.BankName} education loans, reply to this email.</p>
        </div>
        <br/>
        <div>
          <a href={this.props.getFromLocal("link")}>Apply now</a>
        </div>
        <br/>
        <div>
          <p>
          Redargs<br/>
          Education Loan Counselor<br/>
          {this.props.BankName}
          </p>
        </div>
      </div>
    )
  }
})

export default class MailTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      BankName : "ICICI Bank"
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
            return <MailTemplate1 BankName={this.state.BankName} getFromLocal={this.getFromLocal}/>
        } else if(this.props.templateNo === 2) {
            return <MailTemplate2 BankName={this.state.BankName} getFromLocal={this.getFromLocal}/>
        } else if(this.props.templateNo === 3) {
            return <MailTemplate3 BankName={this.state.BankName} getFromLocal={this.getFromLocal}/>
        }
    }
}