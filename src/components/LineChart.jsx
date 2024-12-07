import ChartComponent from './ChartComponent';
//create a line chart displaying monthly profits

const LineChart = ({ data }) => {
    const lineChartData = {
      labels: data.months,
      datasets: [
        {
          label: 'Monthly Profits',
          data: data.profits, //displays profits in the axis
          backgroundColor: 'rgba(83, 20, 141, 0.2)', //displays aquamarine
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };
    const lineChartOptions = {
        scales: {
          y: {
            beginAtZero: true, //scaling
          },
        },
      };

      return <ChartComponent type="line" data={lineChartData} options={lineChartOptions} />;
    };

 export default LineChart

 //change the color 