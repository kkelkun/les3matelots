import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-mdx"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Paper, Container, Divider } from "@material-ui/core"

const StyledPaper = styled(Paper)`
  width: 95%;
  margin: auto;
  padding: 15vh 0;

  && {
    border-radius: 6px;
    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
      0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  }
`
const ViewTitle = styled.h2`
  margin-bottom: 2rem;
  text-transform: uppercase;
`

const StyledDivider = styled(Divider)`
  && {
    margin-bottom: 4rem;
  }
`

const ViewWrapper = ({ title, children }) => (
  <StyledPaper>
    <Container>
      <ViewTitle>{title}</ViewTitle>
      <StyledDivider />
      {children}
    </Container>
  </StyledPaper>
)

const IndexPage = ({
  data: {
    allMdx: { edges: views },
  },
}) => {
  const viewTitles = views.map(({ node: { frontmatter: { title } } }) => ({
    title,
  }))

  const viewsListing = views.map(
    ({
      node: {
        frontmatter: { title },
        code: { body: content },
      },
    }) => (
      <ViewWrapper key={title} title={title}>
        <MDXRenderer>{content}</MDXRenderer>
      </ViewWrapper>
    )
  )
  return (
    <>
      <SEO title="Home" />
      <Layout viewTitles={viewTitles}>{viewsListing}</Layout>
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query MyQuery {
    allMdx(sort: { order: ASC, fields: fileAbsolutePath }) {
      edges {
        node {
          frontmatter {
            title
          }
          code {
            body
          }
        }
      }
    }
  }
`
