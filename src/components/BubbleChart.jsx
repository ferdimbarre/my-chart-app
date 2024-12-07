import ChartComponent from './ChartComponent';

const BubbleChart = ({ data }) => {
    const maxSales = Math.max(...data.sales); //getting the sizes to be able to scale 
    const minSales = Math.min(...data.sales);
    const bubbleSize = (sale) => {
        let minSize = 7;  // min size
       let maxSize = 25; // Max size
        return (
          minSize +
          ((sale - minSales) / (maxSales - minSales)) * (maxSize - minSize)
        );
      };
    const bubbleChartData = {
     
      datasets: [
        {
            label: 'Expenses vs Profits',
            data: data.expenses.map((expense, index) => ({
              x: expense,
              y: data.profits[index],
              r: bubbleSize(data.sales[index]),
            })),
            backgroundColor: 'rgba(255, 105, 180, 0.2)', // will display in pink
            borderColor: 'rgba(255, 105, 180, 1)',
            borderWidth: 1,
        }
      ],
    };
    const bubbleChartOptions = {
        scales:  {
x: {
    title: {
    display: true,
   text: 'Expenses',
              },
              beginAtZero: false,
            },
y: {
   title: {
    display: true,
    text: 'Profits',
              },
              beginAtZero: false,
            },
          },
        };

      return <ChartComponent type="bubble" data={bubbleChartData} options={bubbleChartOptions} />;
    };

 export default BubbleChart

 // need to adjust so it doesnt begin at zero, change color and get a sales tag 