import React from "react";

import "./CategoryNavigation.css"

export default class CategoryNavigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="category__navigation">
        <ul className="navigation__list">
          <li className="list__item-navigation">
            <a href="" className="item-navigation__link">
              {this.props.title}
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}