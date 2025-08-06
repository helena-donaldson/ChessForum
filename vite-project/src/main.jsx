import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Layout from './routes/Layout'
// import Gallery from './components/Gallery'
import CreatePost from './pages/CreatePost.jsx'
import Home from './pages/Home.jsx'
import EditPost from './pages/EditPost.jsx'
import ViewPost from './pages/ViewPost.jsx'
import DailyPuzzle from './pages/DailyPuzzle.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
           <Route path="/Create" element={<CreatePost />} />
           <Route path="/Home" element={<Home />} />
           <Route path="/editPost/:index" element={<EditPost />} />
           <Route path="/viewPost/:index" element={<ViewPost />} />
           <Route path="/DailyPuzzle" element={<DailyPuzzle />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
