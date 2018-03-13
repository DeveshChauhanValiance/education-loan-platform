import React from 'react';
import InputRange from 'react-input-range';
import './../css/Range.css';
export default class CustomizedRange extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: {
        min: this.props.minSet,
        max: this.props.maxSet,
      }
    };
  }

  render() {
    return (
      <div style={{"width": "220px","padding": "5px 0px"}}>
        <InputRange
          draggableTrack
          maxValue={this.props.maxRange}
          minValue={this.props.minRange}
          onChange={value => this.setState({ value: value })}
          //onChangeComplete={value => console.log(value)}
          onChangeComplete={this.props.updateValues}
          value={this.state.value} />
      </div>
    );
  }
}