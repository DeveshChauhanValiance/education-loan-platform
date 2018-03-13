import React from 'react';
import { Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import CustomizedRange from './CustomizedRange';

export default class FilterProspects extends React.Component {
  render() {
    return (
      <Row className="campaign__bar-filter">
        <Col>
          <label className="campaign__label">College Rating</label>
          <FormGroup>
            <Input type="select" name="select" id="ratingSelect" onChange={this.props.updateValues}>
              <option>College Rating</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>
        </Col>
        <Col>
          <label className="campaign__label">Parent's Profession</label>
          <FormGroup>
            <Input type="select" name="select" id="professionSelect" onChange={this.props.updateValues}>
              <option>Parent's Profession</option>
              <option>Professor</option>
              <option>Teacher</option>
              <option>Business Man</option>
              <option>Engineer</option>
              <option>Doctor</option>
              <option>Sales executive</option>
              <option>Govt Job</option>
            </Input>
          </FormGroup>
        </Col>
        <Col>
          <label className="campaign__label">Parent's Income (Lakhs)</label>
          <CustomizedRange minSet={5} maxSet={12} minRange={0} maxRange={50} updateValues={this.props.updateValues} />
        </Col>
        <Col>
          <label className="campaign__label">Risk Score</label>
          <CustomizedRange minSet={75} maxSet={95} minRange={0} maxRange={100} updateValues={this.props.updateValues} />
        </Col>
        <Col>
          <label className="campaign__label">Percentage(%) Marks</label>
          <CustomizedRange minSet={50} maxSet={80} minRange={0} maxRange={100} updateValues={this.props.updateValues} />
        </Col>
        <Col>
          <label className="campaign__label">Collateral</label>
          <FormGroup>
            <Label check>
              <Input type="radio" name="radio1" onChange={this.props.updateValues} />{' '}
              Yes
            </Label>&nbsp;
            <Label check>
              <Input type="radio" name="radio1" onChange={this.props.updateValues} />{' '}
              No
            </Label>
          </FormGroup>
        </Col>
      </Row>
    );
  }
}