import React from "react";
import PropTypes from "prop-types";
import { FooterPageTemplate } from "../../templates/footer-page";

const FooterPagePreview = ({ entry, widgetFor }) => (
  <FooterPageTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);

FooterPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default FooterPagePreview;
