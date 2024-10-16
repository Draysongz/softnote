
import Loading from '../component/Loading'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import DailyReward from '../Pages/DailyReward'


import './App.css'

function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/loading' element={ <Loading />} />
        <Route path='/daily' element={<DailyReward />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
