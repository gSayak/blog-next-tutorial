import Link from "next/link";
import React from "react";
import Head from "next/head";
import Script from "next/script";
import Layout from "../components/layout";

const FirstPost = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
        />
        <div className="container">
          <h1>First Post</h1>
          <h2>
            <Link href="/">Back to Home</Link>
          </h2>
        </div>
      </Layout>
    </>
  );
};

export default FirstPost;
