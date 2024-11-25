import React from 'react'
import { Helmet } from 'react-helmet-async';

const Test = () => {
  return (
    <div>
        <head>
            <meta name="description" content="fq desc" />
            <meta name="title" content="fq | Lumytic" />
            <meta name="whatever" value="notImportant" />
            <link rel="canonical" href="https://www.tacobell.com" />
            <meta property="og:title" content="fq | Lumytic"/>
        </head>
        page
    </div>
  )
}

export default Test