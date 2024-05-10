import React from "react";

function Header() {
  return (
    <header className="bg-primary text-white py-3 mb-4 ">
      <div className="container d-flex align-items-center ">
        <div className="header-logo">
          <img src={require("../assets/images/app-logo.png")} alt="bank logo" />
        </div>
        <div className="header-title">
          <h1>Bankio</h1>
        </div>
        <nav>
          <a href="#home">Home</a>
          <a href="#profile">Profile</a>
          <a href="#forms">Forms</a>
          <a href="#success">Success</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
