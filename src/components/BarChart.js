import { Chart } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

console.log(Chart);

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
  const max = Math.ceil(Math.max(...data_values) + Math.max(...data_values) * 0.10);
  const boolean = props.boolean;
  const unit = props.unit ? props.unit : "";

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
            return unit + context.parsed.y;
          },
        },
      },
    },
    scales: {
      y: {
        min: 0,
        max: boolean ? max : 160,
        ticks: {
          font :{
              size: 12
          },
          display: props.boolean,
          color: "#000000",
          stepSize: boolean ? 1 : 20
        },
        grid: {
          lineWidth: 5,
          tickLength: 0,
          color: props.color,
          z: 10,
          drawBorder: props.boolean,
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
          lineWidth: 5,
          tickLength: 0,
          color: props.color,
          z: 10,
          drawBorder: false,
        },
      },
    },
  };

  return (
    <div id={props.name}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
