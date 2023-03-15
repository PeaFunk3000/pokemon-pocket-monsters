import React, { useState } from "react";
import { Chart } from "chart.js/auto";
import { Bar } from "react-chartjs-2";


const BarChart = (props) => {
    const labels = ["HP", "Att", "Def", "Special Att", "Special Def", "Speed"];
    const data_values = [props.chartData.resultsObj.hp, props.chartData.resultsObj.attack, props.chartData.resultsObj.defense, props.chartData.resultsObj.special_attack, props.chartData.resultsObj.special_defense, props.chartData.resultsObj.speed];

    const data = {
        labels: labels,
        datasets: [{
            label: props.chartData.resultsObj.name,
            backgroundColor: "#0456f9",
            borderColor: "#0456f9",
            data: data_values,
        }]
    };

    const options = {
        //Customize chart options
        maintainAspectRatio: false,
        responsive: true,
        offset: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false
            }
        },
        scales: {
            y: {
                min: 0,
                max: 160,
                ticks: {
                    font :{
                        size: 10,
                    },
                    color: "#000000",
                    stepSize: 20
                },
                grid: {
                    color: "#000000"
                }
            },
            x: {
                display: true,
                // {axisDisplay},
                ticks: {
                    font :{
                        size: 10
                    },
                    color: "#000000"
                },
                grid: {
                    color: "#000000"
                }
            }
        }
    }

    return (
        <div id="statsChart" className={props.display}>
            <Bar data={data} options={options}/>
        </div>
    );
};

export default BarChart;