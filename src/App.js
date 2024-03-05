// import logo from './logo.svg';
import "./App.css";
import Affiliations from "./Components/Affiliations";
import AppNavbar from "./Components/AppNavbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Home />
      <Affiliations />
      <Footer />
    </div>
  );
}

export default App;
