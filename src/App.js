import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Row } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MySide from './component/MySide';
import MainPage from './component/MainPage';
import MyPlayer from './component/MyPlayer';
import Artists from './component/Artists';

import Albums from './component/Albums';

function App() {
  return (
    <div className="container-fluid">
      <Row>
        <MySide />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainPage />}></Route>
            <Route path='/Artists' element={<Artists />}></Route>
            <Route path='/Albums' element={<Albums />}></Route>
          </Routes>
        </BrowserRouter>
        <MyPlayer />
      </Row>
    </div>
  );
}

export default App;
