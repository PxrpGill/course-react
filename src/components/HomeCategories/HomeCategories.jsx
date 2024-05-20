import React from "react";

import "./HomeCategories.css";
import { Link } from "react-router-dom";


export default class HomeCategories extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const categoriesArray = Object.values(this.props.categories);

    return (
      <section className="main__content">
        <div className="content__title">
          <h2 className="content__inner">Категории</h2>
        </div>
        <div className="content__content-items">
          {categoriesArray.map((elem, index) => {
            return (
              <article className="content-items__item" key={index}>
                <h3 className="item__description">
                  {elem.title}
                </h3>
                <img src={elem.img ? elem.img : "#"}
                  alt="Картинка категории"
                  className="item__image" />
                <Link to={`/category/${index}`} className="item__link">Смотреть</Link>
              </article>
            )
          })}
        </div>
      </section>
    )
  }
}