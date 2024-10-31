import React from 'react';
import Chart from 'react-apexcharts';
import './MyChartComponent.css'; 

const MyChartComponent = () => {
  const options = {
    chart: {
      type: 'line',
      height: 500, 
    },
    title: {
      text: 'Meu Gráfico Personalizado',
    },
    series: [
      {
        name: 'Dados',
        data: [10, 20, 30, 40, 50],
      },
    ],
  };

  return (
    <div className="chart-container">
      <Chart options={options} series={options.series} type="line" height={500} />
    </div>
  );
};

export default MyChartComponent;
