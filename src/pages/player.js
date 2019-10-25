import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "./../colors"
import { FaArrowLeft } from "react-icons/fa"

const PlayersPage = () => (
  <PlayerFullScreen>
    <Navbar>
      <BackLink to="/">
        <BacklinkIcon />
        <BacklinkText>Back</BacklinkText>
      </BackLink>
    </Navbar>
    {/* <RedBar /> */}
  </PlayerFullScreen>
)

export default PlayersPage

const PlayerFullScreen = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  background: linear-gradient(
    160deg,
    ${colors.teal["70"]} 0%,
    ${colors.teal["80"]} 33%,
    ${colors.teal["90"]} 67%,
    ${colors.teal["100"]} 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Navbar = styled.div`
  height: 96px;
  width: 100%;
  display: flex;
  align-items: center;
`
const BackLink = styled(Link)`
  color: white;
  text-decoration: none;
  height: 20px;
  line-height: 20px;
  margin-left: 20px;
  display: flex;
`
const BacklinkIcon = styled(FaArrowLeft)`
  width: 20px;
  height: 20px;
  vertical-align: middle;
`
const BacklinkText = styled.span`
  padding-left: 10px;
`

const RedBar = styled.div`
  height: 50px;
  width: 100%;
  background: red;
  margin-top: auto;
`
