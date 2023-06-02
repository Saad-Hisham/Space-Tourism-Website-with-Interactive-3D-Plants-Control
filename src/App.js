import { Container, Row, Col } from "react-bootstrap";
import Home from "./Home Components/Home";
import Destination from "./Destination components/Destination";
import Navbar from "./Home Components/Navbar";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Crew from "./crew components/Crew";
import Techs from "./techs/Techs"

function App() {
  return (
    <main className="App">


      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/destination" element={<Destination/>} />
      <Route exact path="/crew" element={<Crew/>} />
      <Route exact path="/Technologies" element={<Techs/>} />
    
      </Routes>
    </BrowserRouter>
    </main>
  );
}

export default App;
