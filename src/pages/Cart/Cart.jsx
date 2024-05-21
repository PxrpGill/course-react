import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { CartContext } from "../../components/CartContext/CartContext";

import "./Cart.css";

export default class Cart extends React.Component {
  static contextType = CartContext;

  handleRemoveFromCart = (article) => {
    this.context.removeFromCart(article);
  };

  render() {
    const { cart } = this.context;

    if (!cart) {
      return <div>Loading...</div>;
    }

    return (
      <>
        <Header />
        <main className="cart__main">
          <div className="cart__container">
            <section className="cart__cart-title">
              <h2 className="cart-title__title">
                Корзина
              </h2>
            </section>
            <section className="cart__cart-content">
              <h2 className="cart-content__title--visually-hidden">
                Содержимое корзины
              </h2>
              {cart.map((item, index) => {
                return (
                <article className="cart-content__item-cart" key={index}>
                  <h3 className="item__title--visually-hidden">
                    Элемент корзины
                  </h3>
                  <section className="item-cart__image">
                    <h4 className="image__title--visually-hidden">Картинка товара</h4>
                    <img src={item.img} alt="Картинка товара" />
                  </section>
                  <section className="item-content__main-content">
                    <h4 className="main-content__title-item--visually-hidden">
                      Контент-часть товара
                    </h4>
                    <p className="main-content__item-article">
                      Артикул: {item.article}
                    </p>
                    <p className="main-content__item-manufacturer">Производитель: {item.manufacturer}</p>
                    <p className="main-content__item-description">
                      Описание:<br />{item.description}
                    </p>
                    <p className="main-content__item-rating">Рейтинг: {item.rating}</p>
                    <p className="main-content__item-rating">Цена: {item.price}</p>
                    <button className="main-content__buy-button" type="button" onClick={() => this.handleRemoveFromCart(item.article)}>
                      Удалить из корзины
                  </button>
                  </section>
                </article>
                )
              })}
            </section>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}
