import React from 'react';
import { Circle } from 'rc-progress';

export default class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div className="progress--wrapper" >
        <Circle percent={(this.props.value*100)/this.props.totalValue} strokeWidth="7" strokeColor="#f9d000" />
        <span className="progress--value">{this.props.value}</span>
      </div>
    );
  }
}