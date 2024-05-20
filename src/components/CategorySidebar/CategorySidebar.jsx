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
          <h2 className="content__title-sidebar--visually-hidden">
            Сортировать по чему
          </h2>
        </section>
      </aside>
    )
  }
}