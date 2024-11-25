import React from 'react'
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <div>
        <Helmet prioritizeSeoTags>
            <meta name="description" content="po desc" />
            <meta name="title" content="po | Lumytic" />
            <meta name="whatever" value="notImportant" />
            <link rel="canonical" href="https://www.tacobell.com" />
            <meta property="og:title" content="po | Lumytic"/>
        </Helmet>
        Home
    </div>
  )
}

export default Home