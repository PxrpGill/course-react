import React from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Discounts from "../../components/Discounts/Discounts";
import HomeCategories from "../../components/HomeCategories/HomeCategories";

import "./Home.css";


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      discounts: [
        "до 40% на калькуляторы", "до 45% на Kores",
        "до 60% на Deli", "до 60% на ручки"
      ],
      categories: {
        "pens": {
          "title": "Ручки",
          "img": "./categories/pens.jpg"
        },
        "pencils": {
          "title": "Карандаши",
          "img": "./categories/pencils.jpg"
        },
        "copybooks": {
          "title": "Тетради",
          "img": "./categories/copybooks.jpg"
        },
        "erasers": {
          "title": "Стерки",
          "img": "./categories/erasers.jpg"
        },
        "glue": {
          "title": "Клей",
          "img": "./categories/glue.jpg"
        },
        "markers": {
          "title": "Маркеры",
          "img": "./categories/markers.jpg"
        },
        "highlighters": {
          "title": "Текстовыделители",
          "img": "./categories/highlighters.jpg"
        },
        "baskets": {
          "title": "Корзины для бумаг",
          "img": "./categories/baskets.jpg"
        },
        "calculators": {
          "title": "Калькуляторы",
          "img": "./categories/calculator.jpg"
        },
      }
    }
  }

  render() {
    return (
      <>
        <Header />
        <main className="main">
          <div className="main__container">
            <Discounts discounts={this.state.discounts} />
            <HomeCategories categories={this.state.categories} />
          </div>
        </main>
        <Footer />
      </>
    )
  }
}