import React from 'react';

const ImageComponent = () => {
  const reviews = [
    {
      imageUrl: '/img/ferio.avif',
      title: 'Review 1',
      description: 'This is a short description for review 1.',
    },
    {
      imageUrl: '/img/ferio.avif',
      title: 'Review 2',
      description: 'This is a short description for review 2.',
    },
    {
      imageUrl: '/img/ferio.avif',
      title: 'Review 3',
      description: 'This is a short description for review 3.',
    },
    {
      imageUrl: '/img/ferio.avif',
      title: 'Review 4',
      description: 'This is a short description for review 4 ',
    },
  ];

  return (
    <div className="container mt-5">
      <h4 className='text-success fw-bold'>Farmer Reviews</h4>
      <div className="row">
        {reviews.map((review, index) => (
          <div className="col-3" key={index}>
            <div className="card h-100">
              <img src={review.imageUrl} className="card-img-top" alt={review.title} />
              <div className="card-body">
                <h5 className="card-title">{review.title}</h5>
                <p className="card-text">{review.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageComponent;
