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
        <BrowserRouter>
        <MySide />
          <Routes>
            <Route path='/' element={<MainPage />}/>
            <Route path='/Artists/:id' element={<Artists />} />
            <Route path='/Albums/:id' element={<Albums />}/>
          </Routes>
        <MyPlayer />
        </BrowserRouter>
      </Row>
    </div>
  );
}

export default App;
