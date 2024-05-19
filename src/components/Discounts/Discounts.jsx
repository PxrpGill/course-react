import React from "react";

import "./Discounts.css";


export default class Discounts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="main__discounts">
        <div className="discounts__title">
          <h2 className="title__inner">
            Различные скидки
          </h2>
        </div>
        <div className="discounts__content">
          {this.props.discounts.map(elem => {
            return (
              <article className="discounts__discount-card" key={elem}>
                <h3 className="discount-card__title--visually-hidden">
                  Скидка
                </h3>
                <p className="discount-card__content">
                  {elem}
                </p>
              </article>
            )
          })}
        </div>
      </section>
    );
  }
}