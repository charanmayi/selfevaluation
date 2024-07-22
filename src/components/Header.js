import React from 'react';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">IndigoLearn</a>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item"><a className="nav-link" href="#">Buy Courses</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Buy Books</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Programs</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Free Resources</a></li>
      </ul>
    </div>
    <button className="btn btn-outline-primary" type="button">Log In/Sign Up</button>
  </nav>
);

export default Header;
