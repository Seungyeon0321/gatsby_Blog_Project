import { Link } from "gatsby";
import Layout from "../components/layout";
import * as React from "react";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  );
};

export const Head = () => (
  <>
    <title>Home page</title>
    <meta name="description" content="Your description" />
  </>
);

export default IndexPage;
