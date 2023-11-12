import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import PageCommand from './page/Page-Command'
import PageInfo from './page/Page-info'
import PageNews from './page/Page-news'
import MainPage from './page/MainPage'
import Pageshedule from './page/Page-shedule'
import Pagepodcast from './page/Page-podcast'
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/Page-command' element={<PageCommand />} />
        <Route path='/Page-info' element={<PageInfo />} />
        <Route path='/Page-news' element={<PageNews/>} />
        <Route path='/Page-shedule' element={<Pageshedule/>} />
        <Route path='/Page-podcast'  element={<Pagepodcast/>} />
        <Route path='/MainPage'  element={<MainPage/>} />
      </Routes>
      <Footer />
    
    </>
  )
}

export default App;
