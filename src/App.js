import logo from './logo.svg';
import './App.css';
import { Nav } from './components/Nav';
import { Banner } from './components/Banner';
import { Movies } from './components/Movies';
import PaginationOutlined from './components/PaginationOutlined';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Fav } from './components/Fav';

function App() {
  return (
    <>
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path='/' element={
          <>
            <Banner/>
            <Movies/>
            <PaginationOutlined/>
          </>
        }></Route>
        <Route path='/fav' element={
          <Fav/>
        }></Route>
      </Routes>
    </BrowserRouter>
    
    
    </>
  );
}

export default App;
