/** @jsx jsx */

import React from "react";
import { Link, StaticQuery } from "gatsby";
import { css, jsx } from "@emotion/core";
import { get } from "lodash/get";

import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";

import {
  FaInstagram,
  FaFacebookSquare,
  FaLinkedin,
  FaInbox,
  FaNewspaper,
  FaThumbtack,
  FaEnvelopeOpenText,
  FaIdCard,
} from "react-icons/fa";

const style = css`
  margin: 0 auto;
  width: 100%;
  max-width: 680px;
  padding: 0 20px;
  position: relative;

  .profile {
    .info {
      .tagline {
        font-size: 20px;
      }
    }
  }

  .links {
    display: flex;

    a {
      display: flex;
      align-items: center;
      margin-right: 20px;

      svg {
        margin-right: 4px;
      }
    }
  }

  .menu {
    margin-left: -20px;
    width: calc(100% + 40px);

    a {
      padding: 20px 0;
      font-size: 30px;
      display: block;
      border-top: 1px solid lightgrey;

      svg {
        text-align: center;
        width: 60px;
      }

      &:last-of-type {
        border-bottom: 1px solid lightgrey;
      }

      &:hover {
        color: white;
        background: lightgrey;
      }
    }
  }
`;

const Footer = class extends React.Component {
  render() {
    const { data } = this.props;
    const {
      name,
      tagline,
      description,
      emailAddress,
      facebookLink,
      instagramLink,
      linkedinLink,
      profileImage,
    } = data.markdownRemark.frontmatter;

    return (
      <div css={style} className="container content">
        <div className="profile">
          <div className="info">
            <img />
            <div>
              <h2 className="name">{name}</h2>
              <h4 className="tagline">{tagline}</h4>
            </div>
          </div>
          <div className="description">{description}</div>
        </div>
        <br />
        <div className="links">
          <a href={`mailto:${emailAddress}`} target="_blank">
            <FaInbox /> email
          </a>
          <a href={facebookLink} target="_blank">
            <FaFacebookSquare /> facebook
          </a>
          <a href={instagramLink} target="_blank">
            <FaInstagram /> instagram
          </a>
          <a href={linkedinLink} target="_blank">
            <FaLinkedin /> linkedin
          </a>
        </div>
        <br />
        <div className="menu">
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
        <br />
        <br />
        ©2020 <Link to="/">Chelsea Vuong</Link> and site created by{" "}
        <a href="https://ryanylee.com" target="_blank">
          Ryan Y. Lee
        </a>
        <br />
        <br />
        <br />
      </div>
    );
  }
};

export default () => (
  <StaticQuery
    query={graphql`
      query Footer {
        markdownRemark(frontmatter: { templateKey: { eq: "footer-page" } }) {
          html
          frontmatter {
            title
            facebookLink
            instagramLink
            emailAddress
            linkedinLink
            tagline
            name
            description
            profileImage {
              childImageSharp {
                fluid(maxWidth: 120, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Footer data={data} />}
  />
);
