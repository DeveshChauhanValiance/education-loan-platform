import React from 'react';
import { Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import BarImg from './../img/bar.png';
import BoxImg from './../img/box.png';
import CallImg from './../img/call.png';
import DragImg from './../img/drag.png';
import MailImg from './../img/mail.png';
import SmsImg from './../img/sms.png';
import DoneImg from './../img/done.png';
import AddImg from './../img/add.png';
import './../css/Campaign.css';
import './../css/Slick.css';
import './../css/SlickTheme.css';
import MailTemplate from './MailTemplate';
import SMSTemplate from './SMSTemplate';
import PreviewMailTemplate from './PreviewMailTemplate';
import PreviewSMSTemplate from './PreviewSMSTemplate';
import Toggle from 'react-toggle';
import './../css/ReactToggle.css';

export default class CampaignDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      angle : 0,
      disabled: false,
      animation: false,
      editModal: false,
      previewModal: false,
      postModal: false,
      templateNo: 0,
      templateType: "none",
      switchIsReady: false,
      psi: {
        value: 0.30
      }
    }
  }

  // disabled -- toggle button
  // animation -- fade in and out
  /*
  rotateBar = (event) => {
    this.setState({
      angle: event.target.value
    });
    if(event.target.value == 140) {
      this.setState({
        disabled: true,
        animation: true
      });
    }
  } 
  */

  handleToChange = (e) => {
    let getAngle = (e.target.checked)? 140 : 0;
    let getAnimation = (e.target.checked)? true : false;
    this.setState({
      switchIsReady: !this.state.switchIsReady,
      angle: getAngle,
      animation: getAnimation
    });
  }

  editToggle = (type,number) => {
    this.setState({
      editModal: !this.state.editModal,
      previewModal: false,
      postModal: false,
      templateNo: number,
      templateType: type
    });
  }

  previewToggle = (event) => {
    console.log(event);
    this.setState({
      editModal: false,
      previewModal: !this.state.previewModal,
      postModal: false
    });
  }

  postToggle = () => {
    this.setState({
      editModal: false,
      previewModal: false,
      postModal: !this.state.postModal
    });
    this.clearAllLocal();
  }

  setToLocal = (key, event) => {
    localStorage.setItem(key, event.target.value);
  }

  clearAllLocal = () => {
    localStorage.clear();
  }

  componentDidMount() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    }

    let template, previewTemplate;
    if(this.state.templateType === "mail") {
      template = <MailTemplate templateNo={this.state.templateNo} setToLocal={this.setToLocal}/>
      previewTemplate = <PreviewMailTemplate templateNo={this.state.templateNo}/>
    } else if(this.state.templateType === "sms") {
      template = <SMSTemplate templateNo={this.state.templateNo} setToLocal={this.setToLocal}/>
      previewTemplate = <PreviewSMSTemplate templateNo={this.state.templateNo}/>
    }

    return (
      <div className="campaign__container">
        <Row style={{"minHeight": "220px", "margin": "20px 0px", "padding": "10px 0px", "background": "#f3f3f3"}}>
          <div style={{"margin": "0px auto", "position": "relative", "top": "0", "left": "0"}}>
              <div style={{"position": "absolute", "top": "70px", "right": "350px"}}>
                <div className="font--bold" style={{"fontSize": "24px"}}>
                  <span>Create a</span>
                </div>
                <div className="font--bold" style={{"fontSize": "42px"}}>
                  <span>Campaign</span>
                </div>
              </div>
              <div>
                <img className="campaign__drag-img user-drag-none" src={DragImg} />
              </div>
              <div style={{"position": "absolute", "top": "100px", "right": "170px"}}>
                <Toggle checked={this.state.switchIsReady} icons={false} onChange={this.handleToChange} />
              </div>
              {/*
              <div className="campaign__slider-wrapper">
                <input type="range" min="0" max="140" value={this.state.angle} step="140" onChange={(event) => this.rotateBar(event)} disabled={this.state.disabled} />
              </div> */}
              <div>
                <img className="campaign__bar-img user-drag-none" src={BarImg} style={{"transform": "rotate("+this.state.angle+"deg)", "transition": "all 0.3s ease"}}/>
                <img className="campaign__box-img user-drag-none" src={BoxImg} />
              </div>
              <div style={{"position": "absolute", "top": "70px", "left": "200px"}}>
                <FormGroup>
                  <Label for="campaignName">Campaign Name</Label>
                  <Input type="text" name="campaign_name" id="campaignName" placeholder="Enter Campaign Name" style={{"width": "250px"}}/>
                </FormGroup>
              </div>
          </div>
        </Row>

        <Row className={(this.state.animation)? "display-none" : ""} style={{"margin": "0px"}}>
          <div style={{"margin": "50px auto"}}>
            <h2>
              Click the knob to select
              <br/>
              different campaign type
            </h2>
          </div>
        </Row>

        <Row style={{"margin": "0px"}}>
          <div className="campaign__type--wrapper">
            <div className={(!this.state.animation)? "campaign__type--name hide-me" : "campaign__type--name animate-fade-in"}>
              SMS
            </div>
            <div id={(this.state.animation)? "campaign__img--wrapper" : ""} className="campaign__img--wrapper">
              <img className={(this.state.animation)? "campaign__sms-img user-drag-none animate-top--1" : "campaign__sms-img user-drag-none"} src={SmsImg} />
            </div>
            <div className={(!this.state.animation)? "campaign__type--slider hide-me" : "campaign__type--slider animate-fade-in"}>
              <Slider {...settings}>
                <div>
                  <div className="campaign__template--wrapper" onClick={() => this.editToggle("sms", 1)}>
                    <div className="campaign__template--container"><h1>1</h1></div>
                    <div className="campaign__template--footer">
                      <span>Fill Template</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="campaign__template--wrapper" onClick={() => this.editToggle("sms", 2)}>
                    <div className="campaign__template--container"><h1>2</h1></div>
                    <div className="campaign__template--footer">
                      <span>Fill Template</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="campaign__template--wrapper" onClick={() => this.editToggle("sms", 3)}>
                    <div className="campaign__template--container"><h1>3</h1></div>
                    <div className="campaign__template--footer">
                      <span>Fill Template</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="campaign__template--wrapper" onClick={() => this.editToggle("sms", 4)}>
                    <div className="campaign__template--container"><h1>4</h1></div>
                    <div className="campaign__template--footer">
                      <span>Fill Template</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="campaign__template--wrapper" onClick={() => this.editToggle("sms", 5)}>
                    <div className="campaign__template--container"><h1>5</h1></div>
                    <div className="campaign__template--footer">
                      <span>Fill Template</span>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </Row>

        <Row style={{"margin": "0px"}}>
          <div className="campaign__type--wrapper">
            <div className={(!this.state.animation)? "campaign__type--name hide-me" : "campaign__type--name animate-fade-in"}>
              E-mail
            </div>
            <div id={(this.state.animation)? "campaign__img--wrapper" : ""} className="campaign__img--wrapper">
              <img className={(this.state.animation)? "campaign__mail-img user-drag-none animate-top--2" : "campaign__mail-img user-drag-none"} src={MailImg} />
            </div>
            <div className={(!this.state.animation)? "campaign__type--slider hide-me" : "campaign__type--slider animate-fade-in"}>
              <Slider {...settings}>
                <div>
                  <div className="campaign__template--wrapper" onClick={() => this.editToggle("mail", 1)}>
                    <div className="campaign__template--container"><h1>1</h1></div>
                    <div className="campaign__template--footer">
                      <span>Fill Template</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="campaign__template--wrapper" onClick={() => this.editToggle("mail", 2)}>
                    <div className="campaign__template--container"><h1>2</h1></div>
                    <div className="campaign__template--footer">
                      <span>Fill Template</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="campaign__template--wrapper" onClick={() => this.editToggle("mail", 3)}>
                    <div className="campaign__template--container"><h1>3</h1></div>
                    <div className="campaign__template--footer">
                      <span>Fill Template</span>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </Row>

        <Row style={{"margin": "0px"}}>
          <div className="campaign__type--wrapper">
            <div className={(!this.state.animation)? "campaign__type--name hide-me" : "campaign__type--name animate-fade-in"}>
              Outbound Call
            </div>
            <div id={(this.state.animation)? "campaign__img--wrapper" : ""} className="campaign__img--wrapper">
              <img className={(this.state.animation)? "campaign__call-img user-drag-none animate-top--3" : "campaign__call-img user-drag-none"} src={CallImg} />
            </div>
            {/* <div className={(!this.state.animation)? "campaign__type--slider hide-me" : "campaign__type--slider animate-fade-in"}>
              <Slider {...settings}>
                <div><h3>1</h3></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
              </Slider>
            </div> */}
          </div>
        </Row>


        <Row style={{"margin": "0px"}}>
          <div className="campaign__type--wrapper">
            <div className={(!this.state.animation)? "campaign__type--name hide-me" : "campaign__type--name animate-fade-in"}>
              Create new campaign
            </div>
            <div id={(this.state.animation)? "campaign__img--wrapper" : ""} className="campaign__img--wrapper">
              <Link to="/prospects" >
                <img className={(this.state.animation)? "campaign__add-img user-drag-none animate-top--4" : "campaign__add-img user-drag-none"} src={AddImg} />
              </Link>
            </div>
          </div>
        </Row>

      {/**********************
        =====Modal===== 
      **********************/}
      <div>
        
        <Modal isOpen={this.state.editModal} toggle={() => this.editToggle("none", 0)} className={this.props.className} style={{"minWidth": "768px", "fontSize": "14px"}}>
          <ModalBody>
          
            {template}
          
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => this.editToggle("none", 0)}>Cancel</Button>{' '}
            <Button color="primary" onClick={this.previewToggle}>Preview</Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.previewModal} toggle={this.previewToggle} className={this.props.className} style={{"minWidth": "768px", "fontSize": "14px"}}>
          <ModalBody>
            
          {previewTemplate}

          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.previewToggle}>Cancel</Button>{' '}
            <Button color="primary" onClick={this.postToggle}>Post Campaign</Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.postModal} toggle={this.postToggle} className={this.props.className}>
          <ModalBody>
              <div style={{"width": "100%", "textAlign": "center"}}>
                <img className="campaign__done-img user-drag-none" src={DoneImg} />
                <p>Your Campaign was successfully posted!</p>
              </div>
          </ModalBody>
        </Modal>

      </div>

      </div>
    );
  }
}