import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Seo from "./seo";
import GradientBackground from "../components/gradient-background";
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
        <GradientBackground>
          <main>
            <BrainscanNav />
            {children}
            </main>
        </GradientBackground>

      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
