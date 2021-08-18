import React, { FC } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const Masthead: FC = () => {
  const {
    graphCmsServicesPageMasthead: { title, subtitle, imageAlt },
  } = useStaticQuery(graphql`
    query ServicesPageMastheadQuery {
      graphCmsServicesPageMasthead {
        title
        subtitle
        imageAlt
      }
    }
  `)

  return (
    <section>
      <StaticImage
        src='https://media.graphcms.com/GD43mZtDRKKQywCoDhY1'
        alt={imageAlt}
        loading='eager'
        formats={['auto', 'webp', 'avif']}
        placeholder='none'
        layout='fullWidth'
      />
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </section>
  )
}

export default Masthead
