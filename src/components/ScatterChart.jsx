import ChartComponent from './ChartComponent';

const ScatterPlot = ({ data }) => {
    const scatterPlotData = {
     
      datasets: [
        {
          label: 'Expenses',
          data: data.expenses.map((expense, index) => ({
            x: expense,
            y: data.profits[index],
          })),
          backgroundColor: 'rgba(255, 99, 132, 0.2)', //will make expenses appear in pink
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        }, {
            label: 'Profits',
            data: data.expenses.map((expense, index) => ({
                x: expense,
                y: data.profits[index],
              })), 
            backgroundColor: 'rgba(54, 162, 235, 0.2)', //will make profits appear in blue 
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
        }
      ],
    };
    const scatterPlotOptions = {
        scales:  {
x: {
    title: {
    display: true,
   text: 'Expenses',
              },
              beginAtZero: true,
            },
y: {
   title: {
    display: true,
    text: 'Profits',
              },
              beginAtZero: true,
            },
          },
        };

      return <ChartComponent type="scatter" data={scatterPlotData} options={scatterPlotOptions} />;
    };

 export default ScatterPlot