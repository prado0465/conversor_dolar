import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js'; 
import './converter.css';

Chart.register(...registerables); 
function Converter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("BRL");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  const convertCurrency = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://economia.awesomeapi.com.br/json/last/${fromCurrency}-${toCurrency}`
      );
      const rate = response.data[`${fromCurrency}${toCurrency}`].bid;
      console.log("Taxa de câmbio:", rate);
      setConvertedAmount((amount * rate).toFixed(2));
    } catch (error) {
      console.error("Erro ao obter a taxa de câmbio:", error);
      setConvertedAmount(null);
    } finally {
      setLoading(false);
    }
  };

  const fetchHistoricalData = async () => {
    try {
      const response = await axios.get(
        `https://economia.awesomeapi.com.br/json/daily/${fromCurrency}-${toCurrency}/30`
      );

      if (Array.isArray(response.data)) {
        const dates = response.data.map(item =>
          new Date(item.timestamp * 1000).toLocaleDateString()
        );
        const rates = response.data.map(item => parseFloat(item.bid));

        setChartData({
          labels: dates.reverse(),
          datasets: [
            {
              label: `Taxa de Câmbio ${fromCurrency}/${toCurrency}`,
              data: rates.reverse(),
              fill: false,
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
            },
          ],
        });
      } else {
        console.error("Dados do histórico de câmbio não disponíveis.");
        setChartData({ labels: [], datasets: [] });
      }
    } catch (error) {
      console.error("Erro ao obter dados históricos:", error);
      setChartData({ labels: [], datasets: [] });
    }
  };

  useEffect(() => {
    convertCurrency();
    fetchHistoricalData();
  }, [fromCurrency, toCurrency, amount]);

  const getFlagUrl = (currency) => {
    const flags = {
      USD: "https://flagcdn.com/us.svg",
      BRL: "https://flagcdn.com/br.svg",
      EUR: "https://flagcdn.com/eu.svg",
      GBP: "https://flagcdn.com/gb.svg",
      ARS: "https://flagcdn.com/ar.svg",
      CAD: "https://flagcdn.com/ca.svg",
      AUD: "https://flagcdn.com/au.svg",
    };
    return flags[currency] || "";
  };

  return (
    <div className="converter">
      <div className="conversion-input">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="amount-input"
        />
        <div className="currency-selection">
          <img src={getFlagUrl(fromCurrency)} alt={`${fromCurrency} flag`} className="flag-icon" />
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="currency-dropdown"
          >
            <option value="USD">USD - Dólar</option>
            <option value="BRL">BRL - Real</option>
            <option value="EUR">EUR - Euro</option>
            <option value="GBP">GBP - Libra Esterlina</option>
            <option value="ARS">ARS - Peso Argentino</option>
            <option value="AUD">AUD - Dólar Australiano</option>
          </select>
        </div>
        <span>para</span>
        <div className="currency-selection">
          <img src={getFlagUrl(toCurrency)} alt={`${toCurrency} flag`} className="flag-icon" />
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="currency-dropdown"
          >
            <option value="BRL">BRL - Real</option>
            <option value="USD">USD - Dólar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="GBP">GBP - Libra Esterlina</option>
            <option value="ARS">ARS - Peso Argentino</option>
            <option value="AUD">AUD - Dólar Australiano</option>

          </select>
        </div>
        <button onClick={convertCurrency} disabled={loading} className="convert-button">
          {loading ? "Convertendo..." : "Converter"}
        </button>
      </div>
      {convertedAmount && (
        <div className="result">
          {amount} {fromCurrency} = {convertedAmount} {toCurrency}
          
        </div>
      )}
      <div className="chart-container">
        {chartData.labels.length > 0 && chartData.datasets.length > 0 ? (
          <Line data={chartData} />
        ) : (
          <div>Nenhum dado disponível para o gráfico.</div>
        )}
      </div>
    </div>
  );
}

export default Converter;
