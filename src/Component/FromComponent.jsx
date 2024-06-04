import React from 'react'

const FromComponent = () => {
  return (

  <div className="background-image text-center">
    <div className="overlay">
      <div className="form-container">
      <div className="logo">
                <img src="/img/B5F803E7-578E-4F8E-AE36-C1AFB8616B54.png" alt='img' className="h-36" width="150px"/>
            </div>
        <h5 className='text-white my-3'> CONTACT US</h5>
        <form>
          <div className="row mb-3">
            <div className="col-md-4 ">
              <input type="text" className="form-control custom-input" id="name" placeholder="Enter your name" />
            </div>
            <div className="col-md-4">
              <input type="email" className="form-control custom-input" id="email" placeholder="Enter your email" />
            </div>
            <div className="col-md-4">
              <input type="number" className="form-control custom-input" id="number" placeholder="Enter your number" />
            </div>
          </div>
          <div className="mb-3">
            <textarea className="form-control custom-input" id="message" rows="3" placeholder="Enter your message"></textarea>
          </div>
          <button type="sumbit" className="btn btn-outline-success btn-sumbit rounded-pill px-5 mt-3">Sumbit</button>
        </form>
      </div>
    </div>
  </div>


  )
}

export default FromComponent