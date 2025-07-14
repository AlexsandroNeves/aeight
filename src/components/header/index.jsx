import React from "react"
import "./style.css"

const Header = () => {
  return (
    <header className="header">
      <div className="container-header">
        <div className="header-content">
          <h1 className="logo">MegaStore</h1>
          <nav className="nav-menu">
            <ul className="nav-list">
              <li><a href="#" className="nav-link">Início</a></li>
              <li><a href="#" className="nav-link">Ofertas</a></li>
              <li><a href="#" className="nav-link">Produtos</a></li>
              <li><a href="#" className="nav-link">Contato</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header