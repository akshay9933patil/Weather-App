
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/layouts/Navbar';
import './static/style.css'
import Weather from './components/pages/Weather';



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='weather/' element={<Weather/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
