import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Cart from "../../components/cart/cart.component";
import { makeStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { connect } from "react-redux";
import { signOut } from "../../redux/user/user.actions";
import LockIcon from "@material-ui/icons/Lock";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import PersonIcon from "@material-ui/icons/Person";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1.5),
    },
  },
}));

const UserMenu = ({ currentUser, count, signOut, history }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={useStyles().root}>
      <Cart count={count} />
      <Avatar
        style={{ cursor: "pointer" }}
        alt={currentUser.username}
        src="/static/images/avatar/3.jpg"
        onClick={(e) => setAnchorEl(e.currentTarget)}
      />
      <Menu
        // elevation={0}
        // anchorOrigin={{
        //   vertical: "bottom",
        //   horizontal: "left",
        // }}
        // transformOrigin={{
        //   vertical: "center",
        //   horizontal: "center",
        // }}
        style={{ top: "40px", left: "-10px", color: "#333" }}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <PersonIcon style={{ marginRight: "12px" }} /> Profile
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            history.push("/sell");
          }}
        >
          <AttachMoneyIcon style={{ marginRight: "12px" }} /> Sell
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            signOut();
          }}
        >
          <LockIcon style={{ marginRight: "12px" }} />
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
});

export default withRouter(connect(null, mapDispatchToProps)(UserMenu));
