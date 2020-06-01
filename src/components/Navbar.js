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
} from "react-icons/fa";

const style = css`
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 680px;
  padding: 40px 20px;
  display: flex;
  justify-content: space-between;

  .menu {
    display: none;
    position: fixed;
    top: -100px;
    left: 0px;
    width: 100%;
    height: 20px;
    background: grey;

    &.show {
      top: 0px;
      display: block;
    }
  }
`;

const Navbar = class extends React.Component {
  state = { menu: false };

  componentWillMount() {
    window.addEventListener("mousedown", this.handleClick, false);
  }

  componentWillUnmount() {
    window.removeEventListener("mousedown", this.handleClick, false);
  }

  handleClick = (e) => {
    if (this.menu.contains(e.target)) {
      return;
    }

    this.setState({ menu: false });
  };

  render() {
    const { menu } = this.state;
    const { pathname } = window.location;
    const parts = pathname.split("/");
    return (
      <div css={style}>
        <div>Chelsea</div>
        {parts[1] === "blog" && <FaEnvelopeOpenText />}
        {parts[1] === "project" && <FaThumbtack />}
        {parts[1] === "press" && <FaNewspaper />}
        {parts[1] === "about" && <FaIdCard />}
        <div onClick={() => this.setState({ menu: !menu })}>
          <FaBars />
        </div>
        <div
          className={menu ? "menu show" : "menu"}
          ref={(menu) => {
            this.menu = menu;
          }}
        ></div>
      </div>
    );
  }
};

const OldNavbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: "88px" }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/products">
                Products
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
