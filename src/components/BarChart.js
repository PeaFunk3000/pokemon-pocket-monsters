import React, { useState } from "react";
import { Chart } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = (props) => {
  const labels = props.labels;
  const barColors = [
    "#2D00F7",
    "#6A00F4",
    "#A100F2",
    "#BC00DD",
    "#DB00B6",
    "#F20089",
  ];
  const data_values = props.chartData;
  const max = Math.max(...data_values) + Math.max(...data_values) * 0.10;
  const boolean = props.boolean;



  const data = {
    labels: labels,
    datasets: [
      {
        backgroundColor: barColors, //"#0456f9",
        borderColor: "#0456f9",
        data: data_values,
        inflateAmount: 5,
      },
    ],
  };

  const options = {
    //Customize chart options
    maintainAspectRatio: false,
    responsive: true,
    offset: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: props.boolean,
        color: "#000000",
        text: `${props.title}`


      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return props.unit + context.parsed.y;
          },
        },
      },
    },
    scales: {
      y: {
        min: 0,
        max: boolean ? max : 160,
        ticks: {
          // font :{
          //     size: 20
          // },
          display: false,
          // color: "#000000",
          // stepSize: 20
        },
        grid: {
          lineWidth: 3,
          tickLength: 0,
          color: props.color,
          z: 10,
          drawBorder: false,
        },
      },
      x: {
        ticks: {
          font: {
            size: 11,
          },
          color: "#2D00F7",
          lineWidth: 0,
        },
        grid: {
          lineWidth: 3,
          tickLength: 0,
          color: props.color,
          z: 10,
          drawBorder: false,
        },
      },
    },
  };

  return (
    <div id="statsChart" className={props.name}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
