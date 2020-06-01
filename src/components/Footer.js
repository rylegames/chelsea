/** @jsx jsx */

import React from "react";
import { Link } from "gatsby";
import { css, jsx } from "@emotion/core";

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
      }
    }
  }
`;

const Footer = class extends React.Component {
  render() {
    return (
      <div css={style}>
        <div className="profile">
          <div className="info">
            <img />
            <div>
              <div>Chelsea Vuong</div>
              <div>Tagline</div>
            </div>
          </div>
          <div className="description">
            I’m a designer from the UK. I work at Etch where we make software
            for devices, big and small.
          </div>
        </div>
        <br />
        <div className="links">
          <a href="mailto:chelseavuongmao@gmail.com" target="_blank">
            <FaInbox /> email
          </a>
          <a href="https://facebook.com" target="_blank">
            <FaFacebookSquare /> facebook
          </a>
          <a href="https://instagram.com" target="_blank">
            <FaInstagram /> instagram
          </a>
          <a href="https://linkedin.com" target="_blank">
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

// const OldFooter = class extends React.Component {
//   render() {
//     return (
//       <footer className="footer has-background-black has-text-white-ter">
//         <div className="content has-text-centered">
//           <img
//             src={logo}
//             alt="Kaldi"
//             style={{ width: "14em", height: "10em" }}
//           />
//         </div>
//         <div className="content has-text-centered has-background-black has-text-white-ter">
//           <div className="container has-background-black has-text-white-ter">
//             <div style={{ maxWidth: "100vw" }} className="columns">
//               <div className="column is-4">
//                 <section className="menu">
//                   <ul className="menu-list">
//                     <li>
//                       <Link to="/" className="navbar-item">
//                         Home
//                       </Link>
//                     </li>
//                     <li>
//                       <Link className="navbar-item" to="/about">
//                         About
//                       </Link>
//                     </li>
//                     <li>
//                       <Link className="navbar-item" to="/products">
//                         Products
//                       </Link>
//                     </li>
//                     <li>
//                       <Link className="navbar-item" to="/contact/examples">
//                         Form Examples
//                       </Link>
//                     </li>
//                     <li>
//                       <a
//                         className="navbar-item"
//                         href="/admin/"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         Admin
//                       </a>
//                     </li>
//                   </ul>
//                 </section>
//               </div>
//               <div className="column is-4">
//                 <section>
//                   <ul className="menu-list">
//                     <li>
//                       <Link className="navbar-item" to="/blog">
//                         Latest Stories
//                       </Link>
//                     </li>
//                     <li>
//                       <Link className="navbar-item" to="/contact">
//                         Contact
//                       </Link>
//                     </li>
//                   </ul>
//                 </section>
//               </div>
//               <div className="column is-4 social">
//                 <a title="facebook" href="https://facebook.com">
//                   <img
//                     src={facebook}
//                     alt="Facebook"
//                     style={{ width: "1em", height: "1em" }}
//                   />
//                 </a>
//                 <a title="twitter" href="https://twitter.com">
//                   <img
//                     className="fas fa-lg"
//                     src={twitter}
//                     alt="Twitter"
//                     style={{ width: "1em", height: "1em" }}
//                   />
//                 </a>
//                 <a title="instagram" href="https://instagram.com">
//                   <img
//                     src={instagram}
//                     alt="Instagram"
//                     style={{ width: "1em", height: "1em" }}
//                   />
//                 </a>
//                 <a title="vimeo" href="https://vimeo.com">
//                   <img
//                     src={vimeo}
//                     alt="Vimeo"
//                     style={{ width: "1em", height: "1em" }}
//                   />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     );
//   }
// };

export default Footer;
