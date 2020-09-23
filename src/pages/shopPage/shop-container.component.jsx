import React, { useEffect } from "react";
import { FetchPostStart } from "../../redux/shop/shop.actions.js";
import { connect } from "react-redux";
import ShopPage from "./shop.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { createStructuredSelector } from "reselect";
import { selectIsFetching } from "../../redux/shop/shop.selectors.js";
import Spinner from "../../components/spinner/spinner.component";

const ShopPageContainer = ({ fetchPostStart, isLoading }) => {
  useEffect(() => {
    fetchPostStart();
  }, [fetchPostStart]);

  return isLoading ? <Spinner /> : <ShopPage />;
};

const mapDispatchToProps = (dispatch) => ({
  fetchPostStart: () => dispatch(FetchPostStart()),
});

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetching,
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPageContainer);
