import React from "react";
import GradientBackground from "../components/gradient-background";
import BrainscanNav from "../components/navbar";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import ArticlesComponent from "../components/articles";
import "../assets/css/main.css";

const IndexPage = () => {
  const data = useStaticQuery(query);

  return (
    <GradientBackground>
      <Layout seo={data.strapiHomepage.seo}>
        <BrainscanNav />
        <div className="uk-section">
          <div className="uk-container uk-container-large">
            <ArticlesComponent articles={data.allStrapiArticle.edges} />
          </div>
        </div>
      </Layout>
    </GradientBackground>
  );
};

const query = graphql`
  query {
    strapiHomepage {
      hero {
        title
      }
      seo {
        metaTitle
        metaDescription
      }
    }
    allStrapiArticle {
      edges {
        node {
          strapiId
          slug
          title
          category {
            name
          }
          image {
            url
          }
          author {
            name
          }
        }
      }
    }
  }
`;

export default IndexPage;
