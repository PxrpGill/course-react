import React from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import "./Cart.css";


export default class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Header />
        <main className="cart__main">
          <div className="cart__container">

          </div>
        </main>
        <Footer />
      </>
    )
  }
}