// import { useState } from 'react'
import './styles/pages.css'
import './styles/components.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import { BaseLevelBook } from './pages/BaseLevelBook'
import { AdvancedLevelBook } from './pages/AdvancedLevelBook'
import { HighLevelBook } from './pages/HighLevelBook'
import { StartPage } from './pages/StartPage'

export const App = () => {

  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<StartPage/>}/>
      <Route path="/baseLevelBook/:lessonId" element={<BaseLevelBook/>}/>
      <Route path="/advancedLevelBook/:lessonId" element={<AdvancedLevelBook/>}/>
      <Route path="/highLevelBook/:lessonId" element={<HighLevelBook/>}/>
     </Routes>
    </BrowserRouter>
  )
}

