import ChartComponent from './ChartComponent';
//create a bar chart displaying monthly sales

const BarChart = ({ data }) => {
    const barChartData = {
      labels: data.months,
      datasets: [
        {
          label: 'Monthly Sales',
          data: data.sales,// sales in the axis
          backgroundColor: 'rgba(128, 0, 128, 0.2)', //will display purple
          borderColor: 'rgba(128, 0, 128, 1)',
          borderWidth: 1,
        },
      ],
    };
    const barChartOptions = {
        scales: {
          y: {
            beginAtZero: true, //scaling
          },
        },
      };

      return <ChartComponent type="bar" data={barChartData} options={barChartOptions} />;
    };

 export default BarChart 