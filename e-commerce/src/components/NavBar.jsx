import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <div className="d-flex flex-column vh-100">
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container d-flex justify-content-between align-items-center">
          <div>
            <a className="navbar-brand" href="#" style={{ marginRight: '20px' }}>Alenka</a>
          </div>
          <div className="d-flex justify-content-center">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Productos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contacto</a>
              </li>
            </ul>
          </div>
          <div>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar" />
              <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form>
          </div>
          <div className="d-flex align-items-center ms-3">
              <CartWidget />
            </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;







