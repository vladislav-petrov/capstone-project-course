import { Routes, Route } from 'react-router-dom';
import Main from './routes/Main/Main';
import Home from './routes/Home/Home';
import Shop from './routes/Shop/Shop';

const App = function() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
