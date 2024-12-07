import ChartComponent from './ChartComponent';

const ScatterPlot = ({ data }) => {
    const scatterPlotData = {
     
      datasets: [
        {
            label: 'Expenses vs Profits',
            data: data.expenses.map((expense, index) => ({
              x: expense,
              y: data.profits[index],
            })),
            backgroundColor: 'rgba(54, 162, 235, 0.2)', // will display in blue
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

      return <ChartComponent type="scatter" data={scatterPlotData} options={scatterPlotOptions} />;
    };

 export default ScatterPlot

 //need to adjust so doesnt begin at zero and adjust the scale a bit 