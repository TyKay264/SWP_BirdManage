import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Rectangle } from 'recharts';
import { format } from 'date-fns'; // Import the format function

interface TotalEggData {
    perDay: {
        eggLaidDate: string;
        totalSucessEgg: number;
        totalFailEgg: number;
    }[];
}

const ColumnChartCustom: React.FC<{ totalEggIn7Day: TotalEggData }> = ({ totalEggIn7Day }) => {
    const data = totalEggIn7Day.perDay.map((item) => ({
        ...item,
        eggLaidDate: format(new Date(item.eggLaidDate), 'dd-MM-yyyy'), // Format the date
    }));

    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="eggLaidDate" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="totalSucessEgg" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                <Bar dataKey="totalFailEgg" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default ColumnChartCustom;
