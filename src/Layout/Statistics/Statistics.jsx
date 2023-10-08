import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, Label, ResponsiveContainer } from 'recharts';

const Statistics = () => {
  const seletedItem = JSON.parse(localStorage.getItem('favorites'));
  const y = parseInt(seletedItem?.length);
  const total = 12;
  let selectedPercentage, unselectedPercentage;
  
  if (y > 0) {
    selectedPercentage = ((y / total) * 100);
    unselectedPercentage = (((total - y) / total) * 100);
  } else {
    selectedPercentage = 0;
    unselectedPercentage = 100;
  }

  const value1 = selectedPercentage.toFixed(2);
  const value2 = unselectedPercentage.toFixed(2);

  const data01 = [
    { name: `Your Donation(${value1}%)`, value: selectedPercentage },
    { name: `Total Donation(${value2}%)`, value: unselectedPercentage },
  ];

  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data01}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="#8884d8"
            labelLine={false}
            label={(entry) => entry.name}
          >
            {data01?.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={['#FF444A', '#00C49F'][index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
          <Label content="" position="center">
            <tspan x="0" dy="-20">
              {`${value1}%`}
            </tspan>
            <tspan x="0" dy="20">
              {`Total Donation: ${y}`}
            </tspan>
          </Label>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
