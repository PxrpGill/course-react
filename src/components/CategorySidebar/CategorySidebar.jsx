import React from "react";

import "./CategorySidebar.css"


export default class CategorySidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <aside className="category__sidebar">
        <div className="sidebar__title">
          <h2 className="title__inner-sidebar">
            Сортировать
          </h2>
        </div>
        <section className="sidebar__content">
          <h3 className="content__title-sidebar--visually-hidden">
            Сортировать по чему
          </h3>
          <article className="content__sort-by-price">
            <h4 className="sort-by-price__title--visually-hidden">
              Сортировать от дешевого к дорогому и наоборот
            </h4>
            <button className="sort-by-price__sort-button"
              onClick={() => this.props.onSortChange('asc')}
              type="button">
              Сначала дешевые
            </button>
            <button className="sort-by-price__sort-button"
              onClick={() => this.props.onSortChange('desc')}
              type="button">
              Сначала дорогие
            </button>
          </article>
        </section>
      </aside>
    )
  }
}