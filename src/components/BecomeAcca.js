import React from 'react';

const BecomeAcca = () => (
  <div className="container text-center my-5">
    <h2>Become ACCA in 18 months</h2>
    <p>Acquire globally recognized accountancy qualification...</p>
    <div className="row my-4">
      <div className="col">
        <p>Requirements: 10+2</p>
        <p>Exams Reduced: 4/13</p>
        <p>Min. duration: 18 months</p>
      </div>
      <div className="col">
        <button className="btn btn-primary">Download Brochure</button>
      </div>
    </div>
    <form className="form-inline justify-content-center">
      <input type="text" className="form-control mb-2 mr-sm-2" placeholder="Phone Number" />
      <input type="email" className="form-control mb-2 mr-sm-2" placeholder="Email ID" />
      <button type="submit" className="btn btn-primary mb-2">Request Call Back</button>
    </form>
  </div>
);

export default BecomeAcca;
