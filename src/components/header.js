import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import colors from "./../colors"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Navigation from "react-sticky-nav"

export function BeastcoastLogo() {
  console.log("BeastcoastLogo")
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "beastcoast.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 300) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  console.log("data:", data)
  return (
    <div
      css={css`
        width: 300px;
        height: 300px;
      `}
    >
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="The Beastcoast Wave Logo"
      />
    </div>
  )
}

const PageHeader = ({ siteTitle }) => {
  return (
    <Header>
      <BeastcoastLogo />
      <TeamName>{siteTitle}</TeamName>
      <Navbar disabled={false}>
        <NavbarItem to="/">Home</NavbarItem>
        <NavbarItem to="/player">Player</NavbarItem>
        <NavbarItem to="/players">Players</NavbarItem>
        <NavbarItem to="/news">News</NavbarItem>
        <NavbarItem to="/sponsors">Sponsors</NavbarItem>
        <NavbarItem to="/events">Events</NavbarItem>
        <NavbarItem to="/shop">Shop</NavbarItem>
        <NavbarItem to="/colors">Colors</NavbarItem>
      </Navbar>
    </Header>
  )
}

PageHeader.propTypes = {
  siteTitle: PropTypes.string,
}

PageHeader.defaultProps = {
  siteTitle: ``,
}

export default PageHeader

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const TeamName = styled.h1`
  color: ${colors.teal["0"]};
  margin: 1.45rem 0;
`

const Navbar = styled(Navigation)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.45rem;
`
function NavbarItem({ children, ...linkProps }) {
  return (
    <NavbarLink activeClassName="active" {...linkProps}>
      {children}
    </NavbarLink>
  )
}
const NavbarLink = styled(Link)`
  text-decoration: none;
  color: white;
  margin: 0 1.5rem;
  font-size: 1.5rem;
  &.active {
    text-decoration: underline;
  }
`
