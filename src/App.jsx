import { Routes, Route } from 'react-router-dom';
import Main from './routes/Main/Main';
import Home from './routes/Home/Home';
import Shop from './routes/Shop/Shop';
import Authentication from './routes/Authentication/Authentication';
import Checkout from './routes/Checkout/Checkout';

const App = function() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
