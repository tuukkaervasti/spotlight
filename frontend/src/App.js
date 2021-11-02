import akeem from "./images/ak.jpg";
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Grid from "./Grid";

/* function App() {
  return (
    <div className="bg">
        <img src={akeem} className="akeem" alt="logo" />
    </div>
  );
} */

const arrOfObj = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

function App() {
  return(
    <div className="container">
      <Grid arrOfObj={arrOfObj}/>
    </div>
  )
}

export default App;
