import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Layout from 'src/components/Layout/';
import BlogCard from 'src/components/BlogCard';
import StyledLink from 'src/components/StyledLink';
import { LINKS } from 'src/utils';

export const H1 = styled.h1`
  margin-bottom: 6rem;
`;

export const NameSpan = styled.span`
  color: var(--blue);
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  height: 75vh;
  justify-content: center;
`;

export const Blogs = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout>
    <H1>
      <NameSpan>Brian Han</NameSpan> is a front-end developer &mdash; building
      things for people on the internet.
    </H1>
    <Blogs>
      {edges.map(
        ({
          node: {
            id,
            excerpt,
            frontmatter: { title, date, excerptCustom, publish },
            fields: { slug },
          },
        }) =>
          publish && (
            <BlogCard
              key={id}
              title={title}
              excerpt={excerptCustom || excerpt}
              date={date}
              to={slug}
            />
          ),
      )}
    </Blogs>
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            # date(fromNow: true)
            date(formatString: "DD MMMM YYYY", locale: "us")
            excerptCustom
            publish
          }
        }
      }
    }
  }
`;

export default IndexPage;
