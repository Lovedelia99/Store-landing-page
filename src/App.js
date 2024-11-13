import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Store from "./Components/Product";
import About from "./Components/About";
import Registration from "./Components/Registration";
import Cart from "./Components/Cart";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <br />
        {/* creating route for navbar links */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<Store />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/reg" element={<Registration />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
