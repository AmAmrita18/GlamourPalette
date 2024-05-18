import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Layout from './Layout'
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Properties from './components/PropertiesPage/Properties';
import Contacts from './components/Contacts/Contacts';
import MainBlogPage from './components/Blog/MainBlogPage';
import AllProperties from './components/PropertiesPage/AllProperties';

const Root = () => (
  <Router>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='mainproperty' element={<Properties/>} />
        <Route path='blog' element={<Blog/>} />
        <Route path='contacts' element={<Contacts/>} />
        <Route path='mainblog' element={<MainBlogPage/>} />
        <Route path='properties' element={<AllProperties/>} />
        <Route path='property/:id' element={<Properties/>} />
      </Route>
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Root />
)