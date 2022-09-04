import './index.css';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Review from './components/Review';
function App() {
  return (
    <>
    <Navbar />
    <Routes>
      {/* <Route exact path="/" element={ <Home/> }/>
      <Route exact path="/about" element={<About/>}/> */}
      <Route exact path="/review" element={<Review />} />
    </Routes>
    </>
  );
}

export default App;
