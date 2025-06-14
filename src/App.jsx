import "./App.css";
import { createBrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Nav />

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
