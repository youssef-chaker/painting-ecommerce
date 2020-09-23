import React, { useEffect } from "react";
import Post from "../../components/post/post.component";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectPosts } from "../../redux/shop/shop.selectors";

const ShopPage = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.postId} title={post.title} price={post.price} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  posts: selectPosts,
});

export default connect(mapStateToProps)(ShopPage);
