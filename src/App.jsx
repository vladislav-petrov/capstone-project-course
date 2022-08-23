import { Routes, Route } from 'react-router-dom';
import Main from './routes/Main/Main';
import Home from './routes/Home/Home';
import MainShop from './routes/MainShop/MainShop';
import Shop from './routes/Shop/Shop';
import Hats from './routes/Shop/Hats/Hats';
import Authentication from './routes/Authentication/Authentication';
import Checkout from './routes/Checkout/Checkout';

const App = function() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />

          <Route path="shop" element={<MainShop />}>
            <Route index element={<Shop />} />
            <Route path="hats" element={<Hats />} />
          </Route>

          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
