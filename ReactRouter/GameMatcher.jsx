import React, { Component } from "react";
import NumBaseball from "../NumBaseball/NumBaseball_class";
import Rsp from "../rsp/Rsp_class";
import Lotto from "../Lotto/Lotto_class";
import { useLocation, useNavigate, Routes, Route } from "react-router";

class GameMatcher extends Component {
  render() {
    const location = useLocation();
    const navigate = useNavigate();
    let urlSearchParams = new URLSearchParams(
      this.props.location.search.slice(1)
    );
    console.log(urlSearchParams.get("hi"));
    console.log(urlSearchParams.get("bi"));
    return (
      <Routes>
        <Route path="numbaseball" element={<NumBaseball />} />
        <Route path="rsp" element={<Rsp />} />
        <Route path="lotto" element={<Lotto />} />
        <Route path="*" element={<div>일치하는 게임 없음</div>} />
      </Routes>
    );
  }
}
export default GameMatcher;
