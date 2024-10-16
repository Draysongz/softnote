import { Box } from "@chakra-ui/react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import DailyChallenge from "./pages/DailyChallenge";
import DailyTask from "./pages/DailyTask";
import SocialTask from "./pages/SocialTask";
import Loading from '../component/Loading'
import DailyReward from '../Pages/DailyReward'
import Friends from '../Pages/Friends'

function App() {

  return (
    <Box width={'100vw'} overflowX={'hidden'} fontFamily={'sans-serif'}
    >
      <Router>
          <Routes>
            <Route index element={<Homepage />}  />
            <Route path="/challenges" element={<DailyChallenge />}/>
            <Route path="/daily" element={<DailyTask />}/>
            <Route path="/socials" element={<SocialTask />} />
            <Route path='/loading' element={ <Loading />} />
        <Route path='/daily' element={<DailyReward />} />
        <Route path='/referral' element={<Friends />} />
          </Routes>
        </Router>
    </Box>
  )
}

export default App
