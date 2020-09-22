import React, { useEffect } from "react";
import Post from "../../components/post/post.component";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { selectIsFetching, selectPosts } from "../../redux/shop/shop.selectors";
import { FetchPostStart } from "../../redux/shop/shop.actions.js";

const ShopPage = ({ posts, isLoading, fetchPostsStart }) => {
  useEffect(() => {
    console.log("fetching");
    if (posts.length <= 0) fetchPostsStart(); //sets loading to true then to false when it ends
  }, [posts, fetchPostsStart]);

  return (
    <div>
      {posts.map((post) => (
        <Post title={post.title} price={post.price} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetching,
  posts: selectPosts,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPostsStart: () => dispatch(FetchPostStart()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithSpinner(ShopPage));
