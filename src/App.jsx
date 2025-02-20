import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import TeamRanking from "./pages/TeamRanking";
import PlayerStats from "./pages/PlayerStats";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/teamRank" element={<TeamRanking />} />
          <Route path="/playerStats" element={<PlayerStats />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
