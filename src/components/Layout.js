import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import './skeleton.css';
import './index.css';
import useSiteMetadata from './SiteMetadata';
import Footer from './Footer';

export function TemplateWrapper({ children, className }) {
  const { title, description } = useSiteMetadata();
  // const data = useStaticQuery(
  //   graphql`
  //     fragment fluidImage on File {
  //       childImageSharp {
  //         fluid(quality: 100) {
  //           ...GatsbyImageSharpFluid_withWebp
  //         }
  //       }
  //     }
  //     query {
  //       headshot: file(relativePath: { eq: "headshot.jpg" }) {
  //         ...fluidImage
  //       }
  //     }
  //   `
  // );
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-16x16.png"
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href="/img/safari-pinned-tab.svg"
          color="#ff4400"
        />
        <meta name="theme-color" content="#1eaedb" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
          integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp"
          crossorigin="anonymous"
        />
      </Helmet>
      <div className={className}>
        <div className="content">{children}</div>
        <Footer />
      </div>
    </div>
  );
}

export default styled(TemplateWrapper)``;
