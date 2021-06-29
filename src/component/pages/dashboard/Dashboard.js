import React from 'react';
import Chart from '../../chart/Chart';
import Featured from '../../featured/Featured';
import { userData } from "../../../fackAllData";
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Featured/>
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
        </div>
    );
};

export default Dashboard;