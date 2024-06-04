import React from 'react'

const PopularProducts = () => {
  return (
    <>
    <div className="container mt-5">
        <div className='d-flex justify-content-between pb-5'>
            <h5 className=' text-success fw-bold'>Popular Products</h5>
            <div className=''>
            <button type="button" class="btn btn-outline-success">View all</button>
            </div>
        </div>
    <div className='row'>
        <div className='col-3'>
            <div className="card card-popular d-flex flex-column justify-content-between h-100">
                <div className="card-img-wrapper">
                    <img src="/img/fantac.jpg" className="card-img-top" alt="Image" />
                </div>
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <div className="text-center">
                        <h5 className="card-title mb-0">Fantac</h5>
                        <p className="card-text mb-0">FMC</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='col-3'>
            <div className="card card-popular d-flex flex-column justify-content-between h-100">
                <div className="card-img-wrapper">
                    <img src="/img/glycel.avif" className="card-img-top" alt="Image" />
                </div>
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <div className="text-center">
                        <h5 className="card-title mb-0">Glycel</h5>
                        <p className="card-text mb-0">Company Name</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='col-3'>
            <div className="card card-popular d-flex flex-column justify-content-between h-100">
                <div className="card-img-wrapper">
                    <img src="/img/isabion.avif" className="card-img-top" alt="Image" />
                </div>
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <div className="text-center">
                        <h5 className="card-title mb-0">Syngenta</h5>
                        <p className="card-text mb-0">Card Subtitle</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='col-3'>
            <div className="card card-popular d-flex flex-column justify-content-between h-100">
                <div className="card-img-wrapper">
                    <img src="/img/godiwasuper.png" className="card-img-top mt-1" alt="Image" />
                </div>
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <div className="text-center">
                        <h5 className="card-title mb-0">Godiwa Super</h5>
                        <p className="card-text mb-0">Card Subtitle</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    </>
  )
}

export default PopularProducts