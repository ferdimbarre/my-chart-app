
import React, { useState, useEffect } from 'react';
import BarChart from './charts/BarChart';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';

function App() {    
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
      fetch('/financial_data.json')
        .then((response) => response.json())
        .then((data) => setChartData(data));
    }, []);

    if (!chartData) {
      return <div>Loading...</div>;
    }

    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Dynamic Charts with React and Chart.js</h1>
        <BarChart data={chartData} />
        <LineChart data={chartData} />
        <ScatterChart data={chartData} />
        <BubbleChart data={chartData} />
      </div>
    );
}

export default App
