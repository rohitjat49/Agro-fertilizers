import React from "react";
import { Link } from "react-router-dom";

const CategoriesCardComponent = () => {
  const categories = [
    {
      imageUrl: '/img/New Products.webp',
      title: 'New Products'
    },
    {
      imageUrl: '/img/growth.webp',
      title: 'Growth'
    },
    {
      imageUrl: '/img/Herbicides.webp',
      title: 'Herbicides'
    },
    {
      imageUrl: '/img/Viricides.webp',
      title: 'Viricides'
    },
    {
      imageUrl: '/img/Seeds.webp',
      title: 'Seeds'
    },
    {
      imageUrl: '/img/Herbicides.webp',
      title: 'Herbicides'
    },
  ];

  return ( 
    <>
    {/* <div className="container ">
      <div className="fw-bold text-success fs-4">Categories</div>
      <div className="row gy-4 mt-3 text-center">
        {categories.map((category, index) => (
          <div className="col-2 mx-3" key={index}>
            <Link to={`/category/${category.title}`} className="my-card text-decoration-none">
              <img
                src={category.imageUrl}
                className="img-fluid"
                alt={category.title}
                width={200}
              />
              <h5 className="text-center mt-2 category-title">{category.title}</h5>
            </Link>
          </div>
        ))}
      </div>
    </div> */}

<div className="container">
  <div className="fw-bold text-success fs-4">Categories</div>
  <div className="row gy-4 mt-3 text-center">
    {categories.map((category, index) => (
      <div className="col-6 col-xs-6 col-sm-4 col-md-3 col-lg-2" key={index}>
        <Link to={`/category/${category.title}`} className="my-card text-decoration-none">
          <img
            src={category.imageUrl}
            className="img-fluid"
            alt={category.title}
          />
          <h5 className="text-center mt-2 category-title">{category.title}</h5>
        </Link>
      </div>
    ))}
  </div>
</div>

    </>
  );
};

export default CategoriesCardComponent;

