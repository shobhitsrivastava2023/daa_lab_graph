'use client'

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Home() {

  const Mergedata = [
    { "time": 3500, "arrayLength": 46 },
    { "time": 7000, "arrayLength": 66 },
    { "time": 20400, "arrayLength": 176 },
    { "time": 117400, "arrayLength": 224 },
    { "time": 26400, "arrayLength": 371 },
    { "time": 36800, "arrayLength": 500 },
    { "time": 43300, "arrayLength": 566 },
    { "time": 44200, "arrayLength": 587 },
    { "time": 46400, "arrayLength": 612 },
    { "time": 46500, "arrayLength": 615 },
    { "time": 55000, "arrayLength": 718 },
    { "time": 62900, "arrayLength": 810 },
    { "time": 69300, "arrayLength": 867 },
    { "time": 74000, "arrayLength": 952 },
    { "time": 76300, "arrayLength": 970 }
  ]

  const quicksort = [
    { "time": 300, "arrayLength": 6 },
    { "time": 8100, "arrayLength": 166 },
    { "time": 27000, "arrayLength": 196 },
    { "time": 14200, "arrayLength": 251 },
    { "time": 13500, "arrayLength": 261 },
    { "time": 14600, "arrayLength": 272 },
    { "time": 30900, "arrayLength": 356 },
    { "time": 19000, "arrayLength": 357 },
    { "time": 27000, "arrayLength": 440 },
    { "time": 647000, "arrayLength": 473 },
    { "time": 46000, "arrayLength": 691 },
    { "time": 44500, "arrayLength": 710 },
    { "time": 49300, "arrayLength": 806 },
    { "time": 53700, "arrayLength": 843 },
    { "time": 60900, "arrayLength": 914 }
  ];


  const randomizedData = [
    { "time": 1800, "arrayLength": 23 },
    { "time": 15800, "arrayLength": 152 },
    { "time": 35800, "arrayLength": 336 },
    { "time": 42800, "arrayLength": 380 },
    { "time": 44700, "arrayLength": 407 },
    { "time": 56400, "arrayLength": 442 },
    { "time": 60400, "arrayLength": 490 },
    { "time": 65200, "arrayLength": 550 },
    { "time": 77800, "arrayLength": 659 },
    { "time": 561400, "arrayLength": 574 },
    { "time": 180500, "arrayLength": 739 },
    { "time": 93200, "arrayLength": 753 },
    { "time": 391200, "arrayLength": 826 },
    { "time": 131400, "arrayLength": 953 },
    { "time": 139400, "arrayLength": 976 }
  ];

  return (
    <div className="container mx-auto p-4 bg-white">
      <h1 className="text-2xl font-bold mb-4  text-black">Randomized Sort Performance Visualization</h1>
      <div className="w-full h-[500px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={randomizedData}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" dataKey="arrayLength" name="Array Length" unit=" elements" />
            <YAxis type="number" dataKey="time" name="Time" unit=" ns" />
            <Tooltip />
            <Line type="monotone" dataKey="time" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
