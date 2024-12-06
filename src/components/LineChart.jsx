import ChartComponent from './ChartComponent';

const LineChart = ({ data }) => {
    const lineChartData = {
      labels: data.months,
      datasets: [
        {
          label: 'Monthly Profits',
          data: data.profits,
          backgroundColor: 'rgba(83, 20, 141, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };
    const lineChartOptions = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };

      return <ChartComponent type="line" data={lineChartData} options={lineChartOptions} />;
    };

 export default LineChart