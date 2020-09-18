import React from "react";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Cart = ({ count }) => (
  <IconButton aria-label="cart">
    <Badge badgeContent={5} color="primary">
      <ShoppingCartIcon />
    </Badge>
  </IconButton>
);

export default Cart;
