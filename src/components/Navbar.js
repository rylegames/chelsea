/** @jsx jsx */

import React from "react";
import { Link } from "gatsby";
import { css, jsx } from "@emotion/core";
import window from "global";

import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";

import {
  FaBars,
  FaNewspaper,
  FaThumbtack,
  FaEnvelopeOpenText,
  FaIdCard,
  FaTimes,
} from "react-icons/fa";

const style = css`
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 680px;
  padding: 40px 20px;
  display: flex;
  justify-content: space-between;

  .logo {
    font-size: 24px;
    border: 4px solid lightgrey;
    border-radius: 4px;
    padding: 4px 10px;

    &:hover {
      background: lightgrey;
      color: white;
    }
  }

  .route {
    margin-left: 10px;
    padding: 10px;
    font-size: 28px;

    &:hover {
      background: lightgrey;
      color: white;
      border-radius: 4px;
    }
  }

  .menu-button {
    padding: 10px;
    margin-right: -10px;
    border-radius: 4px;
    font-size: 28px;

    &:hover {
      background: lightgrey;
      color: white;
    }
  }

  .menu {
    position: fixed;
    z-index: 1;
    top: -680px;
    width: 100%;
    height: 100vw;
    max-height: 680px;
    margin-left: -20px;
    max-width: 680px;
    background: grey;
    transition: top 0.2s;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: min-content 1fr 1fr;

    > a {
      grid-column: span 2 / auto;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 28px;

      svg {
        margin-right: 10px;
      }
    }

    .home {
      grid-column: 3 span / auto;
      justify-content: flex-start;
      padding: 20px;
    }

    .close {
      font-size: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      &:hover {
        color: white;
      }
    }

    &.show {
      top: 0px;
    }
  }
`;

const Navbar = class extends React.Component {
  state = { menu: false, parts: [] };

  componentWillMount() {
    if (window && window.addEventListener && window.location) {
      this.setState({
        parts: window.location.pathname.split("/"),
        pathname: window.location.pathname,
      });
      window.addEventListener("mousedown", this.handleClick, false);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (window && this.state.pathname !== window.location.pathname) {
      this.setState({
        parts: window.location.pathname.split("/"),
        pathname: window.location.pathname,
      });
    }
  }

  componentWillUnmount() {
    if (window && window.removeEventListener)
      window.removeEventListener("mousedown", this.handleClick, false);
  }

  handleClick = (e) => {
    if (this.menu.contains(e.target)) {
      return;
    }

    this.setState({ menu: false });
  };

  render() {
    const { menu, parts } = this.state;
    // const { pathname } = window.location;
    // const parts = pathname.split("/");
    return (
      <div css={style}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link to="/" className="logo">
            Chelsea
          </Link>
          {parts[1] && (
            <Link
              className="route"
              to={"/" + parts[1]}
              style={{ display: "flex", alignItems: "center" }}
            >
              {parts[1] === "blog" && <FaEnvelopeOpenText />}
              {parts[1] === "project" && <FaThumbtack />}
              {parts[1] === "press" && <FaNewspaper />}
              {parts[1] === "about" && <FaIdCard />}
            </Link>
          )}
        </div>
        <div
          className="menu-button"
          onClick={() => this.setState({ menu: !menu })}
          style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
        >
          <FaBars />
        </div>
        <div
          className={menu ? "menu show" : "menu"}
          ref={(menu) => {
            this.menu = menu;
          }}
          onClick={() => this.setState({ menu: false })}
        >
          <Link to="/" className="home">
            Chelsea
          </Link>
          <div className="close">
            <FaTimes />
          </div>
          <Link to="/blog">
            <FaEnvelopeOpenText /> Blog
          </Link>
          <Link to="/press">
            <FaNewspaper /> Press
          </Link>
          <Link to="/project">
            <FaThumbtack /> Projects
          </Link>
          <Link to="/about">
            <FaIdCard /> About
          </Link>
        </div>
      </div>
    );
  }
};

export default Navbar;
