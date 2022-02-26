import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  HashRouter,
  Link,
} from "react-router-dom";

import GameMatcher from "./GameMatcher";

const Games = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/game/numBaseball">숫자야구</Link>
        &nbsp;
        <Link to="/game/rsp">RSP</Link>
        &nbsp;
        <Link to="/game/lotto">로또</Link>
        &nbsp;
        <Link to="/game/index">게임 매쳐</Link>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<GameMatcher />} />
          <Route path="/game/:name" element={<GameMatcher />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default Games;
