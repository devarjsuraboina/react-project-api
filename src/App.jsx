import { createContext, useEffect, useState } from 'react';
import './App.css';
import axios from "axios"
import Kids from './Pages/Kids/Kids';
import Home from './Pages/Home/Home';
import Mens from './Pages/Mens/Mens';
import Women from './Pages/Women/Women';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export const Data = createContext()

function App() {

  const url = "https://dummyserver-x386.onrender.com/products";
  const cardsUrl = "https://dummyserver-x386.onrender.com/cards"
  const logoUrl = "https://dummyserver-x386.onrender.com/logos";
  const trendUrl="https://dummyserver-x386.onrender.com/trends"



  const [posts, setposts] = useState([])
  const [cards, setCards] = useState([])
  const [logos, setLogos] = useState([])
  const [trends,setTrends]=useState([])

  const getPosts = async () => {
    try {
      const response = await axios.get(url)
      const logos = await axios.get(logoUrl)
      const cards = await axios.get(cardsUrl)
      const trends=await axios.get(trendUrl)
      setTrends(trends.data)
      setCards(cards.data)
      setposts(response.data)
      setLogos(logos.data)
    } catch (error) {
      console.log(error)

    }
  }

  useEffect(() => {
    getPosts()
  }, [])


  return (
    <>
      <Data.Provider value={{ posts, logos,cards,trends}}>
        <Router>
          <Routes>
            <Route path='/' element={<Home />}> </Route>
            <Route path='/women' element={<Women />}> </Route>
            <Route path='/mens' element={<Mens />}> </Route>
            <Route path='/kids' element={<Kids />}> </Route>
          </Routes>
        </Router>
      </Data.Provider>


    </>
  )
}

export default App
