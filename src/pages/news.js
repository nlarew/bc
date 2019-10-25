import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/layout"
import NewsCard from "../components/NewsCard"
import SEO from "../components/seo"

const NewsPage = props => (
  <Layout>
    <SEO title="News" />
    <h1>News</h1>
    <NewsCard />
    <Link to="/">Home</Link>
    <Link to="/players">Players</Link>
    <Link to="/news">News</Link>
    <Link to="/sponsors">Sponsors</Link>
    <Link to="/events">Events</Link>
    <Link to="/shop">Shop</Link>
  </Layout>
)

export default NewsPage
