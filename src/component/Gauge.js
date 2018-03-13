import React from 'react';
import { Sector, Cell, PieChart, Pie, ResponsiveContainer } from 'recharts';

const RechartGauge = (props) => {
        const width = 300;
        const chartValue = props.sent.value;  // the value that will be shown on chart
        const colorData = [
            {name: 'A', value: chartValue, fill: '#f9d000', stroke: '#FFF', strokeWidth: 2},
            {name: 'B', value: 100, fill: '#EEEEEE', stroke: '#FFF', strokeWidth: 2}
        ];

        const sumValues = colorData
            .map(cur => cur.value)
            .reduce((a, b) => a + b);

        const arrowData = [
            { value: chartValue },
            { value: 0 },
            { value: sumValues - chartValue }
        ];

        const pieProps = {
            dataKey: "value",
            startAngle: 180,
            endAngle: 0,
            cx: "50%",
            cy: "90%"
        };

        const Arrow = ({ cx, cy, midAngle, outerRadius }) => { //eslint-disable-line react/no-multi-comp
            const RADIAN = Math.PI / 180;
            const sin = Math.sin(-RADIAN * midAngle);
            const cos = Math.cos(-RADIAN * midAngle);
            const mx = cx + (outerRadius + width * 0.03) * cos;
            const my = cy + (outerRadius + width * 0.03) * sin;
            return (
                <g>
                    <circle cx={cx} cy={cy} r={width * 0.02} fill="#FFF" stroke="#666" strokeWidth="3"/>
                    <path d={`M${cx},${cy}L${mx},${my}`} strokeWidth="4" stroke="#666" fill="none" strokeLinecap="round"/>
                    <text x={cx-130} y={cy} stroke="#666" strokeWidth=".2" fontSize="10">0</text> // initial
                    <text x={mx-15} y={my-15} stroke="#666" strokeWidth=".2" fontSize="10">{chartValue}</text> // center
                    <text x={cx+115} y={cy} stroke="#666" strokeWidth=".2" fontSize="10">100</text> // end
                </g>
            );
        };

        return (
            <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                    <Pie data={colorData}
                        outerRadius={ 100 }
                        { ...pieProps }
                        />
                    <Pie
                        stroke="none"
                        activeIndex={1}
                        activeShape={ Arrow }
                        data={ arrowData }
                        outerRadius={ 90 }
                        fill="none"
                        { ...pieProps }
                    />
                </PieChart>
            </ResponsiveContainer>
        );
};

export default RechartGauge;
