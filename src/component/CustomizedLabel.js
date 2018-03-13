import React from 'react';
const CustomizedLabel = () => ({
  render () {
    const {x, y, height, width, stroke, value} = this.props;
    return (
    	<text x={x+width/2} y={y} dy={-10} fill={stroke} fontSize={14} textAnchor="middle">{value}</text>
    );
  }
});

export default CustomizedLabel;