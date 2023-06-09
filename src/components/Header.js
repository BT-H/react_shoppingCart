import React from "react";

export default function Header(props) {
  const { countCartItems } = props;

  return (
    <header className="row block center">
      <div>
        <a href="#/">
          <h1>Small Shopping cart</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Cart{" "}
          {countCartItems ? (
            <button className="badge">{countCartItems}</button>
          ) : (
            " "
          )}
        </a>
        <br></br>
        <a href="#/signin">Signin</a>
      </div>
    </header>
  );
}
