/** @jsx jsx */

import React from "react";
import { css, jsx } from "@emotion/core";

import Layout from "../../components/Layout";
import ProjectRoll from "../../components/ProjectRoll";

const style = css`
  padding: 0 20px;
  max-width: 680px;
  width: 100%;
  margin: 0 auto;
`;

export default class ProjectIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div css={style}>
          <img src={"/img/blog-index.jpg"} />
          <ProjectRoll />
        </div>
      </Layout>
    );
  }
}

class OldProjectIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: "0.5rem 0 0 #f40, -0.5rem 0 0 #f40",
              backgroundColor: "#f40",
              color: "white",
              padding: "1rem",
            }}
          >
            Latest Projects
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <ProjectRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
