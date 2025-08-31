import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Main from './components/main/Main';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Shop from './components/shop/Shop'
import Login from './components/login/Login';
import Register from './components/register/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
