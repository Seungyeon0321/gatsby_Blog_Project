import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

const BlogPost = ({ data, children }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.name}>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        name
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.name} />;

export default BlogPost;

// import * as React from "react";
// import Layout from "../components/layout";
// // import Seo from "../../components/seo";
// import { graphql } from "gatsby";

// const BlogPost = ({ data, children }) => {
//   return (
//     <Layout pageTitle={data.mdx.frontmatter.name}>
//       <p>{data.mdx.frontmatter.date}</p>
//       {children}
//     </Layout>
//   );
// };

// export const query = graphql`
//   query ($id: String) {
//     mdx(id: { eq: $id }) {
//       frontmatter {
//         name
//         date(formatString: "MMMM D, YYYY")
//       }
//     }
//   }
// `;

// // export const Head = () => <Seo title={data.mdx.frontmatter.name} />;

// export default BlogPost;
