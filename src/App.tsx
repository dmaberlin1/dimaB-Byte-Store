import React from 'react';
import './scss/App.scss';
import {Routes, Route} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import FullProduct from "./pages/FullProduct";
import UserPanel from "./pages/UserPanel";
import Home from "./pages/Home";

function App() {
  return (
          <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={''} element={<Home/>}></Route>
                <Route path={'product/:id'} element={<FullProduct/>}></Route>
                <Route path={'user-panel/wishlist'} element={<UserPanel activePage={'wishlist'}/>}></Route>
                {/*добавить в список желаний переход сразу на нужную вкладку*/}
            </Route>
          </Routes>

  );
}

export default App;
