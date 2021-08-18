import React, { FC } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const Masthead: FC = () => {
  const {
    graphCmsIndexPageMasthead: { imageAlt },
  } = useStaticQuery(graphql`
    query IndexPageMastheadQuery {
      graphCmsIndexPageMasthead {
        imageAlt
      }
    }
  `)

  return (
    <>
      <StaticImage
        src='https://media.graphcms.com/output=format:jpg/2vRigXbYTEOftZp6lstt'
        alt={imageAlt}
        loading='eager'
        formats={['auto', 'webp', 'avif']}
        placeholder='none'
        layout='fullWidth'
      />
    </>
  )
}

export default Masthead
