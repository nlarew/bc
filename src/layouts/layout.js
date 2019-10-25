/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import PageHeader from "../components/header"
import styled from "@emotion/styled"
import colors from "../colors"

const Layout = ({ location, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Page>
      <PageHeader
        location={location}
        siteTitle={data.site.siteMetadata.title}
      />
      <MainContent location={location}>{children}</MainContent>
      <footer>
        <Copyright />
      </footer>
    </Page>
  )
}
const Copyright = () => (
  <span>
    © {new Date().getFullYear()}
    <a href="https://beastcoast.gg">beastcoast</a> - Let's Make Waves
  </span>
)
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout

const Page = styled.div`
  background: ${colors.teal["100"]};
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  overflow-y: scroll;
`
const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 10%;
  align-items: center;
`
export const Body = styled.div`
  min-width: 420px;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`
