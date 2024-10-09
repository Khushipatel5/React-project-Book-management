import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/home';
import About from './pages/about';
import Book from './pages/book';
import NewBook from './pages/newbook';
import DetailBook from './pages/detailbook';
import EditBook from './pages/editbook';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/book" element={<Book />} />
          <Route path="/book/:id" element={<DetailBook />} />
          <Route path="/book/edit/:id" element={<EditBook />} />
          <Route path="/newbook" element={<NewBook />} />
        </Route>
      </Routes>
    </BrowserRouter>

  </>

);


