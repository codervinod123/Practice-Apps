import React, { Component } from "react";

export class CartItem extends Component {
  render() {
    return (
      <div classname="cart-item" style={{display:"flex"}}>
        <div className="left-block">
          <img style={styles.image} alt="" />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>Phone</div>
          <div style={{ color: "#777" }}>price: 999</div>
          <div style={{ color: "#777" }}>Qty</div>
          <div className="cart-item-actions">
          {/* javascript */}
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    backgroundColor: "#777",
  },
};

export default CartItem;
