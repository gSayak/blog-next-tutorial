import Head from "next/head";
import Layout, { siteTitle } from "../pages/components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I'm a tech enthusiast currently pursuing my B.Tech in Computer
          Science and Engineering. I'm on a mission to build a great network
          with all you amazing people out there. I strongly believe that
          collaboration is the key to success, and that's why I'm always open to
          helping others finish their projects. Plus, it's a great way for me to
          learn new tech and get some hands-on practice. So, if you're looking
          for someone who's passionate about tech and loves to work with others,
          you've come to the right place. Let's connect and create something
          amazing together! 
        </p>
        <br/>
        <p>
          Hello there everyone this is my first NextJS application, connect with me at{" "}<br/>
          <a href="https://github.com/gSayak">My Github</a><br/>
          <a href="https://linkedin.com/in/gSayak">My Linkein</a>.
        </p>

        <p>Check out my Post at : 
          <Link href='/posts/first-post'> Here</Link>
        </p>
      </section>
    </Layout>
  );
}
