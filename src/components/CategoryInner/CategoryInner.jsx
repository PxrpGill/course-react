import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CategorySidebar from "../CategorySidebar/CategorySidebar";
import CategoryInnerContent from "../CategoryInnerContent/CategoryInnerContent";
import CategoryNavigation from "../CategoryNavigation/CategoryNavigation";

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

    if (!category) {
      return <div>Категория не найдена!</div>
    }

    return (
      <>
        <Header />
        <main className="category__main">
          <div className="category__container">
            <CategoryNavigation title={title}/>
            <div className="category__main-content">
              <CategorySidebar />
              <CategoryInnerContent items={products} />
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }
}