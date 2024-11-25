import React from 'react'
import Helmet from 'react-helmet';

const Test = () => {
  return (
    <div>
        <Helmet>
            <title>page | Lumytic</title>
            <meta name="description" content="page desc" />
            <meta name="title" content="page | Lumytic" />
            <meta property="og:title" content="page | Lumytic" />
            <meta property="og:description" content="page desc" />
            <meta property="og:image" content="https://lumytic.com/d1665b83e85f05ae4c9b.webp" />
        </Helmet>
        page
    </div>
  )
}

export default Test