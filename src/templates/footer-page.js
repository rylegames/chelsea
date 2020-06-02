/** @jsx jsx */

import React from "react";
import { css, jsx } from "@emotion/core";

import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Footer from "../components/Footer";
import Content, { HTMLContent } from "../components/Content";

export const FooterPageTemplate = ({ data }) => {
  return <Footer data={data} />;
};

FooterPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const FooterPage = (data) => {
  const { markdownRemark: post } = data;
  return <FooterPageTemplate />;
};

FooterPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default FooterPage;

export const aboutPageQuery = graphql`
  query FooterPage {
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
`;
