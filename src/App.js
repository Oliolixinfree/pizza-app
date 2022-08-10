import React from 'react';
import Header from './components/Header';
import './scss/app.scss';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './redux/slices/filterSlice';

export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  const filter = useSelector((state) => state.filter.value);
  const dispatch = useDispatch();

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
