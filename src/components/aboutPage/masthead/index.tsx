import React, { FC } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const Masthead: FC = () => {
  const {
    graphCmsAboutPageMasthead: { title, subTitle, imageAlt },
  } = useStaticQuery(graphql`
    query AboutPageMastheadQuery {
      graphCmsAboutPageMasthead {
        title
        subTitle
        heroImage {
          gatsbyImageData
        }
        imageAlt
      }
    }
  `)

  return (
    <section>
      <StaticImage
        src='https://media.graphcms.com/6tRyxN1S5y2NCPLNaT4X'
        alt={imageAlt}
        loading='eager'
        formats={['auto', 'webp', 'avif']}
        placeholder='none'
        layout='fullWidth'
      />
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </section>
  )
}

export default Masthead
