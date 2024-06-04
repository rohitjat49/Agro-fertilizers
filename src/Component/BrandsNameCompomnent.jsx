
import React from 'react';

const BrandsNameCompomnent = () => {
  const logos = [
    { imageUrl: '/img/adamaLogo.webp', altText: 'Logo 1' },
    { imageUrl: '/img/fmcLogo.png', altText: 'Logo 2' },
    { imageUrl: '/img/iffcoLogo.webp', altText: 'Logo 3' },
    { imageUrl: '/img/tapasLogo.png', altText: 'Logo 4' },
    { imageUrl: '/img/UAL-_logo.webp', altText: 'Logo 5' },
    { imageUrl: '/img/dhanukaLogo.png', altText: 'Logo 6' },
    // { imageUrl: '/img/syngentaLogo.png', altText: 'Logo 7' },
    
  ];

  return (
    <div className="container mt-4">
         <div className="fw-bold text-success fs-4 ">Brands</div>
      <div className="row gy-4 text-center">
        {logos.map((logo, index) => (
          <div className="col-6 col-md-3 col-lg-2 mt-5" key={index}>
            <div className="card border border-1 logo-card">
              <img
                src={logo.imageUrl}
                className="img-fluid p-2"
                alt={logo.altText}
                style={{ objectFit: 'contain', height: '100px' }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsNameCompomnent;
