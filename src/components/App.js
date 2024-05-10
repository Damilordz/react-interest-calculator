import React from "react";
import Header from "./Header";
import "../assets/css/index.css";
import BankAccount from "./BankAccount";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container d-flex justify-content-center align-items-center">
        <BankAccount />
      </main>
      <Footer />
    </div>
  );
}

export default App;
