import React from 'react'
import { Helmet } from 'react-helmet-async';

const Test = () => {
  return (
    <div>
       <Helmet prioritizeSeoTags>
            <meta name="description" content="so desc" />
            <meta name="title" content="so | Lumytic" />
            <meta name="whatever" value="notImportant" />
            <link rel="canonical" href="https://www.tacobell.com" />
            <meta property="og:title" content="so | Lumytic"/>
        </Helmet>
        page
    </div>
  )
}

export default Test