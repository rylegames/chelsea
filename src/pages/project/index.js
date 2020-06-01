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
        <div css={style} className="container content">
          <img src={"/img/blog-index.jpg"} />
          <ProjectRoll />
        </div>
      </Layout>
    );
  }
}
