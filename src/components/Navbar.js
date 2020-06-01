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
    position: fixed;
    top: -200px;
    width: 100%;
    margin-left: -20px;
    max-width: 680px;
    background: grey;
    transition: top 0.2s;

    > a {
      display: block;
    }

    &.show {
      top: 0px;
      display: block;
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
          <Link to="/">Chelsea</Link>
          <Link
            to={"/" + parts[1]}
            style={{ display: "flex", alignItems: "center" }}
          >
            {parts[1] === "blog" && <FaEnvelopeOpenText />}
            {parts[1] === "project" && <FaThumbtack />}
            {parts[1] === "press" && <FaNewspaper />}
            {parts[1] === "about" && <FaIdCard />}
          </Link>
        </div>
        <div
          onClick={() => this.setState({ menu: !menu })}
          style={{ cursor: "pointer" }}
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
          <div>x</div>
          <Link to="/">Chelsea</Link>
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
