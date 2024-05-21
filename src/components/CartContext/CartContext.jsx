import React, { createContext, Component } from 'react';

// Create a context for the cart
export const CartContext = createContext();

export class CartProvider extends Component {
  constructor(props) {
    super(props);
    const savedCart = localStorage.getItem('cart');
    this.state = {
      cart: savedCart ? JSON.parse(savedCart) : [],
    };
  }

  componentDidUpdate() {
    localStorage.setItem('cart', JSON.stringify(this.state.cart));
  }

  addToCart = (product) => {
    this.setState((prevState) => ({
      cart: [...prevState.cart, product],
    }));
  };

  removeFromCart = (article) => {
    this.setState((prevState) => ({
      cart: prevState.cart.filter((item) => item.article !== article),
    }));
  };

  render() {
    return (
      <CartContext.Provider value={{ cart: this.state.cart, addToCart: this.addToCart, removeFromCart: this.removeFromCart }}>
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
