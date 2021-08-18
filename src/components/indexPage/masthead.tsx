import React, { FC } from 'react'
// import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const Masthead: FC = () => {
  return (
    <StaticImage
      src='https://media.graphcms.com/output=format:jpg/2vRigXbYTEOftZp6lstt'
      alt='Light bulb standing on the floor, turned on and connected to a wall socket.'
      loading='eager'
      formats={['auto', 'webp', 'avif']}
      placeholder='none'
      layout='fullWidth'
    />
  )
}

export default Masthead
