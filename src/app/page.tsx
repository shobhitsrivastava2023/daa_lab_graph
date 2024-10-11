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

  const bfsGraphData = [
    {"Tooktime": 95700, "Generatedvertices": 10},

    {"Tooktime": 21200, "Generatedvertices": 24},
    
    {"Tooktime": 9700, "Generatedvertices": 11},
    
    {"Tooktime": 24100, "Generatedvertices": 28},
    
    {"Tooktime": 22200, "Generatedvertices": 29},
    
    {"Tooktime": 24900, "Generatedvertices": 26},
    
    {"Tooktime": 24000, "Generatedvertices": 37},
    
    {"Tooktime": 12200, "Generatedvertices": 21},
    
    {"Tooktime": 12400, "Generatedvertices": 19},
    
    {"Tooktime": 7000, "Generatedvertices": 7},
    
    {"Tooktime": 4000, "Generatedvertices": 3},
    
    {"Tooktime": 27600, "Generatedvertices": 48},
    
    {"Tooktime": 23000, "Generatedvertices": 29},
    
    {"Tooktime": 1900, "Generatedvertices": 2},
    
    {"Tooktime": 2900, "Generatedvertices": 4},
    
    
  ]


  const selectionSortData = [
    {"Tooktime": 2068000, "GeneratedLength": 631},
{"Tooktime": 184100, "GeneratedLength": 320},
{"Tooktime": 1141100, "GeneratedLength": 972},
{"Tooktime": 678900, "GeneratedLength": 766},
{"Tooktime": 499900, "GeneratedLength": 680},
{"Tooktime": 1056700, "GeneratedLength": 997},
{"Tooktime": 25000, "GeneratedLength": 142},
{"Tooktime": 45800, "GeneratedLength": 196},
{"Tooktime": 873900, "GeneratedLength": 905},
{"Tooktime": 52500, "GeneratedLength": 213},
{"Tooktime": 293300, "GeneratedLength": 519},
{"Tooktime": 5500, "GeneratedLength": 63},
{"Tooktime": 20100, "GeneratedLength": 127},
{"Tooktime": 365900, "GeneratedLength": 581},
{"Tooktime": 2400, "GeneratedLength": 51},
    
  ]

  const insertionsortDatsa = [
    {"Tooktime": 7689600, "GeneratedLength": 670},
{"Tooktime": 2800, "GeneratedLength": 29},
{"Tooktime": 374300, "GeneratedLength": 826},
{"Tooktime": 32300, "GeneratedLength": 242},
{"Tooktime": 292000, "GeneratedLength": 748},
{"Tooktime": 23500, "GeneratedLength": 207},
{"Tooktime": 151500, "GeneratedLength": 538},
{"Tooktime": 2900, "GeneratedLength": 68},
{"Tooktime": 66300, "GeneratedLength": 352},
{"Tooktime": 97400, "GeneratedLength": 420},
{"Tooktime": 125700, "GeneratedLength": 496},
{"Tooktime": 13600, "GeneratedLength": 152},
{"Tooktime": 313600, "GeneratedLength": 770},
{"Tooktime": 41000, "GeneratedLength": 279},
{"Tooktime": 379600, "GeneratedLength": 861},
  ]

  const bubbleSortData = [
    {"Tooktime": 3536100, "GeneratedLength": 726},
    {"Tooktime": 238300, "GeneratedLength": 343},
    {"Tooktime": 1180100, "GeneratedLength": 978},
    {"Tooktime": 59800, "GeneratedLength": 206},
    {"Tooktime": 883300, "GeneratedLength": 844},
    {"Tooktime": 1036400, "GeneratedLength": 917},
    {"Tooktime": 108800, "GeneratedLength": 289},
    {"Tooktime": 22100, "GeneratedLength": 119},
    {"Tooktime": 220500, "GeneratedLength": 411},
    {"Tooktime": 894100, "GeneratedLength": 836},
    {"Tooktime": 117800, "GeneratedLength": 299},
    {"Tooktime": 384500, "GeneratedLength": 546},
    {"Tooktime": 905600, "GeneratedLength": 825},
    {"Tooktime": 51300, "GeneratedLength": 188},
    {"Tooktime": 255000, "GeneratedLength": 443},
  ]
  const SortedData = selectionSortData.sort((a, b) => a.GeneratedLength- b.GeneratedLength)

  return (
    <div className="container mx-auto p-4 bg-white">
      <h1 className="text-2xl font-bold mb-4  text-black">Selection Sort Performance Visualization</h1>
      <div className="w-full h-[500px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={SortedData}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" dataKey="GeneratedLength" name="Array Length" unit=" elements" />
            <YAxis type="number" dataKey="Tooktime" name="Time" unit=" ns" />
            <Tooltip />
            <Line type="monotone" dataKey="Tooktime" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
