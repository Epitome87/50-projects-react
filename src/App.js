
import './App.css';
import { Link, Routes, Route } from "react-router-dom";
import ImageFeed from "./Day48/ImageFeed";
import BlurryLoading from "./Day5/BlurryLoading";
import ExpandingCards from './Day1/ExpandingCards';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <Link to ="/">Home</Link>
        <Link to="day1">Day 1</Link>
        <Link to="day5">Day 5</Link>
        <Link to="/day48">Day 48</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1>50 Projects - React</h1>} />
        <Route path="day1" element={<ExpandingCards />} />
        <Route path="day5" element={<BlurryLoading /> } />
        <Route path="/day48" element={<ImageFeed imageCount={1} />} />
      </Routes>
    </div>
  );
}

export default App;
