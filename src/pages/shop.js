import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const ShopPage = () => (
  <Layout>
    <SEO title="Shop" />
    <h1>Shop</h1>
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
  </Layout>
)

export default ShopPage
