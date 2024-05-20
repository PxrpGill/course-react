import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__title">
          <h1>КАРАНДАШ</h1>
        </div>
        <nav className="header__nav">
          <ul className="nav__list">
            <li className="list__item">
              <a href={"/"} className="item__link">
                Главная
              </a>
            </li>
            <li className="list__item">
              <a href={"/about"} className="item__link">
                О нас
              </a>
            </li>
            <li className="list__item">
              <a href={"/cart"} className="item__link">
                Корзина
              </a>
            </li>
          </ul>
        </nav>
        <search className="header__search">
          <input type="search"
            className="search__search-input"
            placeholder="Поиск..." />
          <button className="search__find-button">Найти</button>
        </search>
      </div>
    </header>
  )
}