import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LabelList} from 'recharts';
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import FilterProspects from './FilterProspects';
import CustomizedDot from './CustomizedDot';
import BarSummary from './BarSummary';
import ProgressBar from './ProgressBar';


export default class SelectProspects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persona : [
          {name: "Pure Sciences", value: this.randValue(5000, 4000), activeClass: false},
          {name: "Engineering", value:  this.randValue(12000, 9000), activeClass: false},
          {name: "Law", value:  this.randValue(8000, 7000), activeClass: false},
          {name: "Medical", value:  this.randValue(9000, 7000), activeClass: false},
          {name: "Media", value:  this.randValue(4000, 3000), activeClass: false},
          {name: "Design", value:  this.randValue(3000, 2000), activeClass: false},
          {name: "Business Studies", value:  this.randValue(5000, 4000), activeClass: false},
          {name: "Fine Arts", value:  this.randValue(2000, 1000), activeClass: false},
          {name: "Others", value:  this.randValue(5000, 4000), activeClass: false},
        ],
      campaignValue : {
          "totalSelectedOpportunities": 0,
          "allSlectedOpportunities": 100000,
          "totalLoanOpportunity": 0,
          "allLoanOpportunity": 100000,
          "averageRiskScore": 70,
          "allAverageRiskScore": 100
          },
      allSlectedNames : []
    }
  }

  randValue = (x,y) => {
    return Math.floor(Math.random() * ((y-x)+1) + x);
  }

  updateValues = () => {
    this.setState({
      persona : [
          {name: "Pure Sciences", value: this.randValue(5000, 4000), activeClass: false},
          {name: "Engineering", value:  this.randValue(12000, 9000), activeClass: false},
          {name: "Law", value:  this.randValue(8000, 7000), activeClass: false},
          {name: "Medical", value:  this.randValue(9000, 7000), activeClass: false},
          {name: "Media", value:  this.randValue(4000, 3000), activeClass: false},
          {name: "Design", value:  this.randValue(3000, 2000), activeClass: false},
          {name: "Business Studies", value:  this.randValue(5000, 4000), activeClass: false},
          {name: "Fine Arts", value:  this.randValue(2000, 1000), activeClass: false},
          {name: "Others", value:  this.randValue(5000, 4000), activeClass: false},
        ],
      campaignValue : {
          "totalSelectedOpportunities": 0,
          "allSlectedOpportunities": 100000,
          "totalLoanOpportunity": 0,
          "allLoanOpportunity": 100000,
          "averageRiskScore": 70,
          "allAverageRiskScore": 100
          },
      allSlectedNames : []
    })
  }

  clickPersona = (event) => {
    if(event != null){
      let newpersona = this.state.persona;
      for (var i in newpersona) {
         if (newpersona[i].name === event.activeLabel) {
            newpersona[i].activeClass = !newpersona[i].activeClass ;
         }
      }

      var totalSelectedOpportunities = this.state.persona
          .filter((persona) => {
            return persona.activeClass === true;
          })
          .map((persona) => persona.value)
          .reduce((prev, cur) => {
            return (prev + cur);
          }, 0);

      var allSlectedOpportunities =  this.state.persona
          .map((persona) => persona.value)
          .reduce((prev, cur) => {
            return (prev + cur);
          }, 0);

      var allSlectedNames =  this.state.persona
          .filter((persona) => {
            return persona.activeClass === true;
          })
          .map((persona) => persona.name);
          console.log(allSlectedNames);

      this.setState({
        persona: newpersona,
        campaignValue: {
          "totalSelectedOpportunities": totalSelectedOpportunities,
          "allSlectedOpportunities": allSlectedOpportunities,
          "totalLoanOpportunity": totalSelectedOpportunities*1000,
          "allLoanOpportunity": allSlectedOpportunities*1000,
          "averageRiskScore": this.randValue(70, 80),
          "allAverageRiskScore": 100
        },
        allSlectedNames: allSlectedNames
      })
    }
  }

  componentDidMount() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    

    // fetch('http://54.255.249.1:9090/b4sloan/prospects?collegeRating=0&profession=all&income.min=0&income.max=0&riskScore.min=0&riskScore.max=0&percentageMarks.min=0&percentageMarks.max=0&collateral=false&country=India&states=Haryana,Delhi',
    //           {
    //             method: 'POST',
    //             mode: 'cors',
    //             cache: 'default'
    //           })
    // .then((response) => response.json())
    // .then((responseJson) => {
    //   console.log(responseJson);
    //   this.setState({
    //     "data": responseJson
    //   })
    // })
    // .catch((error) => {
    //   console.error(error);
    // }); 
  }

  render() {
    const x = 25;
    const y = -70;
    const styles = { 
        transform: `translate(${x}px, ${y}px)`,
        fontSize: "14px"
    };

    return (
      <div className="campaign__container">
        <FilterProspects updateValues={this.updateValues}/>
        <Row className="campaign__bar-data">
            <BarChart width={1140} height={500} data={this.state.persona} margin={{top: 100, right: 20, left: 20, bottom: 5}} style={{"margin": "auto"}}
             onClick={(event) => this.clickPersona(event)}>
               <XAxis dataKey="name" height={60} />
               <YAxis/>
               <CartesianGrid strokeDasharray="1 1"/>
               <Tooltip/>
               {/*<Legend />*/}
               <Bar dataKey="value" barSize={50} fill="#303a4c" shape={<CustomizedDot />}>
                <LabelList style={styles}/>
               </Bar>
            </BarChart>
        </Row>
        <Row className="campaign__bar-summary">
          {this.state.persona.map((persona, index) => (
              <BarSummary
                  key={index}
                  disabled = {!persona.activeClass ? 'disabled' : ''}
                  totalLoanOpportunity = {persona.value}
              />
          ))}
        </Row>
        <Row className="campaign__action-summary">
          <Col>
            <span className="campaign__label">Summary</span>
          </Col>

          <Col>
            <ProgressBar value={this.state.campaignValue.totalSelectedOpportunities} totalValue={this.state.campaignValue.allSlectedOpportunities}/>
            <span className="campaign__label">Total Selected Opportunities</span>
          </Col>

          <Col>
            <ProgressBar value={this.state.campaignValue.totalLoanOpportunity} totalValue={this.state.campaignValue.allLoanOpportunity}/>
            <span className="campaign__label">Total Loan Opportunity</span>
          </Col>

          <Col>
            <ProgressBar value={this.state.campaignValue.averageRiskScore} totalValue={this.state.campaignValue.allAverageRiskScore}/>
            <span className="campaign__label">Average Risk Score</span>
          </Col>

          <Col>
            <div style={{"minHeight": "100px"}}>
              {
                this.state.allSlectedNames
                .map((persona, index) =>
                 <p key={index} style={{"padding": "0", "margin": "0", "fontSize": "12px"}}>
                  {persona}
                 </p>
                )
              }
            </div>
            <span className="campaign__label">Selected Streams</span>
          </Col>

          <Col>
            <Link className="nav-link" to="/create-campaign" style={{"width": "100%", "padding": "0px 0px"}}>
            <Button color="primary" size="lg" style={{"background": "#f9d000", "borderColor": "#f9d000", "height": "100px", "width": "100%", "borderRadius": "0px"}}>Create Campaign</Button></Link>
          </Col>
        </Row>
      </div>
    );
  }
}