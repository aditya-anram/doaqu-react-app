import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Details from './pages/details/Details';
import Search from './pages/search/Search';

function App() {
    return (
        <div>
            <div className="title">DoaQu</div>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="details/:id" element={<Details/>}></Route>
                <Route path="search/:kata" element={<Search/>}></Route>
            </Routes>
        </div>
    )   
}

export default App
