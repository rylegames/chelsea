import React from "react";
import { StaticQuery } from "gatsby";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const FeatureGrid = ({ gridItems, featuredOnly }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => {
      console.log(featuredOnly, item);
      if (!featuredOnly || (featuredOnly && item.featured))
        return (
          <div key={item.text} className="column is-6">
            <section className="section">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <div className="has-text-centered">
                  <div
                    style={{
                      width: "240px",
                      display: "inline-block",
                    }}
                  >
                    <PreviewCompatibleImage imageInfo={item} />
                  </div>
                </div>
                <p>{item.text}</p>
              </a>
            </section>
          </div>
        );
    })}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
      link: PropTypes.string,
    })
  ),
};

export default ({ featuredOnly }) => (
  <StaticQuery
    query={graphql`
      query Features {
        markdownRemark(frontmatter: { templateKey: { eq: "press-page" } }) {
          html
          frontmatter {
            intro {
              blurbs {
                image {
                  childImageSharp {
                    fluid(maxWidth: 240, quality: 64) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                link
                text
                featured
              }
              heading
              description
            }
          }
        }
      }
    `}
    render={(data, count) => {
      return (
        <FeatureGrid
          gridItems={data.markdownRemark.frontmatter.intro.blurbs}
          featuredOnly={featuredOnly}
        />
      );
    }}
  />
);
