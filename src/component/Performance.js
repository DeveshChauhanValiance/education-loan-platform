import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './../css/Campaign.css';
import PerformanceSvg from './PerformanceSvg';
import CampaignRegion from './CampaignRegion';
import Gauge from './Gauge';

const CampaignList = () => ({
  render(){
    return (
      <div onClick={this.props.triggerCampaignClick} className="performance__campaign-list">
        <div className="performance__data-label dashboard__data--text-left">
          <span>{this.props.data.name}</span>
        </div>
        <div className="dashboard__data-label dashboard__data--text-left">
          <span>{this.props.data.date}</span>
        </div>
      </div>
    )
  }
})

export default class Performance extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      a: {
        value: 200
      },
      b: {
        value: 300
      },
      c: {
        value: 400
      },
      d: {
        value: 500
      },
      perforamanceData : {
        "activeCampaigns": 30,
        "campaigns": [
          {
            "name": "Campaign Name",
            "date": "Dec 01, 2017"
          },
          {
            "name": "Campaign Name",
            "date": "Dec 01, 2017"
          },
          {
            "name": "Campaign Name",
            "date": "Dec 01, 2017"
          },
          {
            "name": "Campaign Name",
            "date": "Dec 01, 2017"
          },
          {
            "name": "Campaign Name",
            "date": "Dec 01, 2017"
          }
        ]
      },
      campaignData: {
        "name": "Campaign Name",
        "date": "Dec 01, 2017",
        "campaigns": {
          "sms": {
            "value": "00",
            "sent": 0,
            "delivered": 0
          },
          "email": {
            "value": "00",
            "sent": 0,
            "delivered": 0,
            "clicked": 0,
            "opened": 0
          },
          "call": {
            "value": "00"
          },
          "ivr": {
            "value": "00"
          }
        },
        "leads": {
          "sms": {
            "value": "00",
            "received": 0
          },
          "email": {
            "value": "00",
            "received": 0
          },
          "call": {
            "value": "00",
            "received": 0
          },
          "ivr": {
            "value": "00",
            "received": 0
          }
        },
        "selectedStates": [
        ],
        "filterDetails": {
          "selectedPersona": [
          ],
          "rating": 0,
          "profession": null,
          "income": {
            "min": 0,
            "max": 0
          },
          "riskScore": {
            "min": 0,
            "max": 0
          },
          "marks": {
            "min": 0,
            "max": 0
          },
          "collateral": true
        }
      }
    }
  }

  triggerCampaignClick = () => {
    this.setState({
      campaignData: {
        "name": "Campaign Name",
        "date": "Dec 01, 2017",
        "campaigns": {
          "sms": {
            "value": 1000,
            "sent": 1000,
            "delivered": 900
          },
          "email": {
            "value": 1000,
            "sent": 1000,
            "delivered": 900,
            "clicked": 700,
            "opened": 500
          },
          "call": {
            "value": 1000
          },
          "ivr": {
            "value": 1000
          }
        },
        "leads": {
          "sms": {
            "value": 1000,
            "received": 300
          },
          "email": {
            "value": 1000,
            "received": 300
          },
          "call": {
            "value": 1000,
            "received": 300
          },
          "ivr": {
            "value": 1000,
            "received": 300
          }
        },
        "selectedStates": [
          "DELHI",
          "UTTAR PRADESH",
          "PUNJAB"
        ],
        "filterDetails": {
          "selectedPersona": [
            "Pure Sciences",
            "Engineering",
            "Law"
          ],
          "rating": 5,
          "profession": "Doctor",
          "income": {
            "min": 1000,
            "max": 9999
          },
          "riskScore": {
            "min": 80,
            "max": 100
          },
          "marks": {
            "min": 45,
            "max": 75
          },
          "collateral": true
        }
      }
    });
  }

  triggerCampaignTypeClick = () => {
    console.log("triggerCampaignTypeClick");
  }

  render() {
    return (
      <div className="performance__container">

        <Row style={{"margin": "20px 0", "padding": "10px 0px"}}>
          <Col className="col-2">
            <div className="performance__data-heading dashboard__data--text-left">
              <span>List of Active Campaigns</span>
            </div>
            <div className="dashboard__data-value dashboard__data--text-left dashboard--primary-color font--bold">
              <span>{this.state.perforamanceData.activeCampaigns}</span>
            </div>

            <div>

              {this.state.perforamanceData.campaigns.map((campaign, index) => (
                  <CampaignList
                      key={index}
                      data={campaign}
                      triggerCampaignClick = {this.triggerCampaignClick}
                  />
              ))}

            </div>
          </Col>
          <Col className="col-5">
            <PerformanceSvg data={this.state.campaignData.campaigns} dataSvgType="Campaigns" triggerCampaignTypeClick={this.triggerCampaignTypeClick}/>
          </Col>
          <Col className="col-5">
            <PerformanceSvg data={this.state.campaignData.leads} dataSvgType="Leads" triggerCampaignTypeClick={this.triggerCampaignTypeClick}/>
          </Col>
        </Row>

        <Row style={{"margin": "20px 0", "padding": "10px 0px", "backgroundColor": "#f7f7f7"}}>
          <Col className="col-4">
            <div className="performance__data-heading dashboard__data--text-left">
              <span>Campaign Regions</span>
            </div>
            <CampaignRegion />
          </Col>
          <Col className="col-8">
            <Row>
              <Col className="col-6">
                <Gauge sent={this.state.a}/>
                <div className="performance__data-label dashboard__data--text-center">
                  <span>Total Emails Sent</span>
                </div>
              </Col>
              <Col className="col-6">
                <Gauge sent={this.state.b}/>
                <div className="performance__data-label dashboard__data--text-center">
                  <span>Total Emails Delivered</span>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="col-6">
                <Gauge sent={this.state.c}/>
                <div className="performance__data-label dashboard__data--text-center">
                  <span>Total Emails Clicked</span>
                </div>
              </Col>
              <Col className="col-6">
                <Gauge sent={this.state.d}/>
                <div className="performance__data-label dashboard__data--text-center">
                  <span>Total Emails Opened</span>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row style={{"margin": "20px 0", "padding": "10px 0px"}}>
          <Col className="col-4">
            <div className="performance__data-heading dashboard__data--text-left">
              <span>Selected Personas</span>
            </div>
          </Col>
          <Col className="col-8">
            <div className="performance__data-heading dashboard__data--text-left">
              <span>Campaign Details</span>
            </div>
            <Row>
              <Col>
                <div className="performance__data-label dashboard__data--text-left">
                  <span>College Rating</span>
                </div>
              </Col>
              <Col>
                <div className="performance__data-label dashboard__data--text-left">
                  <span>Parent's Profession</span>
                </div>
              </Col>
              <Col>
                <div className="performance__data-label dashboard__data--text-left">
                  <span>Parent's Income</span>
                </div>
              </Col>
              <Col>
                <div className="performance__data-label dashboard__data--text-left">
                  <span>Risk Score</span>
                </div>
              </Col>
              <Col>
                <div className="performance__data-label dashboard__data--text-left">
                  <span>Percentage(%) Marks</span>
                </div>
              </Col>
              <Col>
                <div className="performance__data-label dashboard__data--text-left">
                  <span>Collateral</span>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

      </div>
    );
  }
}