import React from 'react';
import { Row } from 'reactstrap';

export default class BarSummary extends React.Component {
  randValue = (x,y) => {
    return Math.floor(Math.random() * ((y-x)+1) + x);
  }
  render () {
    return (
      <div className={"campaign__bar-summary-col " + this.props.disabled}>
        <div>
          <Row>
            <span className="campaign__bar-summary-col--heading">(%)Marks</span>
          </Row>
        </div>
        <div>
          <Row className="campaign__bar-summary-col--label-and-value">
            <div className="campaign__bar-summary-sub-col">
              <div>avg.</div>
              <div>{this.randValue(70,80)}%</div>
            </div>
            <div className="campaign__bar-summary-sub-col">
              <div>min.</div>
              <div>{this.randValue(70,80)}%</div>
            </div>
            <div className="campaign__bar-summary-sub-col">
              <div>max.</div>
              <div>{this.randValue(70,80)}%</div>
            </div>
          </Row>
        </div>

        <div>
          <Row>
            <span className="campaign__bar-summary-col--heading">Parent's Income</span>
          </Row>
        </div>
        <div>
          <Row className="campaign__bar-summary-col--label-and-value">
            <div className="campaign__bar-summary-sub-col">
              <div>avg.</div>
              <div>{this.randValue(70,80)}M</div>
            </div>
            <div className="campaign__bar-summary-sub-col">
              <div>min.</div>
              <div>{this.randValue(70,80)}M</div>
            </div>
            <div className="campaign__bar-summary-sub-col">
              <div>max.</div>
              <div>{this.randValue(70,80)}M</div>
            </div>
          </Row>
        </div>

        {/*<div>
          <Row>
            <span className="campaign__bar-summary-col--heading">Total Loan<br/>Opportunity</span>
          </Row>
        </div>
        <div>
          <Row className="campaign__bar-summary-col--label-and-value">
            <span>{this.props.totalLoanOpportunity}</span>
          </Row>
        </div> */}
      </div>
    );
  }
}