import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderComponent from './HeaderComponent';
import Footercomponent from './Footercomponent';

const AllCategoriesCard = () => {
  const reviews = [
    {
      imageUrl: '/img/lustre.png',
      title: 'Lustre',
      subtitle1: 'Flusilazole 12.5% + Carbendazim 25%',
      subtitle2: '50 gm, 100 gm, 250 gm, 500 gm, 1 Kg',
      buttonText: 'Know more',
    },
    {
      imageUrl: '/img/conika.png',
      title: 'Conika',
      subtitle1: 'Kasugamycin 5% + Copper Oxychloride 45% WP',
      subtitle2: '50 gm, 100 gm, 250 gm, 500 gm, 1 Kg',
      buttonText: 'Know more',
    },
    {
      imageUrl: '/img/godiwasuper.png',
      title: 'Godiwa Super',
      subtitle1: 'Azoxystrobin 18.2% + Difenoconazole 11.4% w/w SC',
      subtitle2: '200 ml, 500 ml, 1 L',
      buttonText: 'Know more',
    },
  ];

  const navigate = useNavigate();

  const handleButtonClick = (title) => {
    navigate(`/productDetails`);
  };

  return (
    <>
    <HeaderComponent/>
    {/* <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {reviews.map((review, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card border border-1 h-100 d-flex flex-column justify-content-between">
              <div>
                <div className="card-images text-center mt-4">
                  <img src={review.imageUrl} alt="Card Image" className="img-fluid zoom-image" />
                </div>
                <div className="card-body text-center mt-3">
                  <h2 className="card-title">{review.title}</h2>
                  <div className="card-content">
                    <p className="card-subtitle my-3 ps-1">{review.subtitle1}</p>
                    <p className="card-subtitle my-3 ps-1">{review.subtitle2}</p>
                  </div>
                </div>
              </div>
              <div className="text-center mb-3">
                <button 
                  type="button" 
                  className="btn btn-outline-success rounded-pill px-5 py-2"
                  onClick={() => handleButtonClick(review.title)}
                >
                  {review.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div> */}

<div className="container mt-5">
  <div className="row  g-4">
    {reviews.map((review, index) => (
      <div className="col-6 col-xs-6 col-sm-4 col-md-3 col-lg-3 mb-4 mb-4" key={index}>
        <div className="card border border-1 h-100 d-flex flex-column justify-content-between">
          <div>
            <div className="card-images text-center mt-4">
              <img src={review.imageUrl} alt="Card Image" className="img-fluid zoom-image" />
            </div>
            <div className="card-body text-center mt-3">
              <h2 className="card-title">{review.title}</h2>
              <div className="card-content">
                <p className="card-subtitle my-3 ps-1">{review.subtitle1}</p>
                <p className="card-subtitle my-3 ps-1">{review.subtitle2}</p>
              </div>
            </div>
          </div>
          <div className="text-center mb-3">
            <button 
              type="button" 
              className="btn btn-outline-success rounded-pill px-5 py-2"
              onClick={() => handleButtonClick(review.title)}
            >
              {review.buttonText}
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

    <Footercomponent/>
    </>
  );
};

export default AllCategoriesCard;
