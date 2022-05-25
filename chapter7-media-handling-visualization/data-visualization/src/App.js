import { useState, useEffect } from "react";
import Chart from "./components/Chart";

function App() {
  useEffect(() => {
    const fetchPrices = async () => {
      const res = await fetch("https://api.coincap.io/v2/assets/?limit=5")
      const data = await res.json()
      console.log(data, 'data awal')
      setChartData({
        labels: data.data.map((crypto) => crypto.name),
        // labels: "String Kosong",
        datasets: [
          {
            label: "Price in USD",
            data: data.data.map((crypto) => crypto.priceUsd),
            // data: [1, 2, 3, 4, 5],
            backgroundColor: [
              "#ffbb11",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0"
            ]
          }
        ]
      });
    };
    fetchPrices()
  }, []);

  const [chartData, setChartData] = useState({})

  console.log(chartData, 'setelah di map')

  return (
    <div className="App">
      <Chart chartData={chartData} />
      {/* <Chart chartData={[1, 2, 3, 4, 5]} /> */}
     </div>
  );
}

export default App;
