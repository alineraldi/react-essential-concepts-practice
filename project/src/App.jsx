import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Counter from './components/Counter'
import BackgroundColorChanger from './components/BackgroundColorChanger'
import ToDoList from './components/ToDoList'
import Timer from './components/Timer'
import NameFilter from './components/NameFilter'
import SignUpForm from './components/SignUpForm'
import PostList from './components/PostList'
import ImageGallery from './components/ImageGallery'
import TimerIntervalAlert from './components/TimerIntervalAlert'
import Tabs from './components/Tabs'

function App() {

  return (
    <Router>
      <nav>
        <div>
          <button style={{ marginRight: '2rem', marginBottom: '2rem', background: 'transparent'}}><Link to="/"><img src="/icon-house.png" alt="Home" /></Link></button>
          </div>
          <div>
          <button class='main-btns' style={{ marginRight: '2rem', marginBottom: '2rem'}}><Link to="/counter">TSCOTP</Link></button>
          <button class='main-btns' style={{ marginRight: '2rem', marginBottom: '2rem' }}><Link to="/background-color-changer">Background Changer</Link></button>
          <button class='main-btns' style={{ marginRight: '2rem', marginBottom: '2rem' }}><Link to="/to-do-list">ToDo List</Link></button>
          <button class='main-btns' style={{ marginRight: '2rem', marginBottom: '2rem' }}><Link to="/timer">Time passing</Link></button>
          <button class='main-btns' style={{ marginRight: '2rem', marginBottom: '2rem' }}><Link to="/name-filter">Find someone</Link></button>
          <button class='main-btns' style={{ marginRight: '2rem', marginBottom: '2rem' }}><Link to="/signup">Sign Up</Link></button>
          <button class='main-btns' style={{ marginRight: '2rem', marginBottom: '2rem' }}><Link to="/post-list">Read random posts in latin</Link></button>
          <button class='main-btns' style={{ marginRight: '2rem', marginBottom: '2rem' }}><Link to="/image-gallery">Look at some birds</Link></button>
          <button class='main-btns' style={{ marginRight: '2rem', marginBottom: '2rem' }}><Link to="/timer-interval-alert">Set a time-bomb!</Link></button>
          <button class='main-btns' style={{ marginRight: '2rem', marginBottom: '2rem' }}><Link to="/tabs">Choose between two planets</Link></button>
          </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/background-color-changer" element={<BackgroundColorChanger />} />
        <Route path="/to-do-list" element={<ToDoList />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/name-filter" element={<NameFilter />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/post-list" element={<PostList />} />
        <Route path="/image-gallery" element={<ImageGallery />} />
        <Route path="/timer-interval-alert" element={<TimerIntervalAlert />} />
        <Route path="/tabs" element={<Tabs />} />
      </Routes>
    </Router>
  )
}

export default App
