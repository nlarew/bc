import React from "react"
import styled from "@emotion/styled"

import PageLayout from "../layouts/PageLayout"
import SEO from "../components/seo"
import colors from "./../colors"

const HomePage = props => {
  return (
    <PageLayout>
      <SEO title="Colors" />
      <h1>Colors</h1>
      {Object.entries(colors).map(([key, value]) => {
        switch (typeof value) {
          case "string": {
            return <ColorCard key={key} name={key} color={value} />
          }
          case "object": {
            return (
              <React.Fragment key={key}>
                <ColorFamilyHeader>{key}</ColorFamilyHeader>
                {Object.entries(value).map(([level, value]) => {
                  return <ColorCard key={level} name={level} color={value} />
                })}
              </React.Fragment>
            )
          }
          default:
            return ""
        }
      })}
    </PageLayout>
  )
}
const ColorFamilyHeader = styled.h2`
  margin: 10px 0;
  width: 240px;
  border-bottom: 1px solid black;
`
const ColorSwatch = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  background: ${({ color }) => color};
  border: 0.5px solid #aaa;
`
function ColorCard({ name, color }) {
  return (
    <SkinnyCard>
      <ColorSwatch color={color} />
      <SkinnyCardHeader>{name}</SkinnyCardHeader>
    </SkinnyCard>
  )
}
const SkinnyCard = styled.div`
  border: 0.5px solid #aaa;
  border-radius: 8px;
  width: 240px;
  display: flex;
  margin-bottom: 10px;
  align-items: center;
`
const SkinnyCardHeader = styled.h3`
  margin: 0 auto;
`

export default HomePage
