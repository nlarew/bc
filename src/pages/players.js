import React from "react"
import { Link } from "gatsby"

import PageLayout from "../layouts/PageLayout"
import Image from "../components/image"
import SEO from "../components/seo"

const PlayersPage = () => (
  <PageLayout>
    <SEO title="Players" />
    <h1>Players</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/">Home</Link>
    <Link to="/players">Players</Link>
    <Link to="/news">News</Link>
    <Link to="/sponsors">Sponsors</Link>
    <Link to="/events">Events</Link>
    <Link to="/shop">Shop</Link>
  </PageLayout>
)

export default PlayersPage
