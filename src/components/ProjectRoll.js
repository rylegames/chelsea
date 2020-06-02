/** @jsx jsx */

import React from "react";
import PropTypes from "prop-types";
import { css, jsx } from "@emotion/core";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

const style = css`
  > a {
    margin-left: -20px;
    width: calc(100% + 40px);
    display: block;
    padding: 30px 20px;
    border-bottom: 1px solid lightgrey;

    &:hover {
      background: lightgrey;
      color: white;
    }

    &:last-of-type {
      border-bottom: none;
    }
  }
`;

class ProjectRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div css={style}>
        {posts &&
          posts.map(({ node: post }) => {
            const { id, frontmatter, fields, excerpt } = post;
            const { featuredpost, featuredimage, title, date } = frontmatter;
            return (
              <Link to={fields.slug}>
                <h1>{title}</h1>
                <div>{date}</div>
              </Link>
            );
          })}
      </div>
    );
  }
}

class ProjectRollOld extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-6" key={post.id}>
              <article
                className={`blog-list-item tile is-child box notification ${
                  post.frontmatter.featuredpost ? "is-featured" : ""
                }`}
              >
                <header>
                  {post.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                    </div>
                  ) : null}
                  <p className="post-meta">
                    <Link
                      className="title has-text-primary is-size-4"
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <span className="subtitle is-size-5 is-block">
                      {post.frontmatter.date}
                    </span>
                  </p>
                </header>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="button" to={post.fields.slug}>
                    Keep Reading →
                  </Link>
                </p>
              </article>
            </div>
          ))}
      </div>
    );
  }
}

ProjectRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query ProjectRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "project-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <ProjectRoll data={data} count={count} />}
  />
);
