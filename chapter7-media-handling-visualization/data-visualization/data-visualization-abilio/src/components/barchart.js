import { Bar } from "react-chartjs-2";

const barchart = (props) => {
  return (
    <div>
      <Bar
        data={props.chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Cryptocurrency prices"
            },
            legend: {
              display: true,
              position: "bottom"
            }
          }
        }}
      />
    </div>
  );
};

export default barchart;