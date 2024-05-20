import React from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import "./About.css";


export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Header />
        <main className="main-about">
          <div className="main-about__about-container">
            <section className="main__hello-section">
              <h2 className="hello-section__title">
                «КАРАНДАШ» — Удобно! Быстро! Эффективно!
              </h2>
              <p>
                КАРАНДАШ — это удобный интернет-магазин,
                с помощью которого Вы можете заказать все
                необходимые товары для офиса и школы.
              </p>
              <article className="hello-section__mini-information">
                <h3 class="mini-information__title--visually-hidden">
                  Мини-информация
                </h3>
                <p>
                  Широкий ассортимент самых необходимых и
                  качественных товаров для офиса и школы. В нашем
                  интернет-магазине всегда в наличии лучшие
                  товары наиболее популярных торговых марок.
                </p>
              </article>
              <p>
                Мы специализируемся на следующих товарных категориях:
              </p>
              <ul className="hello-section__list">
                <li className="list__item-des">
                  товары для офиса, канцелярские товары;
                </li>
                <li className="list__item-des">
                  бумага и бумажная продукция;
                </li>
                <li className="list__item-des">
                  товары для школы;
                </li>
              </ul>
              <p>
                Наша компания является официальным представителем
                следующих торговых марок: канцтоваров и товаров для
                офиса Brauberg; надежных калькуляторов Staff;
                товаров для учебы и творчества Пифагор; бизнес
                аксессуаров и деловых подарков Galant; бытовой техники
                Sonnen.
              </p>
              <p>
                Комфортную покупку. Вам не нужно тратить время на
                дорогу и поиски товара. «КАРАНДАШ» предоставляет
                Вам возможность совершать покупки в любое удобное
                для Вас время: в рабочие часы или после работы, в
                будни и выходные дни.
              </p>
              <p>
                Качественное обслуживание клиента — это основа 
                нашей деятельности. Ваши заказы оперативно 
                доставляются. Вы получаете грамотные консультации 
                по выбору и подбору наиболее подходящих товаров, а т
                акже при необходимости помощь в их установке и сборке.
              </p>
            </section>
          </div>
        </main>
        <Footer />
      </>
    )
  }
}