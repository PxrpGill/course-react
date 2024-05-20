import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CategorySidebar from "../CategorySidebar/CategorySidebar";
import CategoryInnerContent from "../CategoryInnerContent/CategoryInnerContent";

import "./CategoryInner.css";


export default class CategoryInner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const { categories, categoryId } = this.props;
    const category = categories[categoryId];
    const title = category.title;
    const products = category.products;

    console.log(title);
    console.log(products);

    if (!category) {
      return <div>Категория не найдена!</div>
    }

    return (
      <>
        <Header />
        <main className="category__main">
          <div className="category__container">
            <nav className="category__navigation">
              <ul className="navigation__list">
                <li className="list_item-navigation">
                  <a href={"/"} className="item-navigation__link">
                    Главная
                  </a>
                </li>
                <li className="list_item-navigation">
                  <a href="" className="item-navigation__link">
                    
                  </a>
                </li>
              </ul>
            </nav>
            <div className="category__main-content">
              <CategorySidebar />
              <CategoryInnerContent items={category} />
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }
}