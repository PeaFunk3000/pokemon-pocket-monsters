import React, { useState } from "react";
import { Chart } from "chart.js/auto";
import { Bar } from "react-chartjs-2";


const BarChart = (props) => {
    const labels = ["HP", "Att", "Def", "Sp.Att", "Sp.Def", "Speed"];
    const barColors = ["#2D00F7", "#6A00F4","#A100F2","#BC00DD","#DB00B6","#F20089"];
    const data_values = [props.chartData.resultsObj.hp, props.chartData.resultsObj.attack, props.chartData.resultsObj.defense, props.chartData.resultsObj.special_attack, props.chartData.resultsObj.special_defense, props.chartData.resultsObj.speed];

    const data = {
        labels: labels,
        datasets: [{
            label: props.chartData.resultsObj.name,
            backgroundColor: barColors, //"#0456f9",
            borderColor: "#0456f9",
            data: data_values,
            inflateAmount: 5
        }]
    };

    const options = {
        //Customize chart options
        maintainAspectRatio: false,
        responsive: true,
        offset: false,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return context.parsed.y;
                    }
                }
            }
        },
        scales: {
            y: {
                min: 0,
                max: 160,
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
                    color: "#30fb05",
                    z: 10,
                    drawBorder: false
                }
            },
            x: {
                ticks: {
                    font :{
                        size: 11
                    },
                    color: "#2D00F7",
                    lineWidth: 0
                },
                grid: {
                    lineWidth: 3,
                    tickLength: 0,
                    color: "#30fb05",
                    z: 10,
                    drawBorder: false
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