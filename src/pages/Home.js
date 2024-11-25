import React from 'react'
import Helmet from 'react-helmet';

const Home = () => {
  return (
    <div>
         <Helmet async>
            <title>Home | Lumytic</title>
            <meta name="description" content="Home desc" />
            <meta name="title" content="Home | Lumytic" />
            <meta property="og:title" content="Home | Lumytic" />
            <meta property="og:description" content="Home desc" />
            <meta property="og:image" content="https://lumytic.com/d1665b83e85f05ae4c9b.webp" />
        </Helmet>
        Home
    </div>
  )
}

export default Home