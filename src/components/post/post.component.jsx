import React from "react";

const Post = ({ title, image, price }) => (
  <div>
    <h3>{title}</h3>
    <img alt="" src={image} />
    <span>{price}</span>
  </div>
);

export default Post;
