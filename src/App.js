import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from '../src/Components/home/Home/Home'
import Footer from './Components/Footer/Footer';
import Register from './Components/register/Register';
import Video from './Components/video/Video';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/video" element={<Video/>}/>
          <Route path="/" element={<Register/>}/>
        </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
