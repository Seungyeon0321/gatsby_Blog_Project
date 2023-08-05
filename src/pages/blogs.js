import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

const BlogPage = ({ data }) => {
  const dataForName = data.allMdx.nodes;

  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {dataForName.map((node) => (
          <article key={node.id}>
            <h2>{node.frontmatter.name}</h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))}
      </ul>
    </Layout>
  );
};

//filter쓰는 법 알아보기
export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          name
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts"></Seo>;

export default BlogPage;
