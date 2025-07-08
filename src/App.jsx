import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './pages/Home';
import About from './pages/about';
import Vans from './pages/vans';
import Van from './pages/vanDetails';
import Layout from './component/layout';
import Dashboard from './pages/hostPages/dashboard.jsx';
import Income from './pages/hostPages/income.jsx';
import Reviews from './pages/hostPages/reviews.jsx';
import LayoutHost from './pages/hostPages/layoutHost.jsx';
import VanHost from './pages/hostPages/van.jsx';
import VanHD from './pages/hostPages/Van/vanHostDeatils.jsx';
import Details from './pages/hostPages/Van/Details.jsx';
import Photos from './pages/hostPages/Van/Photos.jsx';
import Pricing from './pages/hostPages/Van/Pricing.jsx';
import  "./server"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="vans" element={<Vans/>}></Route>
          <Route path="vans/:id" element={<Van />}></Route>
          {/* <Route path="vans">
            <Route index element={<Vans />} />
            <Route path=":id" element={<VanDetail />} />
          </Route>  */}
          <Route path="host" element={<LayoutHost />}>
            <Route index  element={<Dashboard />}></Route>
            <Route path="income" element={<Income />}></Route>
            <Route path="vansHost" element={<VanHost />}></Route>
            <Route path="vansHost/:id" element={<VanHD />}>
              <Route index element={<Details/>}></Route>
              <Route path="pricing" element={<Pricing/>}></Route>
              <Route path="photo" element={<Photos/>}></Route>
            </Route>
            <Route path="review" element={<Reviews />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
