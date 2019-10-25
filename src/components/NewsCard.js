import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "./image.js"
import colors from "../colors"

export default function NewsCard(props) {
  const data = useStaticQuery(graphql`
    query MyQuery2 {
      file(relativePath: { eq: "beastcoast.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 300) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Content>
        <Heading>Dota 2 Roster Announcement</Heading>
        <Subheading>Gaaaaaaaaaaaaa!</Subheading>
        <Body>
          We are proud to announce the signing of the Anvorgesa stack, coming
          off their inspiring top 8 run at TI9. / Estamos orgullosos en anunciar
          la firma de los jugadores de Anvorgesa, que vienen de su inspiradora
          carrera entre los 8 mejores en el TI9.
        </Body>
      </Content>
      <Accessory>
        <AccessoryImage />
      </Accessory>
    </Layout>
  )
}

const Layout = styled.article`
  width: 100%;
  display: flex;
  max-width: 840px;
  background: palevioletred;
  background: white;
  border-radius: 8px;
`
const Content = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 8px;
`
const Heading = styled.h2`
  color: ${colors.teal["90"]};
  margin-bottom: 8px;
`
const Subheading = styled.h3`
  color: ${colors.teal["20"]};
  font-style: italic;
  color: gray;
  margin: 0;
`
const Body = styled.p``

const Accessory = styled.div`
  background: palevioletred;
  min-width: 300px;
  max-width: 300px;
  border-top-right-radius: 22px;
  border-bottom-right-radius: 22px;
`
const AccessoryImage = styled(Image)`
  border-top-right-radius: 22px;
  border-bottom-right-radius: 22px;
`
