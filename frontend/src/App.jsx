
import Footer from './Component/Footer/Footer'
import Header from './Component/Header/Header'
import Home from './Component/Home/Home'
import Homee from './Component/Landing/Home2'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
function App() {
  return (
    <Router>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/2' element={<Homee />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
