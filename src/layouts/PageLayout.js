import React from "react"
import Layout, { Body } from "../layouts/layout"
import styled from "@emotion/styled"

export default function PageLayout(props) {
  return (
    <Layout>
      <CardBody>{props.children}</CardBody>
    </Layout>
  )
}

const CardBody = styled(Body)`
  background: white;
  border-radius: 8px;
  padding: 20px;
`
