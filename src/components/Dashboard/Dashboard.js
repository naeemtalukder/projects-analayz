import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json()).then(data => setData(data));
    }, [])
    return (
        <div className='mx-auto font-serif'>
            <h3 className='text-center text-3xl font-bold text-cyan-600 pb-10'>This is Dashboard</h3>
            <div className='grid grid-cols-2 gap-3'>
                <div className='p-10'>
                    <LineChart width={450} height={350} data={data}>
                        <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey={'month'}></XAxis>
                        <Tooltip></Tooltip>
                        <YAxis></YAxis>
                    </LineChart>
                </div>
                <div className='p-10'>
                    <BarChart width={550} height={380} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="investment" fill="#8884d8" />
                        <Bar dataKey="revenue" fill="#82ca9d" />
                    </BarChart>
                </div>
            </div>
        </div >
    );
};

export default Dashboard;