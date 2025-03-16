import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TeamProvider } from "./components/context/TeamContext";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import TeamRanking from "./pages/TeamRanking";
import PlayerStats from "./pages/PlayerStats";

function App() {
  return (
    <>
      <BrowserRouter>
        <TeamProvider>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/teamRank" element={<TeamRanking />} />
            <Route path="/playerStats" element={<PlayerStats />} />
          </Routes>
        </TeamProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
