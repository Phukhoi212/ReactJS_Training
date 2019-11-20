import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { NavLink, withRouter } from "react-router-dom";
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = () => ({
  root: {
    width: "100%",
    height: 60,
    background: "#000000"
  },
  ul: {
    listStyle: "none",
    float: "left",
    width: "inherit",
    padding: 0,
    margin: 0,
    height: "inherit",
    display: "flex"
  },
  li: {
    float: "left",
    width: 150,
    color: "#FFFF",
    textAlign: "center",
    textDecoration: "none",
    fontWeight: "bold"
  },
  navi: {
    marginLeft: 50,
    height: "100%",
    display: "flex",
    alignItems: "center",
    width: "80%"
  },
  selected: {
    color: "red"
  },
  btn: {
    height: "100%",
    width: "20%",
    display: "flex",
    alignItems: "center",
    padding: "0 !important"
  },
  icons: {
    margin: "0 auto",
    backgroundColor: "#FFF",
    "&:hover": {
      backgroundColor: "red"
    }
  }
});

class NavBar extends React.Component {
  state = {
    anchorEl: "",
    category: ""
  };

  handleClickOpenProFile = event => {
    this.setState({
      anchorEl: event.currentTarget
    });
  };

  handleClickOpenCategory = event => {
    this.setState({
      category: event.currentTarget
    });
  };

  handleCloseCategory = () => {
    this.setState({
      category: null
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null
    });
  };

  handleLogOut = () => {
    this.props.history.push("/login");
  };

  handleSelectCategory = () => {
    this.handleCloseCategory();
  }

  render() {
    const { classes } = this.props;
    return this.props.location.pathname === "/login" ? (
      ""
    ) : (
      <div className={classes.root}>
        <ul className={classes.ul}>
          <div className={classes.navi}>
            <li className={classes.li}>
              <NavLink
                exact
                to="/"
                className={classes.li}
                activeClassName={classes.selected}
              >
                HOME
              </NavLink>
            </li>

            <li className={classes.li} onClick={this.handleClickOpenCategory}>
              CATEGORY
              <Menu
                id="simple-menu"
                anchorEl={this.state.category}
                open={Boolean(this.state.category)}
                onClose={this.handleCloseCategory}
                className="pop-menu"
                variant="menu"
              >
                <MenuItem onClick={this.handleSelectCategory}>Action & Adventure</MenuItem>
                <MenuItem onClick={this.handleSelectCategory}>Comedy</MenuItem>
                <MenuItem onClick={this.handleSelectCategory}>Horror</MenuItem>
                <MenuItem onClick={this.handleSelectCategory}>Kids & Family</MenuItem>
              </Menu>
            </li>

            <li className={classes.li}>
              <NavLink
                to="/detail"
                className={classes.li}
                activeClassName={classes.selected}
              >
                DETAIL
              </NavLink>
            </li>
          </div>

          <div className={classes.btn}>
            <IconButton
              onClick={this.handleClickOpenProFile}
              className={classes.icons}
            >
              <AccountCircleIcon size="medium" />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={this.state.anchorEl}
              keepMounted
              open={Boolean(this.state.anchorEl)}
              onClose={this.handleClose}
              className="pop-menu"
            >
              <MenuItem onClick={this.handleLogOut}>LogOut</MenuItem>
            </Menu>
          </div>
        </ul>
      </div>
    );
  }
}
export default withRouter(withStyles(useStyles)(NavBar));
