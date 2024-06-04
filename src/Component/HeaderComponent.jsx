// import React, { useState } from 'react';

// const HeaderComponent = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <div className="bg-green-100 shadow h-32 d-flex align-items-center justify-content-between px-4 position-relative">
//             <div className="logo">
//                 <img src="/img/B5F803E7-578E-4F8E-AE36-C1AFB8616B54.png" alt='img' className="h-36" width={100}/>
//             </div>
//             <div className="d-none d-md-flex text-base md:text-lg align-items-center justify-content-center">
//                 <span className="nav-item me-3">Home</span>
//                 <span className="nav-item me-3">Vlogs</span>
//                 <span className="nav-item me-3">About Us</span>
//                 <span className="nav-item me-3">Contact Us</span>
//                 <span className="nav-item me-3">Videos</span>
//                 <span className="nav-item">Information</span>
//             </div>
//             <div className="d-md-none">
//                 <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//                     </svg>
//                 </button>
//             </div>
//             {isOpen && (
//                 <div className="dropdown-menu position-absolute top-100 left-0 w-100 bg-green-100 d-flex flex-column align-items-center space-y-4 py-4">
//                     <span className="nav-item">Home</span>
//                     <span className="nav-item">Vlogs</span>
//                     <span className="nav-item">About Us</span>
//                     <span className="nav-item">Contact Us</span>
//                     <span className="nav-item">Videos</span>
//                     <span className="nav-item">Information</span>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default HeaderComponent;

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
//   const { isLoggedIn, logout } = useAuth(); // Destructure the logout function from useAuth
  const navigate = useNavigate();
  

//   const LogOut = async () => {
//     if (window.confirm("Confirm You Want to Log Out")) {
//       await localStorage.removeItem("token");
//       logout();
//       navigate("/");
//     }
//   };
//   useEffect(()=>{
//        console.log("Hello")
//   },[isLoggedIn])
 
  return (
    <div className="container-xxl position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5  py-lg-0">
        <img src="/img/B5F803E7-578E-4F8E-AE36-C1AFB8616B54.png" height="140" width="140" alt="Logo"/> 
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="fa fa-bars"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarCollapse">
         
          <>
            <div className="navbar-nav ms-auto py-0 pe-4">
            <Link to="/" className="nav-item nav-link active">Home</Link>
            <Link to="/about" className="nav-item nav-link">About</Link>
            <Link to="/service" className="nav-item nav-link">Service</Link>
            <Link to="/product" className="nav-item nav-link">Product</Link>
            <Link to="/contact" className="nav-item nav-link">Contact</Link>
          </div>
            <div className="nav-item dropdown">
              <Link to="/table" className="nav-link dropdown-toggle btn btn-success py-2 px-4 text-white" data-bs-toggle="dropdown">AdminPanel</Link>
              <div className="dropdown-menu m-0">
                <Link to="/" className="dropdown-item">Inquiry List</Link>
                
                <Link to="/" className="dropdown-item">Add Product</Link>
                <Link to="/" className="dropdown-item">Product List</Link>
                <Link style={{marginLeft:'14px'}} className="btn btn-success mt-2 fw-bold" >Logout</Link>
              </div>
             
            </div>
           </>
          {/* ) : (<>
           
            <div className="navbar-nav ms-auto py-0 pe-4">
             <Link to="/" className="nav-item nav-link active">Home</Link>
             <Link to="/about" className="nav-item nav-link">About</Link>
             <Link to="/service" className="nav-item nav-link">Service</Link>
             <Link to="/product" className="nav-item nav-link">Product</Link>
             <Link to="/contact" className="nav-item nav-link">Contact</Link>
           </div>
           <Link to="/contact" className='btn btn-primary py-2 px-4'>Inquiry</Link>
            </> )} */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

