/** @jsx jsx */

import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { css, jsx } from "@emotion/core";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import ProjectRoll from "../components/ProjectRoll";

const style = css`
  padding: 0 20px;
  max-width: 680px;
  width: 100%;
  margin: 0 auto;
`;

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div css={style} className="content">
    <img
      src={`${
        !!image.childImageSharp ? image.childImageSharp.fluid.src : image
      }`}
    />
    <div style={{ textAlign: "center" }}>{title}</div>
    <div style={{ textAlign: "center" }}>{subheading}</div>
    <br />
    <div className="content">
      <div className="tile">
        <h1 className="title">{mainpitch.title}</h1>
      </div>
      <div className="tile">
        <h3 className="subtitle">{mainpitch.description}</h3>
      </div>
    </div>
    <div className="columns">
      <div className="column is-12">
        <h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
        <p>{description}</p>
      </div>
    </div>
    <h1>Blog</h1>
    <BlogRoll featuredOnly />
    <h1>Projects</h1>
    <ProjectRoll />
    <h1>Press</h1>
    <Features />
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
      }
    }
  }
`;
