import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
// This is a React page , we can use css , javascript and react features here 😁
// URL => http://localhost:3000/my-react-page
// doc url ( un-official) : https://devcheat.netlify.app/docs/tutorial-basics/create-a-page
export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
      <div
        style={{
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          style={{
            padding: "10px",
          }}
        >
          <Link
            style={{
              textDecoration: "none",
            }}
            to={"https://docusaurus.io"}
          >
            Go to Docusaurus
          </Link>
        </button>
      </div>
    </Layout>
  );
}
