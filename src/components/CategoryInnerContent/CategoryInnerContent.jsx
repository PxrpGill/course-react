import React from "react";

import { CartContext } from "../CartContext/CartContext";

import "./CategoryInnerContent.css";


export default class CategoryInnerContent extends React.Component {
  static contextType = CartContext;

  constructor(props) {
    super(props);
  }

  render() {
    const itemsArray = Object.values(this.props.items);
    const { addToCart } = this.context;

    return (
      <section className="category__content">
        <div className="content__title-section">
          <h2 className="section__title">
            Товары
          </h2>
        </div>
        <div className="content__items-main-content">
          {itemsArray.map(item => {
            return (
              <article className="content__item-content" id={item.article}>
                <h3 className="item-content__title--visually-hidden">
                  Товар
                </h3>
                <section className="item-content__image">
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
                  <button className="main-content__buy-button" type="button" onClick={() => addToCart(item)}>
                    В корзину
                  </button>
                </section>
              </article>
            )
          })}
        </div>
      </section>
    )
  }
}