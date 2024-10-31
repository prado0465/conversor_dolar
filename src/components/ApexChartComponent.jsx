// import React, { useEffect, useState } from 'react';
// import Chart from 'react-apexcharts';
// import './styles.css';

// const TrafficSourcesChart = () => {
//   const [dataPoints, setDataPoints] = useState([]);
//   const [dates, setDates] = useState([]);

//   useEffect(() => {
//     const fetchExchangeRates = async () => {
//       const endDate = new Date();
//       const startDate = new Date();
//       startDate.setDate(endDate.getDate() - 30);

//       const formatDate = (date) => {
//         return date.toISOString().split('T')[0].replace(/-/g, '');
//       };

//       const start_date = formatDate(startDate);
//       const end_date = formatDate(endDate);

//       try {
//         const response = await fetch(
//           `https://economia.awesomeapi.com.br/json/daily/USD-BRL/?start_date=${start_date}&end_date=${end_date}&limit=30`
//         );
//         const data = await response.json();

        
//         console.log(data);

//         const sortedData = data.sort((a, b) => parseInt(a.timestamp) - parseInt(b.timestamp));
//         setDataPoints(sortedData.map(item => parseFloat(item.bid)));
//         setDates(sortedData.map(item => new Date(parseInt(item.timestamp) * 1000).toLocaleDateString()));
//       } catch (error) {
//         console.error("Erro ao buscar os dados:", error);
//       }
//     };

//     fetchExchangeRates();
//   }, []);

//   const options = {
//     series: [
//       {
//         name: "Taxa de Câmbio USD/BRL",
//         type: 'line',
//         data: dataPoints,
//       }
//     ],
//     chart: {
//       height: 350,
//       type: 'line',
//     },
//     stroke: {
//       width: [4],
//     },
//     title: {
//       text: `Taxas de Câmbio dos Últimos 30 Dias (USD/BRL)`,
//     },
//     dataLabels: {
//       enabled: true,
//     },
//     xaxis: { 
//       categories: dates, 
//     },
//     yaxis: {
//       title: {
//         text: "Taxa de Câmbio (USD/BRL)",
//       },
//     },
//   };

//   return (
//     <div>
//       <Chart
//         options={options}
//         series={options.series}
//         type="line" 
//         height={380}
//       />
//     </div>
//   );
// };

// export default TrafficSourcesChart;
