import Footer from './Component/Footer/Footer'
import Header from './Component/Header/Header'
import Home from './Component/Home/Home'
import Homee from './Component/Landing/Home2'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import video from './assets/vid.mp4'

function App() {
  const [isVideoFinished, setIsVideoFinished] = useState(false);
  return (
    <>
      {
        isVideoFinished ? (
          <Router>
            <Header />
            <Routes>
              {/* <Route path='/' element={<Home />} /> */}
              <Route path='/' element={<Homee />} />
            </Routes>
            <Footer />
          </Router>
        )
          :
          (
            <video
              loop={false}
              muted
              autoPlay
              src={video}
              type="video/mp4"
              className="w-full h-full"
              onEnded={() => setIsVideoFinished(true)}
            />
          )
      }
    </>
  )
}

export default App
