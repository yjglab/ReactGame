import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  HashRouter,
  Link,
} from "react-router-dom";
import NumBaseball from "../NumBaseball/NumBaseball_class";
import Rsp from "../rsp/Rsp_class";
import Lotto from "../Lotto/Lotto_class";

const Games = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/numBaseball">숫자야구</Link>
        &nbsp;
        <Link to="/rsp">RSP</Link>
        &nbsp;
        <Link to="/lotto">로또</Link>
      </div>
      <div>
        <Routes>
          <Route path="/numbaseball" element={<NumBaseball />} />
          <Route path="/rsp" element={<Rsp />} />
          <Route path="/lotto" element={<Lotto />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default Games;
