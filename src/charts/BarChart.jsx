import ChartComponent from 'ChartComponent.jsx'
const BarChart = ({ data }) => {
    const barChartData = {
      labels: data.months,
      datasets: [
        {
          label: 'Monthly Sales',
          data: data.sales,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };
    const barChartOptions = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };

      return <ChartComponent type="bar" data={barChartData} options={barChartOptions} />;
    };
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        fetch('/data.json')
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