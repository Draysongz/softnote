import { Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import DailyChallenge from "./pages/DailyChallenge";
import DailyTask from "./pages/DailyTask";
import SocialTask from "./pages/SocialTask";
import Loading from "../component/Loading";
import DailyReward from "../Pages/DailyReward";
import Friends from "./pages/Friends";
import Achievements from "./pages/Achievements";
import Community from "./pages/Community";
import Upgrades from "./pages/Upgrade";
import Play2Earn from "./pages/Play2Earn";
import Trivia from "./pages/Trivia";
import Roulette from "./pages/Roulette";
import Jigsaw from "./pages/JigSaw";
import Badges from "./pages/Badges";

function App() {
  return (
    <Box width={"100vw"} overflowX={"hidden"} fontFamily={"sans-serif"}>
      <Router>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/challenges" element={<DailyChallenge />} />
          <Route path="/daily" element={<DailyTask />} />
          <Route path="/socials" element={<SocialTask />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/daily" element={<DailyReward />} />
          <Route path="/referral" element={<Friends />} />
          <Route path="/games" element={<Play2Earn />}/>
          <Route path="/trivia" element={<Trivia />}/>
          <Route path="/roulette" element={<Roulette />}/>
          <Route path="/jigsaw" element={<Jigsaw />} />
          <Route path="/achievement" element={<Achievements />} />
          <Route path="/badges" element={<Badges />} />
          <Route path="/communities" element={<Community />}/>
          <Route path="/powerUps" element={<Upgrades />}/>
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
