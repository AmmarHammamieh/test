import React from 'react'

const Home = () => {
  document.head.innerHTML(`      <title>About Us</title>
            <meta name="description" content="Learn more about us on this page!" />
            <meta property="og:title" content="About Us" />
            <meta property="og:description" content="Learn more about our company and team" />
            <meta property="og:image" content="https://via.placeholder.com/150" />
            <meta property="og:url" content="https://example.com/about" />`)
  return (
    <div>
        Home
    </div>
  )
}

export default Home