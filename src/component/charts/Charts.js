import React from 'react';
import './Charts.css'

import { XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, VerticalBarSeries } from 'react-vis';

const Charts = () => {

    const data = [
        { x: 0, y: 8 },
        { x: 1, y: 5 },
        { x: 2, y: 3 },
        { x: 3, y: 4 },
        { x: 4, y: 6 },
        { x: 5, y: 9 },
        { x: 6, y: 7 },
        { x: 7, y: 9 },
        { x: 8, y: 5 },
        { x: 9, y: 3 },


    ]

    return (
        <div style={{ marginTop: "15px" }}>
            <XYPlot width={300} height={300}>
                <VerticalBarSeries/>
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                <LineSeries data={data} color="red" />
                <LineSeries data={data} color="purple" />
                <LineSeries data={data} color="yellow" />
            </XYPlot>

        </div>
    );
};

export default Charts;