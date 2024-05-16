import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";

const CompFooter = () => {
  return (
    <div className="container-footer ">
      <div className="card-body footer">
        <h5 className="card-title">Designed by Andres Buitrago</h5>
        <ul className="navbar-nav nav-footer">
          <li className="nav-item active">
            <a className="nav-link" href="/login">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/clientes">
              Clients
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/programas">
              Courses
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/proveedores">
              Proveedores
            </a>
          </li>
        </ul>
        <p className="card-text">&copy; 2024</p>
      </div>
    </div>
  );
};

export default CompFooter;
