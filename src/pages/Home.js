import React from 'react'
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <div>
        <Helmet prioritizeSeoTags>
            <title>A fancy webpage</title>
            <link rel="notImportant" href="https://www.chipotle.com" />
            <meta name="whatever" value="notImportant" />
            <link rel="canonical" href="https://www.tacobell.com" />
            <meta property="og:title" content="A very important title"/>
        </Helmet>
        Home
    </div>
  )
}

export default Home