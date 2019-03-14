import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout>
    <SEO title="Home" keywords={[`Remindah`, `cheatsheet`]} />
    {edges.map(edge => (
      <div>
        <Link to={edge.node.frontmatter.path}>
          {edge.node.frontmatter.title}
        </Link>
      </div>
    ))}
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`;
