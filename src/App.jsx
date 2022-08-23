import { Routes, Route } from 'react-router-dom';
import Main from './routes/Main/Main';
import Home from './routes/Home/Home';
import MainShop from './routes/MainShop/MainShop';
import Shop from './routes/Shop/Shop';
import ShopCategory from './routes/Shop/ShopCategory/ShopCategory';
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
            <Route path="hats" element={<ShopCategory category="hats" />} />
            <Route path="jackets" element={<ShopCategory category="jackets" />} />
            <Route path="mens" element={<ShopCategory category="mens" />} />
            <Route path="sneakers" element={<ShopCategory category="sneakers" />} />
            <Route path="womens" element={<ShopCategory category="womens" />} />
          </Route>

          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
