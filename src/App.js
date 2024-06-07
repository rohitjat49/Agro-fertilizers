// import logo from './logo.svg';
// import './App.css';
// import CategoriesCardComponent from './Component/CategoriesCardComponent';
// import AllCategoriesCard from './Component/AllCategoriesCard';
// import CategoriesCardDetails from './Component/CategoriesCardDetails';
// import PopularProducts from './Component/PopularProducts';
// import VideoComponent from './Component/VideoComponent';
// import ImageComponent from './Component/ImageComponent';

// function App() {
//   return (
//     <>
//     <CategoriesCardComponent/>
//     <AllCategoriesCard/>
//     <CategoriesCardDetails/>
//     <PopularProducts/>
//     <VideoComponent/>
//     <ImageComponent/>
//     </>
//   );
// }

// export default App;

import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CategoriesCardComponent from "./Component/CategoriesCardComponent";
import AllCategoriesCard from "./Component/AllCategoriesCard";
import CategoriesCardDetails from "./Component/CategoriesCardDetails";
import HomepageComponent from "./Component/HomepageComponent";
import Dashboad from "./Component/Dashboad";
const App = () => {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<HomepageComponent />} />
        <Route path="/category/:title" element={<AllCategoriesCard />} />
        <Route path="/productDetails" element={<CategoriesCardDetails />} />
      </Routes>
    </Router>
   
  );
};

export default App;

