import React from "react"
import styled from "@emotion/styled"
import PageLayout from "../layouts/PageLayout"
import SEO from "../components/seo"
import colors from "../colors"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { BeastcoastLogo } from "./../components/header"

const HomePage = props => {
  return (
    <PageLayout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <BeastCard>
        <BeastCardTitle>Mike Haze</BeastCardTitle>
        <BeastCardImage />
      </BeastCard>
      <p>Now go build something great.</p>
      <BeastcoastLogo />
    </PageLayout>
  )
}

export default HomePage

const BeastCard = styled.div`
  border-radius: 8px;
  width: 200px;
  height: 300px;
  background: linear-gradient(
    160deg,
    ${colors.teal["70"]} 0%,
    ${colors.teal["80"]} 33%,
    ${colors.teal["90"]} 67%,
    ${colors.teal["100"]} 100%
  );
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  align-items: center;
`
const BeastCardTitle = styled.h3`
  color: white;
  margin: 0;
  padding: 20px;
`
const Image = props => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "beastmikeplain.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img {...props} fluid={data.placeholderImage.childImageSharp.fluid} />
}
const BeastCardImage = styled(Image)`
  position: relative;
  width: 220px;
  /* left: 0px;
  top: 50px; */
`
