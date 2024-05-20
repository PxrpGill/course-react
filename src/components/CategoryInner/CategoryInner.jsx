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
      sortOrder: 'asc',
    }
  }

  handleSortChange = (order) => {
    this.setState({ sortOrder: order });
  }

  getSortedProducts(products) {
    const { sortOrder } = this.state;
    const productsArray = Object.values(products); 
    const sortedProducts = productsArray.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    return sortedProducts;
  }

  render() {
    const { categories, categoryId } = this.props;
    const category = categories[categoryId];
    const title = category.title;
    const products = category.products;

    const sortedProducts = this.getSortedProducts(products);

    if (!category) {
      return <div>Категория не найдена!</div>
    }

    return (
      <>
        <Header />
        <main className="category__main">
          <div className="category__container">
            <CategoryNavigation title={title} />
            <div className="category__main-content">
              <CategorySidebar onSortChange={this.handleSortChange}/>
              <CategoryInnerContent items={sortedProducts} />
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }
}