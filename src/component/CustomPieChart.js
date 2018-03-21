import React from 'react';
import {PieChart, Pie, Label, Legend, Tooltip, Cell} from 'recharts';
const COLORS = ['#f9d100', '#303a4c'];

export default class CustomPieChart extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      data : [
          {id: 'A', name: 'India', value: parseInt(this.props.india)},
          {id: 'B', name: 'Overseas', value: parseInt(this.props.overseas)}
        ]
    }
  }

  render () {
    return (
      <PieChart width={200} height={200} style={{"margin": "auto"}}>
        <Pie data={this.state.data} dataKey="value" cx={100} cy={100} innerRadius={45} outerRadius={60} fill="#82ca9d" label={true} labelLine={true}>
          {
            this.state.data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
        <Tooltip />
      </PieChart>
    );
  }
}