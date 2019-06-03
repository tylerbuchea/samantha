import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import PreviewCompatibleImage from './PreviewCompatibleImage';

export function BlogRoll({ className }) {
  const renderPosts = ({ node: post }) => (
    <div className="is-parent column is-6" key={post.id}>
      <article
        className={`blog-list-item tile is-child box notification ${
          post.frontmatter.featuredpost ? 'is-featured' : ''
        }`}
      >
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
            <Link
              className="title has-text-primary is-size-4"
              to={post.fields.slug}
            >
              {post.frontmatter.title}
            </Link>
            <span> &bull; </span>
            <span className="subtitle is-size-5 is-block">
              {post.frontmatter.date}
            </span>
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
        <div className="content-item conent-blog">
          <div>{posts && posts.map(renderPosts)}</div>
        </div>
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

export default styled(BlogRoll)``;
