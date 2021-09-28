import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Seo from "./seo";
import BrainscanNav from "../components/navbar";



const Layout = ({ children, seo }) => (
  <StaticQuery
    query={graphql`
      query {
        strapiHomepage {
          seo {
            metaTitle
            metaDescription
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Seo seo={seo} />
          <main>
            <BrainscanNav />
            {children}
            </main>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
