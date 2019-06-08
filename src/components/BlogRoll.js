import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import PreviewCompatibleImage from './PreviewCompatibleImage';

export function BlogRoll({ className }) {
  const renderPosts = ({ node: post }) => (
    <div className="card" key={post.id}>
      <article className="article">
        <header>
          {post.frontmatter.featuredimage ? (
            <div className="featured-thumbnail">
              <PreviewCompatibleImage
                imageInfo={{
                  image: post.frontmatter.featuredimage,
                  alt: `featured image thumbnail for post ${post.title}`,
                }}
              />
            </div>
          ) : null}
          <p className="post-meta">
            <Link className="title" to={post.fields.slug}>
              {post.frontmatter.title}
            </Link>
            <span> &bull; </span>
            <span className="subtitle">{post.frontmatter.date}</span>
          </p>
        </header>
        <p>
          {post.excerpt}
          <br />
          <br />
          <Link className="button" to={post.fields.slug}>
            Keep Reading →
          </Link>
        </p>
      </article>
    </div>
  );

  const data = useStaticQuery(graphql`
    query BlogRollQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      ) {
        edges {
          node {
            excerpt(pruneLength: 400)
            id
            fields {
              slug
            }
            frontmatter {
              title
              templateKey
              date(formatString: "MMMM DD, YYYY")
              featuredpost
              featuredimage {
                childImageSharp {
                  fluid(maxWidth: 120, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div className={className}>
      <div className="container-restricted">
        <div className="cards">{posts && posts.map(renderPosts)}</div>
      </div>
    </div>
  );
}

BlogRoll.propTypes = {
  className: PropTypes.string,
};

BlogRoll.defaultProps = {
  className: null,
};

export default styled(BlogRoll)`
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 300px));
    grid-gap: 20px;
    align-items: center;
    justify-content: center;
  }
  .card {
    margin: 0px auto;
  }
`;
