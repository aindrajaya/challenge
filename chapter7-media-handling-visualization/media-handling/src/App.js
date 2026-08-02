// import AppDropzone from "./AppDropzone";

// import "./styles.css"
// import Video from "./Video";

// function App(){
//   return(
//     <div className="App">
//       {/* <AppDropzone /> */}
//       {/* <MovieList /> */}
//       <Video />
//     </div>
    
//   )
// }

// export default App
import { useEffect } from "react"

export default function App() {
  useEffect(() => {
    const fetchPrices = async () => {
      const res = await fetch("https://api.coincap.io/v2/assets/?limit=5")
      const data = await res.json()
      console.log(data)
    }
    fetchPrices()
  }, []);

  return (
    <div className="App">
      Hello Codesandbox 
    </div>
  );
}