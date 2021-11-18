
import './App.css';
import { Link, Routes, Route } from "react-router-dom";
import ImageFeed from "./Day48/ImageFeed";

function App() {
  return (
    <div className="App">
      <Link to="/day48">Day 48</Link>
      <Routes>
        <Route path="/" element={<h1>50 Projects - React</h1>} />
        <Route path="/day48" element={<ImageFeed imageCount={1} />} />
      </Routes>
    </div>
  );
}

export default App;
