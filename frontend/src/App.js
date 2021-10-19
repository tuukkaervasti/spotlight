import akeem from "./images/ak.jpg";
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="bg">
        <img src={akeem} className="akeem" alt="logo" />
    </div>
  );
}

export default App;
