import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";

const IndexPage = () => {

  return (
    <Layout>
      <div className="container">
        <h3 className="font-semibold">Latest stories</h3>
        <BlogRoll />
        <div className="column is-12 has-text-centered">
          <Link className="btn" to="/blog">
            Read more
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
