import { Routes, Route } from 'react-router-dom';
import Main from './routes/Main/Main';
import Home from './routes/Home/Home';
import Shop from './routes/Shop/Shop';
import SignIn from './routes/SignIn/SignIn';

const App = function() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
