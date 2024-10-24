import { Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import DailyChallenge from "./pages/DailyChallenge";
import DailyTask from "./pages/DailyTask";
import SocialTask from "./pages/SocialTask";
import Loading from "../component/Loading";
import DailyReward from "./pages/DailyReward";
import Friends from "./pages/Friends";
import Achievements from "./pages/Achievements";
import Community from "./pages/Community";
import Upgrades from "./pages/Upgrade";
import Play2Earn from "./pages/Play2Earn";
import Trivia from "./pages/Trivia";
import Roulette from "./pages/Roulette";
import Jigsaw from "./pages/JigSaw";
import Badges from "./pages/Badges";
import { useEffect, useState } from "react";
import WebApp from "@twa-dev/sdk";
import { useLocation } from "react-router-dom";
import Puzzle from "./pages/Puzzle";
import { useUserLogin } from "./hooks/useAuth";


function BackButtonHandler() {
  const location = useLocation(); // Use React Router's useLocation to track route changes

  useEffect(() => {
    // Initialize the BackButton from the TWA SDK
    WebApp.expand();
    const backButton = WebApp.BackButton;

    // Check the current route and show or hide the back button accordingly
    if (location.pathname === "/") {
      backButton.hide(); // Hide back button on homepage
    } else {
      backButton.show(); // Show back button on other pages
    }

    // Handle back button click event
    backButton.onClick(() => {
      window.history.back(); // Navigate back in browser history
    });

    // Clean up the event listener when the component is unmounted
    return () => {
      backButton.hide(); // Hide the back button when the app unmounts
    };
  }, [location]); // Re-run effect when the location (route) changes

  return null; // This component doesn't need to render anything
}

function App() {
  const [telegramInitData, setTelegramInitData] = useState<string>("");
  const queryString = window.location.search; // Get the query string
  const urlParams = new URLSearchParams(queryString);
  const referralId = urlParams.get("referralCode")!;

 useEffect(() => {
   WebApp.expand();
   const initData = WebApp.initData;
   setTelegramInitData(initData);
 }, []);

 const { userData } = useUserLogin(telegramInitData, referralId);
 console.log("userdata from app.tx", userData);

  if (!userData) {
    return <Loading />;
  }


  return (
    
        <Routes>
          <Route index element={<Homepage userData={userData}/>} />
          <Route path="/challenges" element={<DailyChallenge />} />
          <Route path="/dailytask" element={<DailyTask />} />
          <Route path="/socials" element={<SocialTask />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/daily" element={<DailyReward />} />
          <Route path="/referral" element={<Friends />} />
          <Route path="/games" element={<Play2Earn />}/>
          <Route path="/trivia" element={<Trivia />}/>
          <Route path="/roulette" element={<Roulette />}/>
          <Route path="/jigsaw" element={<Jigsaw />} />
          <Route path="/puzzle" element={<Puzzle/>} />
          <Route path="/achievement" element={<Achievements />} />
          <Route path="/badges" element={<Badges />} />
          <Route path="/communities" element={<Community />}/>
          <Route path="/powerUps" element={<Upgrades />}/>
          <Route path="/communities" element={<Community />} />
        </Routes>
   
  );
}

export default function RootApp() {
  return (
    <Box width={"100vw"} overflowX={"hidden"} fontFamily={"sans-serif"}>
    <Router>
      <BackButtonHandler /> {/* This handles the back button logic */}
      <App />
    </Router>
    </Box>
  );
}
