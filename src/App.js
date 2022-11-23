import "./App.css";
import Login from "./Components/Login";
import { NavBar } from "./Components/NavBar";
import Register from "./Components/Register";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GiftExchange from "./Components/GiftExchange";
import GiftExchange2 from "./Components/GiftExchange2";
import GiftExchange3 from "./Components/GiftExchange3";
import GiftExchange4 from "./Components/GiftExchange4";
import GiftFinder from "./Components/GiftFinder";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="giftexchange" element={<GiftExchange />} />
            <Route path="giftexchange2" element={<GiftExchange2 />} />
            <Route path="giftexchange3" element={<GiftExchange3 />} />
            <Route path="giftexchange4" element={<GiftExchange4 />} />
            <Route path="giftfinder" element={<GiftFinder />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
