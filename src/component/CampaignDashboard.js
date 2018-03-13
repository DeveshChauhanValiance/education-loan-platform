import React from 'react';
import { Row, Col, Button, FormGroup, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import CustomPieChart from './CustomPieChart';
import DrawIndiaSvg from './DrawIndiaSvg';
import BankLogo from './../img/bank-logo.png';
import './../css/Campaign.css';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

export default class CampaignDashboard extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      multi: true,
      multiValue: [],
      options: [
        {value: "Andaman & Nicobar", label: "Andaman & Nicobar"},
        {value: "Andhra Pradesh", label: "Andhra Pradesh"},
        {value: "Arunachal pradesh", label: "Arunachal pradesh"},
        {value: "Assam", label: "Assam"},
        {value: "Bihar", label: "Bihar"},
        {value: "Chandigarh", label: "Chandigarh"},
        {value: "Chhattisgarh", label: "Chhattisgarh"},
        {value: "Dadra And Nagar Haveli", label: "Dadra And Nagar Haveli"},
        {value: "Daman & Diu", label: "Daman & Diu"},
        {value: "Delhi", label: "Delhi"},
        {value: "Goa", label: "Goa"},
        {value: "Gujarat", label: "Gujarat"},
        {value: "Haryana", label: "Haryana"},
        {value: "Himachal Pradesh", label: "Himachal Pradesh"},
        {value: "Jammu And Kashmir", label: "Jammu And Kashmir"},
        {value: "Jharkhand", label: "Jharkhand"},
        {value: "Karnataka", label: "Karnataka"},
        {value: "Kerala", label: "Kerala"},
        {value: "Lakshadweep", label: "Lakshadweep"},
        {value: "Madhya Pradesh", label: "Madhya Pradesh"},
        {value: "Maharashtra", label: "Maharashtra"},
        {value: "Manipur", label: "Manipur"},
        {value: "Meghalaya", label: "Meghalaya"},
        {value: "Mizoram", label: "Mizoram"},
        {value: "Nagaland", label: "Nagaland"},
        {value: "Orissa", label: "Orissa"},
        {value: "Pondicherry", label: "Pondicherry"},
        {value: "Punjab", label: "Punjab"},
        {value: "Rajasthan", label: "Rajasthan"},
        {value: "Sikkim", label: "Sikkim"},
        {value: "Tamilnadu", label: "Tamilnadu"},
        {value: "Tripura", label: "Tripura"},
        {value: "Uttar Pradesh", label: "Uttar Pradesh"},
        {value: "Uttarakhand", label: "Uttarakhand"},
        {value: "West Bengal", label: "West Bengal"}
      ],
      value: null,
      countryIsReady: "non-active",
      stateIsReady: "non-active",
      selectedOpportunity: 0,
      selectedLoanOpportunity: 0,
      totalOpportunity: 0,
      data: {
        "india": {
          "totalOpportunities": 12332,
          "totalLoanOpportunity": 1980223.0,
          "percentage": 70.0
        },
        "overseas": {
          "totalOpportunities": 3423,
          "totalLoanOpportunity": 343333.0,
          "percentage": 30.0
        },
        "countries": [
          {
            "name": "AUSTRALIA"
          },
          {
            "name": "BELGIUM"
          },
          {
            "name": "SRI LNAKA"
          },
          {
            "name": "EGYPT"
          },
          {
            "name": "ITALY"
          },
          {
            "name": "FRANCE"
          },
          {
            "name": "SINGAPORE"
          },
          {
            "name": "SPAIN"
          }
        ],
        "selectedCountry": {
          "name": "India",
          "states": [
            {
              "totalOpportunities": 4152929,
              "totalLoanOpportunity": 2345.0,
              "name": "Andaman & Nicobar",
              "india": 543,
              "overseas": 242
            },
            {
              "totalOpportunities": 2076464,
              "totalLoanOpportunity": 4690.0,
              "name": "Andhra Pradesh",
              "india": 405,
              "overseas": 120
            },
            {
              "totalOpportunities": 1384309,
              "totalLoanOpportunity": 7035.0,
              "name": "Arunachal pradesh",
              "india": 324,
              "overseas": 80
            },
            {
              "totalOpportunities": 1038232,
              "totalLoanOpportunity": 9380.0,
              "name": "Assam",
              "india": 270,
              "overseas": 60
            },
            {
              "totalOpportunities": 830585,
              "totalLoanOpportunity": 11725.0,
              "name": "Bihar",
              "india": 231,
              "overseas": 48
            },
            {
              "totalOpportunities": 692154,
              "totalLoanOpportunity": 14070.0,
              "name": "Chandigarh",
              "india": 201,
              "overseas": 40
            },
            {
              "totalOpportunities": 593275,
              "totalLoanOpportunity": 16415.0,
              "name": "Chhattisgarh",
              "india": 180,
              "overseas": 34
            },
            {
              "totalOpportunities": 519116,
              "totalLoanOpportunity": 18760.0,
              "name": "Dadra And Nagar Haveli",
              "india": 162,
              "overseas": 30
            },
            {
              "totalOpportunities": 461436,
              "totalLoanOpportunity": 21105.0,
              "name": "Daman & Diu",
              "india": 147,
              "overseas": 26
            },
            {
              "totalOpportunities": 415292,
              "totalLoanOpportunity": 23450.0,
              "name": "Delhi",
              "india": 135,
              "overseas": 24
            },
            {
              "totalOpportunities": 377539,
              "totalLoanOpportunity": 25795.0,
              "name": "Goa",
              "india": 123,
              "overseas": 22
            },
            {
              "totalOpportunities": 346077,
              "totalLoanOpportunity": 28140.0,
              "name": "Gujarat",
              "india": 114,
              "overseas": 20
            },
            {
              "totalOpportunities": 319456,
              "totalLoanOpportunity": 30485.0,
              "name": "Haryana",
              "india": 108,
              "overseas": 18
            },
            {
              "totalOpportunities": 296637,
              "totalLoanOpportunity": 32830.0,
              "name": "Himachal Pradesh",
              "india": 99,
              "overseas": 16
            },
            {
              "totalOpportunities": 276861,
              "totalLoanOpportunity": 35175.0,
              "name": "Jammu And Kashmir",
              "india": 93,
              "overseas": 16
            },
            {
              "totalOpportunities": 259558,
              "totalLoanOpportunity": 37520.0,
              "name": "Jharkhand",
              "india": 90,
              "overseas": 14
            },
            {
              "totalOpportunities": 244289,
              "totalLoanOpportunity": 39865.0,
              "name": "Karnataka",
              "india": 84,
              "overseas": 14
            },
            {
              "totalOpportunities": 230718,
              "totalLoanOpportunity": 42210.0,
              "name": "Kerala",
              "india": 81,
              "overseas": 12
            },
            {
              "totalOpportunities": 218575,
              "totalLoanOpportunity": 44555.0,
              "name": "Lakshadweep",
              "india": 75,
              "overseas": 12
            },
            {
              "totalOpportunities": 207646,
              "totalLoanOpportunity": 46900.0,
              "name": "Madhya Pradesh",
              "india": 72,
              "overseas": 12
            },
            {
              "totalOpportunities": 197758,
              "totalLoanOpportunity": 49245.0,
              "name": "Maharashtra",
              "india": 69,
              "overseas": 10
            },
            {
              "totalOpportunities": 188769,
              "totalLoanOpportunity": 51590.0,
              "name": "Manipur",
              "india": 66,
              "overseas": 10
            },
            {
              "totalOpportunities": 180562,
              "totalLoanOpportunity": 53935.0,
              "name": "Meghalaya",
              "india": 63,
              "overseas": 10
            },
            {
              "totalOpportunities": 173038,
              "totalLoanOpportunity": 56280.0,
              "name": "Mizoram",
              "india": 60,
              "overseas": 10
            },
            {
              "totalOpportunities": 166117,
              "totalLoanOpportunity": 58625.0,
              "name": "Nagaland",
              "india": 60,
              "overseas": 8
            },
            {
              "totalOpportunities": 159728,
              "totalLoanOpportunity": 60970.0,
              "name": "Orissa",
              "india": 57,
              "overseas": 8
            },
            {
              "totalOpportunities": 153812,
              "totalLoanOpportunity": 63315.0,
              "name": "Pondicherry",
              "india": 54,
              "overseas": 8
            },
            {
              "totalOpportunities": 148318,
              "totalLoanOpportunity": 65660.0,
              "name": "Punjab",
              "india": 54,
              "overseas": 8
            },
            {
              "totalOpportunities": 143204,
              "totalLoanOpportunity": 68005.0,
              "name": "Rajasthan",
              "india": 51,
              "overseas": 8
            },
            {
              "totalOpportunities": 138430,
              "totalLoanOpportunity": 70350.0,
              "name": "Sikkim",
              "india": 48,
              "overseas": 8
            },
            {
              "totalOpportunities": 133965,
              "totalLoanOpportunity": 72695.0,
              "name": "Tamilnadu",
              "india": 48,
              "overseas": 6
            },
            {
              "totalOpportunities": 129779,
              "totalLoanOpportunity": 75040.0,
              "name": "Tripura",
              "india": 45,
              "overseas": 6
            },
            {
              "totalOpportunities": 125846,
              "totalLoanOpportunity": 77385.0,
              "name": "Uttar Pradesh",
              "india": 45,
              "overseas": 6
            },
            {
              "totalOpportunities": 122144,
              "totalLoanOpportunity": 79730.0,
              "name": "Uttarakhand",
              "india": 45,
              "overseas": 6
            },
            {
              "totalOpportunities": 118655,
              "totalLoanOpportunity": 82075.0,
              "name": "West Bengal",
              "india": 42,
              "overseas": 6
            },
            {
              "totalOpportunities": 115359,
              "totalLoanOpportunity": 84420.0,
              "name": "Telangana",
              "india": 42,
              "overseas": 6
            }
          ]
        }
      }
    }
  }

  handleStateChange = () => {
    let active = (this.state.multiValue.length != 0) ? "active" : "non-active";
    this.setState({
      stateIsReady: active
    });

    let selectedStates = this.state.multiValue;
    selectedStates = selectedStates.map(function(stateName) {
      return stateName.value;
    });

    this.getSelectedOpportunity(selectedStates);
    this.getSelectedLoanOpportunity(selectedStates);
    this.getTotalOpportunity(selectedStates);
  }

  onSelectStates = (value) => {
    const { multi } = this.state;
    if (multi) {
      this.setState((prevState) => {
        return { multiValue: value };
      }, this.handleStateChange);
    } else {
      this.setState((prevState) => {
        return { value };
      }, this.handleStateChange);
    }
  }

  getSelectedOpportunity = (options) => {
    let stateNames = this.state.data.selectedCountry.states;
    let selectedOpportunity = 0;

    for (var i = 0, l = options.length; i < l; i++) {
          let abc = stateNames
          .filter((statename) => {
            return statename.name === options[i];
          })
          .map((statename) => statename.india);

          selectedOpportunity += parseInt(abc[0]);
    }

    this.setState({
      selectedOpportunity : selectedOpportunity
    });
  }

  getSelectedLoanOpportunity = (options) => {

    let stateNames = this.state.data.selectedCountry.states;
    let selectedLoanOpportunity = 0;

    for (var i = 0, l = options.length; i < l; i++) {
          let abc = stateNames
          .filter((statename) => {
            return statename.name === options[i];
          })
          .map((statename) => statename.india);

          selectedLoanOpportunity += parseInt(abc[0]);
    }

    this.setState({
      selectedLoanOpportunity : selectedLoanOpportunity
    });
  }

  getTotalOpportunity = (options) => {

    let stateNames = this.state.data.selectedCountry.states;
    let totalOpportunity = 0;

    for (var i = 0, l = options.length; i < l; i++) {
          let abc = stateNames
          .filter((statename) => {
            return statename.name === options[i];
          })
          .map((statename) => statename.overseas);

          totalOpportunity += parseInt(abc[0]);
    }

    this.setState({
      totalOpportunity : totalOpportunity
    });
  }

  onSelectCountries = (e) => {
    var value = e.target.value;
    let active = (value != null && value != "") ? "active" : "non-active";
    this.setState({
      countryIsReady: active
    });
  }


  render() {

    const { multi, multiValue, options, value } = this.state;
    let selectProspectChecked = (this.state.stateIsReady == "active") ? "nav-link active" : "nav-link non-active";

    return (
      <div className="campaign__container">
        <Row className="m-0">
          <Col sm="3" style={{"paddingLeft": "45px"}}>
            <Row>
              <Col sm="6">
                <img src={BankLogo} style={{"width": "120px", "padding": "30px 0px"}}/>
                <div>
                  <span></span>
                </div>
              </Col>
              <Col sm="6">
                <span></span>
              </Col>
            </Row>

            <hr/>
            
            <Row style={{"padding": "30px 0px"}}>
              <Col sm="6">
                <div className="dashboard__data-heading dashboard__data--text-left">
                  <span>Total Opportunities</span>
                </div>
              </Col>
              <Col sm="6">
                <div className="dashboard__data-heading dashboard__data--text-right">
                  <span>Total Loan Opportunity</span>
                </div>
              </Col>

              <Col sm="6">
                <div className="dashboard__data-value dashboard__data--text-left dashboard--secondary-color font--bold">
                  <span>{this.state.data.india.totalOpportunities}</span>
                </div>
                <div className="dashboard__data-label dashboard__data--text-left">
                  <span>India</span>
                </div>
              </Col>

              <Col sm="6">
                <div className="dashboard__data-value dashboard__data--text-right dashboard--secondary-color font--bold">
                  <span>{this.state.data.india.totalLoanOpportunity}</span>
                </div>
                <div className="dashboard__data-label dashboard__data--text-right">
                  <span>India(M)</span>
                </div>
              </Col>

              <Col sm="6">
                <div className="dashboard__data-value dashboard__data--text-left dashboard--primary-color font--bold">
                  <span>{this.state.data.overseas.totalOpportunities}</span>
                </div>
                <div className="dashboard__data-label dashboard__data--text-left">
                  <span>Overseas</span>
                </div>
              </Col>

              <Col sm="6">
                <div className="dashboard__data-value dashboard__data--text-right dashboard--primary-color font--bold">
                  <span>{this.state.data.overseas.totalLoanOpportunity}</span>
                </div>
                <div className="dashboard__data-label dashboard__data--text-right">
                  <span>Overseas(M)</span>
                </div>
              </Col>
            </Row>
            
            <Row>
              <CustomPieChart india={this.state.data.india.percentage} overseas={this.state.data.overseas.percentage}/>
            </Row>
          </Col>

          {/* India Map and data points */}
          <Col sm="6" style={{"padding": "0px 30px"}}>
            <DrawIndiaSvg states={this.state.data.selectedCountry.states}/>
          </Col>
          
          <Col sm="3" style={{"paddingRight": "45px"}}>
            <Row style={{"marginTop": "15px"}}>
              <Col>
                <div className="dashboard__data-heading dashboard__data--text-left">
                  <span>Select Opportunities Seeking Loan for</span>
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <FormGroup>
                  <Input type="select" name="select" onChange={this.onSelectCountries} id="countrySelect">
                    <option value="">Select Country</option>
                    {this.state.data.countries.map((country, index) => (
                        <option key={index}>
                          {country.name}
                        </option>
                    ))}
                  </Input>
                </FormGroup>
              </Col>
            </Row>

            <Row id={"country-change"} className={this.state.countryIsReady}>
              <Col sm="6">
                <div className="dashboard__data-value dashboard__data--text-left dashboard--default-color font--bold">
                  <span>{this.state.selectedOpportunity}</span>
                </div>
                <div className="dashboard__data-label dashboard__data--text-left">
                  <span>Selected Opportunities</span>
                </div>
              </Col>

              <Col sm="6">
                <div className="dashboard__data-value dashboard__data--text-right dashboard--default-color font--bold">
                  <span>{this.state.selectedLoanOpportunity}</span>
                </div>
                <div className="dashboard__data-label dashboard__data--text-right">
                  <span>Selected Loan Opportunity(M)</span>
                </div>
              </Col>

              <Col sm="6">
                <div className="dashboard__data-label dashboard__data--text-left">
                  <span></span>
                </div>
              </Col>

              <Col sm="6">
                <div className="dashboard__data-value dashboard__data--text-right dashboard--default-color font--bold">
                  <span>{this.state.totalOpportunity}</span>
                </div>
                <div className="dashboard__data-label dashboard__data--text-right">
                  <span>Total Opportunities Available</span>
                </div>
              </Col>
              
              <Col>
                <FormGroup>
                  <div id="stateSelectMulti">
                    <Select.Creatable
                      multi={multi}
                      options={options}
                      onChange={this.onSelectStates}
                      value={multi ? multiValue : value}
                    />
                  </div>
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Link id={"selectProspect"} className={selectProspectChecked} to="/prospects" style={{"width": "100%", "padding": "0px 0px", "marginTop": "15px"}}>
              <Button color="primary" size="lg" style={{"background": "#f9d000", "borderColor": "#f9d000", "width": "100%", "borderRadius": "0px"}}>
              Start Selecting Prospects</Button></Link>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}